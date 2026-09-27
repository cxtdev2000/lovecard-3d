import { wedding } from "../config/wedding";

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
const icsText = (s: string) => s.replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => `\\${m}`).replace(/\n/g, "\\n");

/** Builds an .ics file so guests can add an event to any phone calendar. */
function buildIcs(index: number) {
  const e = wedding.events[index];
  const start = new Date(e.start);
  const end = new Date(start.getTime() + e.durationMin * 60_000);
  const names = `${wedding.groom.name} & ${wedding.bride.name}`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//lovecard-3d//VI",
    "BEGIN:VEVENT",
    `UID:${stamp(start)}-${index}@lovecard-3d`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${icsText(`${e.title} — ${names}`)}`,
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
    const url = URL.createObjectURL(new Blob([buildIcs(Number(btn.dataset.ics))], { type: "text/calendar" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "thiep-cuoi.ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}
