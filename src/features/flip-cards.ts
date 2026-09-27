import { $$ } from "../lib/dom";

export function initFlipCards() {
  for (const card of $$("[data-flip]")) {
    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("flipped");
      card.setAttribute("aria-pressed", String(flipped));
    });
  }
}
