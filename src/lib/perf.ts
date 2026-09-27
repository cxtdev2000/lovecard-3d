/**
 * Picks a rendering tier once at start-up so weak phones get a lighter card:
 * `lite` drops pointer tilt, blur and most particles; `reduced` (OS setting) stops motion entirely.
 */
export type Tier = "full" | "lite" | "reduced";

type NavigatorHints = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };

function detect(): Tier {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return "reduced";
  const nav = navigator as NavigatorHints;
  const weakCpu = (nav.hardwareConcurrency ?? 8) <= 4;
  const lowMemory = (nav.deviceMemory ?? 8) <= 3;
  if (weakCpu || lowMemory || nav.connection?.saveData) return "lite";
  return "full";
}

let tier: Tier = detect();
const listeners = new Set<(t: Tier) => void>();

export const getTier = () => tier;
export const canHover = () => matchMedia("(hover: hover) and (pointer: fine)").matches;

export function onTierChange(fn: (t: Tier) => void) {
  listeners.add(fn);
}

/** Downgrades full → lite at runtime (e.g. when measured frame times are poor). */
export function downgrade() {
  if (tier !== "full") return;
  tier = "lite";
  applyTierClass();
  listeners.forEach((fn) => fn(tier));
}

export function applyTierClass() {
  const root = document.documentElement;
  root.classList.toggle("lite", tier !== "full");
  root.classList.toggle("reduced", tier === "reduced");
}
