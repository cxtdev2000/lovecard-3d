import { heart, sparkle } from "../lib/ornaments";
import { getTier } from "../lib/perf";

/**
 * One-shot burst of hearts and gold sparkles from the centre of `origin` (the envelope seal, a
 * timeline heart...). Each particle is a single composited element animated with WAAPI and removed
 * when done. `size` scales the particle count and spread; `anchored` puts the particles inside
 * `origin` (which must be positioned) so they travel with it while the page scrolls.
 */
export function sparkleBurst(origin: Element, { size = 1, anchored = false } = {}) {
  if (getTier() === "reduced" || !("animate" in Element.prototype)) return;
  const { left, top, width, height } = origin.getBoundingClientRect();
  const cx = left + width / 2;
  const cy = top + height / 2;
  const count = Math.round((getTier() === "full" ? 26 : 14) * size);

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const isHeart = i % 3 === 0;
    el.className = `burst ${isHeart ? "burst-heart" : "burst-spark"}`;
    el.innerHTML = isHeart ? heart : sparkle;
    if (anchored) {
      el.classList.add("anchored");
      origin.append(el);
    } else {
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      document.body.append(el);
    }

    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
    const dist = (90 + Math.random() * 150) * size;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40 * size; // bias upwards so it reads as "rising"
    const grow = 0.6 + Math.random() * 0.8;
    const spin = (Math.random() - 0.5) * 240;
    el.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        { transform: `translate(calc(-50% + ${dx * 0.7}px), calc(-50% + ${dy * 0.7}px)) scale(${grow}) rotate(${spin * 0.6}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 60 * size}px)) scale(${grow * 0.6}) rotate(${spin}deg)`, opacity: 0 },
      ],
      { duration: 1200 + Math.random() * 600, easing: "cubic-bezier(.2,.8,.3,1)", delay: Math.random() * 120 },
    ).onfinish = () => el.remove();
  }
}
