/** Escapes text for safe interpolation into HTML templates. */
export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export function $<T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T {
  const el = root.querySelector<T>(sel);
  if (!el) throw new Error(`Missing element: ${sel}`);
  return el;
}

export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

/** Responsive <img> for a photo base (`<base>.webp` + `<base>-sm.webp`). */
export function photo(base: string, alt: string, opts: { sizes?: string; eager?: boolean; cls?: string } = {}) {
  const { sizes = "(max-width: 640px) 90vw, 480px", eager = false, cls = "" } = opts;
  return `<img class="${cls}" src="${base}-sm.webp" srcset="${base}-sm.webp 480w, ${base}.webp 900w" sizes="${sizes}"
    alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" draggable="false">`;
}

export const pad = (n: number) => String(n).padStart(2, "0");
const VN_TZ = "Asia/Ho_Chi_Minh";

/** Date parts in the wedding's time zone, whatever the guest's device zone is. */
export function dateParts(iso: string) {
  const d = new Date(iso);
  const get = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("vi-VN", { timeZone: VN_TZ, ...o }).format(d);
  const [day, month, year] = get({ day: "2-digit", month: "2-digit", year: "numeric" }).split("/");
  return {
    day,
    month,
    year,
    weekday: get({ weekday: "long" }),
    time: get({ hour: "2-digit", minute: "2-digit", hour12: false }),
  };
}
