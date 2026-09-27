import { $ } from "../lib/dom";
import { getTier } from "../lib/perf";

/** Fills the guest name from `?to=` (e.g. ?to=Anh%20Minh) so each link can be personalised. */
function personalise() {
  const to = new URLSearchParams(location.search).get("to")?.trim();
  if (to) $("#guest-name").textContent = to.slice(0, 60);
}

/** Opening sequence: flap swings open in 3D → letter rises → the whole intro dissolves into the card. */
export function initEnvelope(onOpen: () => void) {
  personalise();
  const intro = $("#intro");
  const envelope = $<HTMLButtonElement>("#envelope");
  const card = $("#card");
  document.body.classList.add("locked");
  // A reload would otherwise restore the old scroll position behind the envelope.
  history.scrollRestoration = "manual";
  scrollTo(0, 0);

  const fast = getTier() === "reduced";
  let opened = false;

  envelope.addEventListener("click", () => {
    if (opened) return;
    opened = true;
    onOpen();
    intro.classList.add("opening");
    window.setTimeout(
      () => {
        intro.classList.add("opened");
        card.inert = false;
        document.body.classList.remove("locked");
        card.classList.add("shown");
      },
      fast ? 0 : 1500,
    );
    window.setTimeout(() => intro.remove(), fast ? 400 : 2400);
  });
}
