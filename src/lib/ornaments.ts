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
