import { $$ } from "./dom";
import { canHover, getTier } from "./perf";

/**
 * Pointer-driven 3D tilt for `[data-tilt]` on desktop-class devices only.
 * Writes two CSS variables per frame at most; the transform itself lives in CSS.
 */
export function initTilt() {
  if (getTier() !== "full" || !canHover()) return;
  for (const el of $$("[data-tilt]")) {
    const max = Number(el.dataset.tilt) || 10;
    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
    };
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      x = (e.clientX - r.left) / r.width - 0.5;
      y = (e.clientY - r.top) / r.height - 0.5;
      frame ||= requestAnimationFrame(apply);
    });
    el.addEventListener("pointerleave", () => {
      x = y = 0;
      frame ||= requestAnimationFrame(apply);
    });
  }
}
