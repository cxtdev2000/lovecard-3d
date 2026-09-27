import { wedding } from "../config/wedding";
import { $, $$, pad } from "../lib/dom";
import { getTier } from "../lib/perf";

/** Ticking countdown; each digit group that changes flips in on the X axis. */
export function initCountdown() {
  const target = new Date(wedding.date).getTime();
  const nums = Object.fromEntries($$("[data-cd]").map((el) => [el.dataset.cd!, el]));
  const animate = getTier() !== "reduced" && "animate" in Element.prototype;
  let timer = 0;

  const set = (key: string, value: string) => {
    const el = nums[key];
    if (el.textContent === value) return;
    el.textContent = value;
    if (animate && !document.hidden)
      el.animate(
        [
          { transform: "rotateX(-90deg)", opacity: 0 },
          { transform: "rotateX(0)", opacity: 1 },
        ],
        { duration: 420, easing: "cubic-bezier(.2,.8,.2,1.2)" },
      );
  };

  const tick = () => {
    const left = Math.max(0, target - Date.now());
    const s = Math.floor(left / 1000);
    set("d", pad(Math.floor(s / 86400)));
    set("h", pad(Math.floor((s % 86400) / 3600)));
    set("m", pad(Math.floor((s % 3600) / 60)));
    set("s", pad(s % 60));
    if (left === 0) {
      clearInterval(timer);
      $(".cd-done").hidden = false;
    }
  };
  tick();
  timer = window.setInterval(tick, 1000);
}
