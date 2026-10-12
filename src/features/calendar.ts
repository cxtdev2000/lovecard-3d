import { wedding, type WeddingEvent } from "../config/wedding";

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const icsText = (s: string) => s.replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => `\\${m}`).replace(/\n/g, "\\n");

/** Builds Google Calendar URL for Android and desktop web browsers. */
export function buildGoogleCalendarUrl(e: WeddingEvent): string {
  const start = new Date(e.start);
  const end = new Date(start.getTime() + e.durationMin * 60_000);
  const title = `${e.title} — ${wedding.groom.name} & ${wedding.bride.name}`;
  const location = `${e.place}, ${e.address}`;
  const details = `${wedding.title}\n${e.place}\n${e.address}\n\nTrân trọng kính mời bạn đến chung vui cùng gia đình chúng mình!`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: details,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** Builds an .ics file so guests can add an event to Apple Calendar (iOS / Mac) or any phone calendar. */
export function buildIcs(index: number) {
  const e = wedding.events[index];
  const start = new Date(e.start);
  const end = new Date(start.getTime() + e.durationMin * 60_000);
  const names = `${wedding.groom.name} & ${wedding.bride.name}`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//lovecard-3d//VI",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${stamp(start)}-${index}@lovecard-3d`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${icsText(`${e.title} — ${names}`)}`,
    `DESCRIPTION:${icsText(`${wedding.title} — ${e.place}`)}`,
    `LOCATION:${icsText(`${e.place}, ${e.address}`)}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT2H",
    "ACTION:DISPLAY",
    `DESCRIPTION:${icsText(e.title)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function initCalendar() {
  document.addEventListener("click", (ev) => {
    const btn = (ev.target as Element).closest<HTMLElement>("[data-ics]");
    if (!btn) return;
    const index = Number(btn.dataset.ics);
    if (isNaN(index) || !wedding.events[index]) return;

    const ics = buildIcs(index);
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isIOS && isSafari) {
      // Direct data URI opens the native "Add to Calendar" dialog on iOS Safari
      window.location.href = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
      return;
    }

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `thiep-cuoi-${wedding.events[index].title.toLowerCase().replace(/\s+/g, "-")}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}
