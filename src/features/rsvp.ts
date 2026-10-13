import { wedding } from "../config/wedding";
import { $ } from "../lib/dom";
import { copyText, toast } from "../lib/toast";

type Attend = "yes" | "maybe" | "no";

/**
 * There is no server: the RSVP is sent as a pre-filled SMS (or pasted into Zalo)
 * to the host's phone, so replies land straight in the couple's inbox.
 */
export function initRsvp() {
  const form = $<HTMLFormElement>("#rsvp-form");
  const error = $(".form-error", form);
  const phone = wedding.groom.phone ?? "";

  // The head count only matters for guests who may come.
  const guestsField = $("[data-guests]", form);
  form.addEventListener("change", (ev) => {
    const t = ev.target as HTMLInputElement;
    if (t.name === "attend") guestsField.hidden = t.value === "no";
  });

  const compose = (): string | null => {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      error.textContent = "Bạn cho chúng mình biết tên nhé!";
      error.hidden = false;
      form.querySelector<HTMLInputElement>("[name=name]")!.focus();
      return null;
    }
    error.hidden = true;
    const guests = form.querySelector<HTMLSelectElement>("[name=guests]")!.selectedOptions[0].text;
    const wish = String(data.get("wish") ?? "").trim();
    const answer = {
      yes: `Tham dự: Có (${guests})`,
      maybe: `Tham dự: Đang cân nhắc (${guests})`,
      no: "Tham dự: Rất tiếc, không đến được",
    }[String(data.get("attend")) as Attend];
    return [
      `Xác nhận dự cưới ${wedding.groom.name} & ${wedding.bride.name}`,
      `Tên: ${name}`,
      answer,
      wish && `Lời chúc: ${wish}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const msg = compose();
    if (!msg) return;
    // `?&body=` is understood by both iOS and Android messaging apps.
    location.href = `sms:${phone}?&body=${encodeURIComponent(msg)}`;
    toast("Cảm ơn bạn đã phản hồi!");
  });

  $("[data-zalo]", form).addEventListener("click", async () => {
    const msg = compose();
    if (!msg) return;
    const ok = await copyText(msg);
    toast(ok ? "Đã sao chép lời nhắn — dán vào Zalo nhé!" : "Mở Zalo để gửi lời nhắn nhé!");
    window.open(`https://zalo.me/${phone}`, "_blank", "noopener");
  });
}
