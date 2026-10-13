import { $ } from "../lib/dom";

/** Smoothstep of `p` across [from, to]: 0 before, 1 after, eased in between. */
const span = (p: number, from: number, to: number) => {
  const t = Math.min(1, Math.max(0, (p - from) / (to - from)));
  return t * t * (3 - 2 * t);
};
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const FOLLOW_S = 0.09; // time constant of the card catching up with the scroll

/**
 * Unfolds the 3D invitation (render.ts foldStage) while its hero is pinned. Scroll progress p:
 * the card glides to the middle as the hero text fades, the framed cover swings open to the left
 * (revealing the photo printed behind its window), then the photo panel turns over to the right
 * to show the invitation inside. Phones, too narrow for the open sheet, pan from panel to panel
 * before pulling back to the whole card; wide screens frame the whole sheet as it opens.
 * The card eases after the scroll rather than snapping to it, so wheel steps still read as motion.
 */
export function initFoldCard() {
  const hero = document.querySelector<HTMLElement>(".hero-fold");
  if (!hero) return;
  const pin = $(".fold-pin", hero);
  const stage = $(".hero-stage", hero);
  const move = $(".fold-move", hero);
  const card = $(".fold-card", hero);
  const flapA = $(".fold-a", hero);
  const flapC = $(".fold-c", hero);

  let pw = 0; // panel width
  let home = [0, 0]; // from the card's place in the layout to the middle of the screen
  let fitOne = 1; // scale for one panel filling a phone screen
  let fitAll = 1; // scale for the whole open sheet
  let wide = false;
  let travel = 1; // scroll distance while pinned
  let shown = 0; // progress currently eased to
  let drawn = -1; // progress last written to the DOM
  let last = 0;
  let raf = 0;

  const measure = () => {
    pw = stage.offsetWidth;
    const ph = stage.offsetHeight;
    let x = 0;
    let y = 0;
    for (let n: HTMLElement | null = stage; n && n !== pin; n = n.offsetParent as HTMLElement | null) {
      x += n.offsetLeft;
      y += n.offsetTop;
    }
    const [vw, vh] = [pin.clientWidth, pin.clientHeight];
    home = [vw / 2 - x - pw / 2, vh / 2 - y - ph / 2];
    fitOne = Math.min(1.15, (vw - 40) / pw, (vh - 96) / ph);
    fitAll = Math.min(1, (vw - 48) / (3 * pw), (vh - 96) / ph);
    wide = fitAll >= 0.8;
    travel = Math.max(1, hero.offsetHeight - pin.offsetHeight);
  };

  const draw = (p: number) => {
    const lift = span(p, 0, 0.16);
    const a = span(p, 0.06, 0.34);
    const c = span(p, 0.42, 0.7);
    const rest = span(p, 0.86, 1); // pulled back over the whole sheet as the pin lets go
    let cam: number; // which panel is centred: -1 A, 0 B, 1 C
    let s: number;
    if (wide) {
      cam = -0.5 * a + 0.5 * c;
      s = mix(1, fitAll, Math.max(a, c)) * (1 - 0.05 * rest);
    } else {
      cam = span(p, 0.74, 0.86) * (1 - rest);
      s = mix(mix(1, fitOne, lift), fitAll, rest);
    }
    // Lean towards whichever panel is moving, and settle back like a card laid on a table.
    const yaw = 10 * (Math.sin(Math.PI * c) - Math.sin(Math.PI * a));
    const tilt = 12 * rest;

    move.style.transform = `translate3d(${home[0] * lift}px, ${home[1] * lift}px, 0) scale(${s})`;
    card.style.transform = `rotateX(${tilt}deg) rotateY(${yaw}deg) translate3d(${-cam * pw}px, 0, 0)`;
    // A tiny lift keeps the folded panels from z-fighting with the one below.
    flapA.style.transform = `translate3d(0, 0, ${2 * (1 - a)}px) rotateY(${180 * (1 - a)}deg)`;
    flapC.style.transform = `translate3d(0, 0, ${1 - c}px) rotateY(${-180 * (1 - c)}deg)`;
    flapA.style.setProperty("--shade", (0.5 * Math.sin(Math.PI * a)).toFixed(3));
    flapC.style.setProperty("--shade", (0.5 * Math.sin(Math.PI * c)).toFixed(3));
    pin.style.setProperty("--fade", lift.toFixed(3));
  };

  const target = () => Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / travel));

  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    const goal = target();
    shown += (goal - shown) * (1 - Math.exp(-dt / FOLLOW_S));
    if (Math.abs(goal - shown) < 0.0005) shown = goal;
    // Past the hero, every scroll lands here with nothing to change: skip the style writes.
    if (shown !== drawn) draw((drawn = shown));
    raf = shown === goal ? 0 : requestAnimationFrame(frame);
    if (!raf) last = 0;
  };
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  // The pin follows the viewport; the grid shifts as fonts load. Jump, don't glide, after either.
  const ro = new ResizeObserver(() => {
    measure();
    shown = target();
    draw((drawn = shown));
  });
  ro.observe(pin);
  ro.observe($(".hero-grid", hero));
  addEventListener("scroll", schedule, { passive: true });
}
