import { $$ } from "./dom";

/**
 * Pauses the looping CSS animations (rays, orbits, marquees, twinkles...) of blocks scrolled out of
 * view by toggling `.offscreen`; they resume where they left off, so nothing visible changes.
 */
export function initPauseOffscreen() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.target.classList.toggle("offscreen", !e.isIntersecting);
    },
    { rootMargin: "200px 0px" },
  );
  $$(".hero, .ribbons, .card > .section, .footer").forEach((el) => io.observe(el));
}
