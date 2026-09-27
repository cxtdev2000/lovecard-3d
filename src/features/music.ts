import { $ } from "../lib/dom";

/** Background music; must first be started from a user gesture (the envelope tap). */
export function initMusic() {
  const audio = $<HTMLAudioElement>("#music");
  const btn = $<HTMLButtonElement>("#music-btn");
  let wanted = false;

  const sync = () => {
    const playing = !audio.paused;
    btn.classList.toggle("playing", playing);
    btn.setAttribute("aria-pressed", String(playing));
  };
  audio.addEventListener("play", sync);
  audio.addEventListener("pause", sync);

  const play = () => {
    wanted = true;
    audio.volume = 0.6;
    audio.play().catch(() => {
      wanted = false;
      sync();
    });
  };

  btn.addEventListener("click", () => {
    if (audio.paused) play();
    else {
      wanted = false;
      audio.pause();
    }
  });

  // Save battery: pause while the tab is hidden, resume if the guest had it on.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) audio.pause();
    else if (wanted) audio.play().catch(() => {});
  });

  return {
    start() {
      btn.hidden = false;
      play();
    },
  };
}
