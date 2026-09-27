import { $ } from "../lib/dom";
import { downgrade, getTier, onTierChange } from "../lib/perf";

type Petal = {
  x: number; y: number; size: number; vy: number; vx: number;
  sway: number; swaySpeed: number; rot: number; vr: number; flip: number; vf: number; sprite: number;
};

const COLORS = ["#f4b6c2", "#f8d3da", "#e89aab", "#fbe4d0"];

/** Pre-renders each petal colour once so every frame is just cheap drawImage calls. */
function makeSprites(): HTMLCanvasElement[] {
  return COLORS.map((color) => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d")!;
    g.translate(32, 32);
    const grad = g.createLinearGradient(0, -28, 0, 28);
    grad.addColorStop(0, color);
    grad.addColorStop(1, "#ffffff");
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(0, -28);
    g.bezierCurveTo(22, -20, 20, 14, 0, 28);
    g.bezierCurveTo(-20, 14, -22, -20, 0, -28);
    g.fill();
    return c;
  });
}

/**
 * Falling petals that flutter in pseudo-3D (scaleX = cos(flip) fakes a Y-axis spin).
 * Petal count and resolution scale with the device tier; a frame-time probe during the
 * first seconds downgrades the whole page if the device struggles.
 */
export function initPetals() {
  if (getTier() === "reduced") return { start() {} };
  const canvas = $<HTMLCanvasElement>("#petals");
  const ctx = canvas.getContext("2d");
  if (!ctx) return { start() {} };
  const sprites = makeSprites();
  let petals: Petal[] = [];
  let w = 0;
  let h = 0;
  let dpr = 1;
  let raf = 0;
  let last = 0;
  let running = false;
  let probe = { frames: 0, total: 0 };

  const target = () => {
    const area = Math.min(1, (innerWidth * innerHeight) / (1280 * 800));
    return Math.round((getTier() === "full" ? 28 : 10) * (0.55 + 0.45 * area));
  };

  const spawn = (initial: boolean): Petal => ({
    x: Math.random() * w,
    y: initial ? Math.random() * h : -30,
    size: 10 + Math.random() * 12,
    vy: 28 + Math.random() * 38,
    vx: -8 + Math.random() * 16,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: 0.6 + Math.random() * 1.1,
    rot: Math.random() * Math.PI * 2,
    vr: -1 + Math.random() * 2,
    flip: Math.random() * Math.PI * 2,
    vf: 1.5 + Math.random() * 2.5,
    sprite: Math.floor(Math.random() * sprites.length),
  });

  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, getTier() === "full" ? 1.5 : 1);
    w = innerWidth;
    h = innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const n = target();
    petals = petals.slice(0, n);
    while (petals.length < n) petals.push(spawn(true));
  };

  const frame = (t: number) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (t - (last || t)) / 1000);
    last = t;

    if (probe.frames < 150 && dt > 0) {
      probe.frames++;
      probe.total += dt;
      if (probe.frames === 150 && probe.total / 150 > 1 / 40) downgrade();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of petals) {
      p.sway += p.swaySpeed * dt;
      p.y += p.vy * dt;
      p.x += (p.vx + Math.sin(p.sway) * 22) * dt;
      p.rot += p.vr * dt;
      p.flip += p.vf * dt;
      if (p.y > h + 30 || p.x < -40 || p.x > w + 40) Object.assign(p, spawn(false));
      const s = (p.size / 64) * dpr;
      const fx = Math.cos(p.flip);
      const cos = Math.cos(p.rot);
      const sin = Math.sin(p.rot);
      ctx.globalAlpha = 0.55 + 0.35 * Math.abs(fx);
      ctx.setTransform(cos * s * fx, sin * s * fx, -sin * s, cos * s, p.x * dpr, p.y * dpr);
      ctx.drawImage(sprites[p.sprite], -32, -32);
    }
  };

  const play = () => {
    if (!running || raf || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : play()));
  let resizeTimer = 0;
  addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 150);
  });
  onTierChange(resize);

  return {
    start() {
      running = true;
      resize();
      canvas.classList.add("on");
      play();
    },
  };
}
