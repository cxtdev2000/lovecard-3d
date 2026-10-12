import { $, $$ } from "../lib/dom";
import { heart } from "../lib/ornaments";
import { getTier } from "../lib/perf";

const NS = "http://www.w3.org/2000/svg";
const SAMPLES = 240;

/**
 * "Sợi chỉ hồng": one thread running down the card. It hugs alternate edges through each section,
 * swoops across in the gaps between them and ends at the footer rings. It is drawn up to the
 * reading line as the guest scrolls, with a small heart riding its tip.
 */
export function initLoveThread() {
  const card = $("#card");
  const sections = $$(".card > .section");
  const footer = $(".footer", card);
  if (!sections.length) return;

  const svg = document.createElementNS(NS, "svg");
  svg.classList.add("thread");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(NS, "path");
  svg.append(path);
  const tip = document.createElement("span");
  tip.className = "thread-tip";
  tip.setAttribute("aria-hidden", "true");
  tip.innerHTML = heart;
  card.prepend(svg, tip);

  const animated = getTier() !== "reduced";
  let len = 0;
  let ys: number[] = []; // y of the point at each length sample; non-decreasing down the path
  let raf = 0;

  const build = () => {
    const w = card.clientWidth;
    const inset = Math.min(48, Math.max(8, w * 0.025));
    const mid = w / 2;
    const bounds = [...sections.map((s) => s.offsetTop), footer.offsetTop];
    let d = `M${mid} ${bounds[0]}`;
    for (let i = 0; i < bounds.length - 1; i++) {
      const [top, bottom] = [bounds[i], bounds[i + 1]];
      const side = i % 2 ? w - inset : inset;
      const g = Math.min(56, (bottom - top) / 4);
      d += `C${side} ${top} ${side} ${top} ${side} ${top + g}L${side} ${bottom - g}C${side} ${bottom} ${side} ${bottom} ${mid} ${bottom}`;
    }
    path.setAttribute("d", d);
    len = path.getTotalLength();
    ys = Array.from({ length: SAMPLES + 1 }, (_, i) => path.getPointAtLength((len * i) / SAMPLES).y);
    if (animated) path.style.strokeDasharray = `${len}`;
  };

  const update = () => {
    raf = 0;
    const target = innerHeight * 0.62 - card.getBoundingClientRect().top;
    const i = ys.findIndex((y) => y >= target);
    let drawn = len;
    if (i === 0) drawn = 0;
    else if (i > 0) {
      const span = ys[i] - ys[i - 1] || 1;
      drawn = (len * (i - 1 + (target - ys[i - 1]) / span)) / SAMPLES;
    }
    path.style.strokeDashoffset = `${len - drawn}`;
    const p = path.getPointAtLength(drawn);
    tip.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    tip.classList.toggle("on", drawn > 0 && drawn < len);
  };
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  // Sections size themselves lazily (content-visibility) and fonts/images shift them: rebuild on resize.
  new ResizeObserver(() => {
    build();
    if (animated) schedule();
  }).observe(card);
  if (animated) addEventListener("scroll", schedule, { passive: true });
}
