import { heart, sparkle } from "../lib/ornaments";
import { getTier } from "../lib/perf";

/**
 * One-shot burst of hearts and gold sparkles from a point (the envelope seal).
 * Each particle is a single composited element animated with WAAPI and removed when done.
 */
export function sparkleBurst(origin: Element) {
  if (getTier() === "reduced" || !("animate" in Element.prototype)) return;
  const { left, top, width, height } = origin.getBoundingClientRect();
  const cx = left + width / 2;
  const cy = top + height / 2;
  const count = getTier() === "full" ? 26 : 14;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const isHeart = i % 3 === 0;
    el.className = `burst ${isHeart ? "burst-heart" : "burst-spark"}`;
    el.innerHTML = isHeart ? heart : sparkle;
    el.style.left = `${cx}px`;
    el.style.top = `${cy}px`;
    document.body.append(el);

    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
    const dist = 90 + Math.random() * 150;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40; // bias upwards so it reads as "rising"
    const size = 0.6 + Math.random() * 0.8;
    const spin = (Math.random() - 0.5) * 240;
    el.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        { transform: `translate(calc(-50% + ${dx * 0.7}px), calc(-50% + ${dy * 0.7}px)) scale(${size}) rotate(${spin * 0.6}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 60}px)) scale(${size * 0.6}) rotate(${spin}deg)`, opacity: 0 },
      ],
      { duration: 1200 + Math.random() * 600, easing: "cubic-bezier(.2,.8,.3,1)", delay: Math.random() * 120 },
    ).onfinish = () => el.remove();
  }
}
