import { wedding } from "../config/wedding";
import { $, $$ } from "../lib/dom";

/**
 * Coverflow on top of native scroll-snap: the browser does the scrolling (smooth even on
 * weak phones), and we only write one `--d` offset per card per frame for the 3D transform.
 * Card positions are cached on resize, so scrolling never triggers layout reads.
 */
export function initGallery() {
  const track = $("#cf-track");
  const items = $$<HTMLButtonElement>(".cf-item", track);
  const counter = $("#cf-current");
  let centers: number[] = [];
  let width = 1;
  let current = 0;
  let frame = 0;

  const measure = () => {
    width = items[0].offsetWidth || 1;
    centers = items.map((el) => el.offsetLeft + el.offsetWidth / 2);
    update();
  };

  const update = () => {
    frame = 0;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    items.forEach((el, i) => {
      const d = Math.max(-3, Math.min(3, (centers[i] - mid) / width));
      el.style.setProperty("--d", d.toFixed(3));
      el.style.setProperty("--ad", Math.abs(d).toFixed(3));
      el.style.zIndex = String(10 - Math.round(Math.abs(d) * 2));
      if (Math.abs(d) < Math.abs((centers[best] - mid) / width)) best = i;
    });
    if (best !== current) {
      current = best;
      counter.textContent = String(best + 1);
    }
  };

  const goTo = (i: number) => {
    const idx = Math.max(0, Math.min(items.length - 1, i));
    track.scrollTo({ left: centers[idx] - track.clientWidth / 2, behavior: "smooth" });
  };

  track.addEventListener("scroll", () => (frame ||= requestAnimationFrame(update)), { passive: true });
  new ResizeObserver(measure).observe(track);

  $$("[data-cf]").forEach((btn) => btn.addEventListener("click", () => goTo(current + Number(btn.dataset.cf))));
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") goTo(current + 1);
    else if (e.key === "ArrowLeft") goTo(current - 1);
    else return;
    e.preventDefault();
  });

  const lightbox = initLightbox(goTo);
  items.forEach((el, i) =>
    el.addEventListener("click", () => (i === current ? lightbox.open(i) : goTo(i))),
  );
}

function initLightbox(onChange: (i: number) => void) {
  const dlg = $<HTMLDialogElement>("#lightbox");
  const img = $<HTMLImageElement>("#lb-img");
  const photos = wedding.gallery;
  let index = 0;

  const show = (i: number) => {
    index = (i + photos.length) % photos.length;
    img.src = `${photos[index]}.webp`;
    img.alt = `Ảnh cưới ${index + 1}`;
    onChange(index);
  };

  dlg.addEventListener("click", (e) => {
    const btn = (e.target as Element).closest<HTMLElement>("[data-lb]");
    if (btn) {
      if (btn.dataset.lb === "close") dlg.close();
      else show(index + Number(btn.dataset.lb));
    } else if (e.target === dlg) dlg.close();
  });
  dlg.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });

  // Swipe left/right to change photo.
  let startX = 0;
  dlg.addEventListener("pointerdown", (e) => (startX = e.clientX));
  dlg.addEventListener("pointerup", (e) => {
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 45) show(index + (dx < 0 ? 1 : -1));
  });

  return {
    open(i: number) {
      show(i);
      dlg.showModal();
    },
  };
}
