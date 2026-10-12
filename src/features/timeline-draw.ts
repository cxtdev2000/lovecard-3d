import { $ } from "../lib/dom";
import { getTier } from "../lib/perf";

/**
 * Draws the story timeline's spine as the guest scrolls: `--p` (0–1) drives a scaleY on the
 * line and the position of its glowing tip. Only runs while the timeline is near the viewport.
 */
export function initTimelineDraw() {
  const line = $(".timeline");
  if (getTier() === "reduced" || !("IntersectionObserver" in window)) return;

  let raf = 0;
  const update = () => {
    raf = 0;
    const r = line.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.65 - r.top) / r.height));
    line.style.setProperty("--p", p.toFixed(3));
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  line.style.setProperty("--p", "0");
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      addEventListener("scroll", onScroll, { passive: true });
      update();
    } else removeEventListener("scroll", onScroll);
  }).observe(line);
}
