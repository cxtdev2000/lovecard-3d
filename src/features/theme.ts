import { themes, isThemeId, type Palette, type Theme, type ThemeId } from "../config/themes";
import { wedding } from "../config/wedding";
import { $, $$ } from "../lib/dom";

const STORAGE_KEY = "lovecard-theme";

const cssVar: Record<keyof Palette, string> = {
  ivory: "--ivory",
  paper: "--paper",
  blush: "--blush",
  rose: "--rose",
  roseDeep: "--rose-deep",
  wine: "--wine",
  gold: "--gold",
  ink: "--ink",
  muted: "--muted",
};

type Rgb = [number, number, number];

const toRgb = (hex: string): Rgb => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const toHex = (c: Rgb) => `#${c.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
/** `a` mixed with `w` (0–1) of `b`. */
const mix = (a: Rgb, b: Rgb, w: number): Rgb => [0, 1, 2].map((i) => a[i] + (b[i] - a[i]) * w) as Rgb;

/**
 * Every non-palette colour the stylesheet uses (envelope tints, seal, footer, shadows...).
 * Computed here instead of CSS color-mix() so the card still renders on Safari 14 / old in-app browsers.
 */
function derived(c: Palette): Record<string, string> {
  const [rose, blush, wine, gold, ink] = [c.rose, c.blush, c.wine, c.gold, c.ink].map(toRgb);
  const black: Rgb = [0, 0, 0];
  const goldLight = mix(gold, toRgb("#fff3d6"), 0.45);
  const wineDark = mix(wine, black, 0.3);
  const vars: Record<string, string> = {
    "--gold-light": toHex(goldLight),
    "--gold-ribbon": toHex(mix(gold, [255, 255, 255], 0.2)),
    "--wine-light": toHex(mix(wine, toRgb(c.roseDeep), 0.25)),
    "--wine-dark": toHex(wineDark),
    "--line": toHex(mix(blush, toRgb(c.muted), 0.15)),
  };
  for (let p = 20; p <= 80; p += 10) vars[`--tint-${p}`] = toHex(mix(blush, rose, p / 100));
  const channels: Record<string, Rgb> = {
    wine, rose, gold, ink, "gold-light": goldLight, "wine-dark": wineDark, shade: mix(wine, black, 0.75),
  };
  for (const [k, v] of Object.entries(channels)) vars[`--${k}-rgb`] = v.map(Math.round).join(", ");
  return vars;
}

const listeners = new Set<(t: Theme) => void>();
let current: ThemeId = wedding.theme;

export const getTheme = (): Theme => themes[current];

export function onThemeChange(fn: (t: Theme) => void) {
  listeners.add(fn);
}

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // Storage can be blocked in private mode / in-app browsers.
  }
}

/** Priority: `?theme=` in the link → the guest's last pick → the default from config. */
function initialTheme(): ThemeId {
  const fromUrl = new URLSearchParams(location.search).get("theme");
  if (isThemeId(fromUrl)) return fromUrl;
  const stored = readStored();
  if (wedding.themePicker && isThemeId(stored)) return stored;
  return wedding.theme;
}

export function applyTheme(id: ThemeId) {
  current = id;
  const root = document.documentElement;
  const { colors } = themes[id];
  for (const key of Object.keys(cssVar) as (keyof Palette)[]) root.style.setProperty(cssVar[key], colors[key]);
  for (const [name, value] of Object.entries(derived(colors))) root.style.setProperty(name, value);
  root.dataset.theme = id;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", colors.ivory);
  listeners.forEach((fn) => fn(themes[id]));
}

/** Applies the starting theme; call before render so the first paint is already themed. */
export function bootTheme() {
  applyTheme(initialTheme());
}

/** Floating palette button + swatch panel letting guests switch themes. */
export function initThemePicker() {
  const btn = document.querySelector<HTMLButtonElement>("#theme-btn");
  if (!btn) return;
  const panel = $("#theme-panel");
  const options = $$<HTMLButtonElement>("[data-theme-id]", panel);

  const sync = () => options.forEach((o) => o.setAttribute("aria-pressed", String(o.dataset.themeId === current)));
  const setOpen = (open: boolean) => {
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", () => setOpen(Boolean(panel.hidden)));
  panel.addEventListener("click", (e) => {
    const id = (e.target as Element).closest<HTMLElement>("[data-theme-id]")?.dataset.themeId;
    if (!isThemeId(id)) return;
    applyTheme(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* Not persisting is fine. */
    }
    sync();
  });
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !(e.target as Element).closest("#theme-btn, #theme-panel")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) {
      setOpen(false);
      btn.focus();
    }
  });
  sync();
}
