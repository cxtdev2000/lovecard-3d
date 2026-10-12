import { $, $$ } from "../lib/dom";
import { heart } from "../lib/ornaments";
import { getTier } from "../lib/perf";
import { sparkleBurst } from "./sparkle-burst";

const NS = "http://www.w3.org/2000/svg";
const SAMPLES = 240;
const BEAD_GAP = 3; // px of thread left bare around each timeline heart
const TIE_MS = 2600; // the finale: weaving the footer rings

type Stop = { el: HTMLElement; anchor: HTMLElement; y: number; lit: boolean };

/**
 * "Sợi chỉ hồng": one thread running down the card. It hugs alternate edges through each section,
 * swoops across in the gaps between them and becomes the story timeline's spine, with its hearts
 * strung on it like beads. It is drawn up to the reading line as the guest scrolls, with a small
 * heart riding its tip. Whatever it passes lights up: each `[data-thread-stop]` gets `.lit` and a
 * `thread` event (detail: lit or not) when the tip crosses it, plus a little burst on the way down.
 * The attribute's value, if any, picks the child to measure (e.g. the timeline heart).
 * On reaching the footer it turns gold and weaves the two wedding rings by itself, then the stone sparkles.
 */
export function initLoveThread() {
  const card = $("#card");
  const sections = $$(".card > .section");
  const footer = $(".footer", card);
  const rings = $(".footer-rings", footer);
  const timeline = $(".timeline", card);
  if (!sections.length) return;

  const svg = document.createElementNS(NS, "svg");
  svg.classList.add("thread");
  svg.setAttribute("aria-hidden", "true");
  // Ink fades from rose to gold where the thread enters the footer; the mask cuts it around each
  // timeline heart so the beads sit on top of it.
  svg.innerHTML =
    `<linearGradient id="thread-ink" gradientUnits="userSpaceOnUse" x1="0" x2="0">` +
    `<stop class="ink-rose"/><stop class="ink-gold" offset="1"/></linearGradient>` +
    `<mask id="thread-beads" maskUnits="userSpaceOnUse"></mask><path mask="url(#thread-beads)"/>`;
  const ink = $("linearGradient", svg);
  const beads = $("mask", svg);
  const path = $<SVGPathElement>("path", svg);
  const tip = document.createElement("span");
  tip.className = "thread-tip";
  tip.setAttribute("aria-hidden", "true");
  tip.innerHTML = heart;
  card.prepend(svg, tip);
  footer.classList.add("threaded"); // hides the static rings; the thread draws them

  const animated = getTier() !== "reduced";
  let len = 0;
  let scrollLen = 0; // length of the scroll-driven part, up to the footer
  let ys: number[] = []; // y of the point at each length sample; non-decreasing down that part
  let footerTop = 0;
  let raf = 0;
  let tie: "idle" | "tying" | "tied" = "idle";
  let tieRaf = 0;
  let stops: Stop[] = [];

  /** Position inside the card. Offsets ignore transforms, so reveal animations don't skew it. */
  const offsetIn = (el: HTMLElement) => {
    let x = 0;
    let y = 0;
    for (let n: HTMLElement | null = el; n && n !== card; n = n.offsetParent as HTMLElement | null) {
      x += n.offsetLeft;
      y += n.offsetTop;
    }
    return { x, y };
  };

  /** Centre of each timeline heart; they all sit on the spine. */
  const beadCentres = () =>
    $$(".tl-dot", timeline).map((dot) => {
      const { x, y } = offsetIn(dot);
      return { x: x + dot.offsetWidth / 2, y: y + dot.offsetHeight / 2, r: dot.offsetWidth / 2 + BEAD_GAP };
    });

  /**
   * The rings in one stroke, in the 124×84 space of `rings` (lib/ornaments): drop onto the upper
   * crossing point, loop the left ring, loop the right ring up to its top, then trace the stone.
   */
  const ringsPath = () => {
    const { x, y } = offsetIn(rings);
    const s = rings.offsetWidth / 124;
    const at = (u: number, v: number) => `${x + u * s} ${y + v * s}`;
    const r = 26 * s;
    const top = at(62, 35.24); // where the rings cross (centres 44/80, 54; radius 26)
    const bottom = at(62, 72.76);
    return (
      `L${top}A${r} ${r} 0 1 0 ${bottom}A${r} ${r} 0 0 0 ${top}` +
      `A${r} ${r} 0 1 1 ${bottom}A${r} ${r} 0 0 1 ${at(80, 28)}` +
      `l${-6 * s} ${-7 * s}l${3 * s} ${-4 * s}h${6 * s}l${3 * s} ${4 * s}l${-6 * s} ${7 * s}`
    );
  };

  const build = () => {
    const w = card.clientWidth;
    const inset = Math.min(48, Math.max(8, w * 0.025));
    const mid = w / 2;
    footerTop = footer.offsetTop;
    const bounds = [...sections.map((s) => s.offsetTop), footerTop];
    const dots = beadCentres();
    let d = `M${mid} ${bounds[0]}`;
    for (let i = 0; i < bounds.length - 1; i++) {
      const [top, bottom] = [bounds[i], bounds[i + 1]];
      const side = i % 2 ? w - inset : inset;
      const g = Math.min(56, (bottom - top) / 4);
      d += `C${side} ${top} ${side} ${top} ${side} ${top + g}`;
      let x = side;
      if (dots.length && sections[i].contains(timeline)) {
        // Down the edge past the heading, step across to the spine, then run down it.
        // Clamped because a not-yet-rendered section (content-visibility) reports a placeholder height.
        const head = $(".sec-head", sections[i]);
        const clamp = (y: number) => Math.min(Math.max(y, top + g), bottom - g);
        const from = clamp(offsetIn(head).y + head.offsetHeight);
        const to = clamp(offsetIn(timeline).y);
        const bend = (from + to) / 2;
        x = dots[0].x;
        d += `L${side} ${from}C${side} ${bend} ${x} ${bend} ${x} ${to}`;
      }
      d += `L${x} ${bottom - g}C${x} ${bottom} ${x} ${bottom} ${mid} ${bottom}`;
    }
    path.setAttribute("d", d);
    scrollLen = path.getTotalLength();
    ys = Array.from({ length: SAMPLES + 1 }, (_, i) => path.getPointAtLength((scrollLen * i) / SAMPLES).y);
    path.setAttribute("d", d + ringsPath());
    len = path.getTotalLength();

    stops = $$("[data-thread-stop]", card).map((el) => {
      const anchor = el.dataset.threadStop ? $(el.dataset.threadStop, el) : el;
      return { el, anchor, y: offsetIn(anchor).y + anchor.offsetHeight / 2, lit: el.classList.contains("lit") };
    });
    if (!animated) for (const s of stops) s.el.classList.add("lit"); // nothing travels, so everything is lit

    ink.setAttribute("y1", String(footerTop - 80));
    ink.setAttribute("y2", String(footerTop + 40));
    beads.innerHTML =
      `<rect width="${w}" height="${card.clientHeight}" fill="#fff"/>` +
      dots.map((b) => `<circle cx="${b.x}" cy="${b.y}" r="${b.r}" fill="#000"/>`).join("");
    if (animated) {
      path.style.strokeDasharray = `${len}`;
      if (tie === "tied") paint(len);
    }
  };

  const paint = (drawn: number) => {
    path.style.strokeDashoffset = `${len - drawn}`;
    const p = path.getPointAtLength(drawn);
    tip.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    tip.classList.toggle("on", drawn > 0 && drawn < len);
    tip.classList.toggle("gilded", p.y > footerTop);
    for (const s of stops) {
      const lit = p.y >= s.y;
      if (lit === s.lit) continue;
      s.lit = lit;
      s.el.classList.toggle("lit", lit);
      s.el.dispatchEvent(new CustomEvent("thread", { detail: lit }));
      // Only celebrate what the guest can see; a fast fling past many stops stays quiet.
      if (lit && p.y - s.y < innerHeight / 2) sparkleBurst(s.anchor, { size: 0.35, anchored: true });
    }
  };

  /** Finale: once the thread reaches the footer it weaves the rings on its own, then they sparkle. */
  const startTie = () => {
    if (tie !== "idle") return;
    tie = "tying";
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / TIE_MS);
      const e = k < 0.5 ? 4 * k ** 3 : 1 - (-2 * k + 2) ** 3 / 2; // ease-in-out
      paint(scrollLen + (len - scrollLen) * e);
      if (k < 1) tieRaf = requestAnimationFrame(step);
      else {
        tie = "tied";
        footer.classList.add("tied");
      }
    };
    tieRaf = requestAnimationFrame(step);
  };
  const untie = () => {
    if (tie === "idle") return;
    cancelAnimationFrame(tieRaf);
    tie = "idle";
    footer.classList.remove("tied");
  };

  const update = () => {
    raf = 0;
    if (!len) return; // a scroll can land before the first build
    const target = innerHeight * 0.62 - card.getBoundingClientRect().top;
    const i = ys.findIndex((y) => y >= target);
    if (i < 0) return startTie(); // past the footer top
    untie();
    const span = ys[i] - ys[i - 1] || 1;
    paint(i === 0 ? 0 : (scrollLen * (i - 1 + (target - ys[i - 1]) / span)) / SAMPLES);
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
  else footer.classList.add("tied");
}
