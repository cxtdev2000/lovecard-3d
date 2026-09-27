import { wedding } from "../config/wedding";
import { $ } from "../lib/dom";
import { copyText, toast } from "../lib/toast";

/**
 * There is no server: the RSVP is sent as a pre-filled SMS (or pasted into Zalo)
 * to the host's phone, so replies land straight in the couple's inbox.
 */
export function initRsvp() {
  const form = $<HTMLFormElement>("#rsvp-form");
  const error = $(".form-error", form);
  const phone = wedding.groom.phone ?? "";

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
    const attend = data.get("attend") === "yes";
    const guests = form.querySelector<HTMLSelectElement>("[name=guests]")!.selectedOptions[0].text;
    const wish = String(data.get("wish") ?? "").trim();
    return [
      `Xác nhận dự cưới ${wedding.groom.name} & ${wedding.bride.name}`,
      `Tên: ${name}`,
      attend ? `Tham dự: Có (${guests})` : "Tham dự: Rất tiếc, không đến được",
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
