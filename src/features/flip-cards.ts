import { $$ } from "../lib/dom";

export function initFlipCards() {
  for (const card of $$("[data-flip]")) {
    const flip = (on: boolean) => {
      card.classList.toggle("flipped", on);
      card.setAttribute("aria-pressed", String(on));
    };
    card.addEventListener("click", () => flip(!card.classList.contains("flipped")));
    // Guests rarely discover the tap, so the love thread turns each card over as its heart passes
    // (and back when scrolling up). The bride follows a beat later when both sit side by side.
    card.addEventListener("thread", (e) => {
      const on = (e as CustomEvent<boolean>).detail;
      setTimeout(() => flip(on), card.classList.contains("bride") ? 220 : 0);
    });
  }
}
