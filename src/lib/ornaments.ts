import { $$ } from "./dom";

/**
 * Hand-drawn line-art assets. All strokes use currentColor so they follow the active theme,
 * and every shape is a <path> so `[data-draw]` can animate it being drawn (see measureDrawPaths).
 */

export const heart = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4 2.2.4-.9 1.8-2.2 4-2.2 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z"/></svg>`;

const petal = (k: number) => `<path d="M132 30q-9-13 0-21q9 8 0 21z" transform="rotate(${k * 72} 132 30)"/>`;

/** Flowering branch growing from the bottom-left corner of its box towards the top-right. */
export const sprig = `
<svg class="sprig" viewBox="0 0 160 160" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 152C40 132 70 110 92 80S120 44 132 30"/>
  <path d="M60 118C66 100 64 86 56 74"/>
  <path d="M96 74C112 74 126 80 136 92"/>
  <path d="M30 140Q14 128 16 110Q32 120 30 140z"/>
  <path d="M46 128Q64 132 74 146Q54 146 46 128z"/>
  <path d="M56 74Q44 60 48 44Q62 56 56 74z"/>
  <path d="M78 98Q98 98 108 112Q88 114 78 98z"/>
  <path d="M136 92Q152 96 156 112Q140 108 136 92z"/>
  <path d="M110 54Q96 42 98 26Q112 38 110 54z"/>
  ${[0, 1, 2, 3, 4].map(petal).join("")}
  <path d="M68 96a2.5 2.5 0 1 0 .01 0M118 66a2.5 2.5 0 1 0 .01 0M40 112a2 2 0 1 0 .01 0"/>
</svg>`;

/** Two interlocking wedding rings with a small stone. */
export const rings = `
<svg class="rings" viewBox="0 0 124 84" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 54a26 26 0 1 0 52 0a26 26 0 1 0-52 0"/>
  <path d="M54 54a26 26 0 1 0 52 0a26 26 0 1 0-52 0"/>
  <path d="M80 28l-6-7 3-4h6l3 4z"/>
  <path d="M80 8V2M92 12l4-4M68 12l-4-4"/>
</svg>`;

const lace = (k: number) =>
  `<path d="M100 62Q114 38 100 14Q86 38 100 62z" transform="rotate(${k * 30} 100 100)"/>` +
  `<path d="M100 22l4 7-4 7-4-7z" transform="rotate(${k * 30 + 15} 100 100)"/>`;

/** Lace rosette: two rings, twelve petals and diamonds between them. */
export const medallion = `
<svg class="medallion-art" viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".6" stroke-linejoin="round">
  <path d="M3 100a97 97 0 1 0 194 0a97 97 0 1 0-194 0"/>
  <path d="M8 100a92 92 0 1 0 184 0a92 92 0 1 0-184 0"/>
  ${Array.from({ length: 12 }, (_, k) => lace(k)).join("")}
  <path d="M66 100a34 34 0 1 0 68 0a34 34 0 1 0-68 0"/>
</svg>`;

const tick = (i: number) => {
  const a = (i * Math.PI) / 30;
  const [r1, r2] = i % 5 ? [86, 92] : [78, 92];
  const pt = (r: number) => `${(100 + r * Math.sin(a)).toFixed(1)} ${(100 - r * Math.cos(a)).toFixed(1)}`;
  return `M${pt(r1)}L${pt(r2)}`;
};

/**
 * Clock dial behind the countdown. The second hand sweeps once a minute, started at the
 * current second so it lines up with the ticking digits.
 */
export const dial = (second: number) => `
<svg viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round">
  <path stroke-width=".6" d="M2 100a98 98 0 1 0 196 0a98 98 0 1 0-196 0M30 100a70 70 0 1 0 140 0a70 70 0 1 0-140 0"/>
  <path stroke-width="1" d="${Array.from({ length: 60 }, (_, i) => tick(i)).join("")}"/>
  <path class="dial-hand" stroke-width="1.2" d="M100 112V16M97 100a3 3 0 1 0 6 0a3 3 0 1 0-6 0" style="animation-delay:-${second}s"/>
</svg>`;

/** Three nested arches, echoing the hero photo frame, behind the event cards. */
export const arches = `
<svg viewBox="0 0 300 300" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".8">
  <path d="M20 300V150a130 130 0 0 1 260 0V300"/>
  <path d="M44 300V150a106 106 0 0 1 212 0V300"/>
  <path d="M68 300V150a82 82 0 0 1 164 0V300"/>
  <path d="M150 20V4M150 4l-4 6M150 4l4 6"/>
</svg>`;

/** Four-point star used for twinkles and the envelope burst (filled). */
export const sparkle = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/></svg>`;

/**
 * Gives each path inside `[data-draw]` its own length (`--len`) and order (`--k`)
 * so CSS can draw the strokes one after another. Without this the art simply shows fully drawn.
 */
export function measureDrawPaths() {
  for (const svg of $$("[data-draw]")) {
    $$<SVGPathElement>("path", svg).forEach((p, k) => {
      p.style.setProperty("--len", String(Math.ceil(p.getTotalLength()) + 1));
      p.style.setProperty("--k", String(k));
    });
  }
}
