import { $, $$ } from "../lib/dom";
import { getTier } from "../lib/perf";
import { copyText, toast } from "../lib/toast";

/** Gift box: the lid pops off in 3D, then the bank cards with VietQR codes rise out. */
export function initGift() {
  const box = $<HTMLButtonElement>("#giftbox");
  const cards = $("#bank-cards");
  box.addEventListener("click", () => {
    if (box.classList.contains("open")) return;
    box.classList.add("open");
    box.setAttribute("aria-expanded", "true");
    window.setTimeout(() => {
      cards.hidden = false;
      requestAnimationFrame(() => cards.classList.add("in"));
    }, getTier() === "reduced" ? 0 : 650);
  });

  for (const btn of $$("[data-copy]")) {
    btn.addEventListener("click", async () => {
      const ok = await copyText(btn.dataset.copy!);
      toast(ok ? "Đã sao chép số tài khoản" : "Không sao chép được, bạn vui lòng ghi lại nhé");
    });
  }
}
