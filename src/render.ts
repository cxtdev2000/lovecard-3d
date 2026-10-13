import { themes } from "./config/themes";
import { wedding as w, type Person, type WeddingEvent } from "./config/wedding";
import { buildGoogleCalendarUrl, prefersIcs } from "./features/calendar";
import { dateParts, esc, photo } from "./lib/dom";
import { getTier } from "./lib/perf";
import { arches, dial, heart, medallion, rings, sparkle, sprig } from "./lib/ornaments";


const icon = {
  map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,
  cal: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10z"/></svg>`,
  apple: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.09.65-2.73 1.4-.56.64-1.04 1.7-1.01 2.74 1.07.08 2.12-.52 2.73-1.27z"/></svg>`,
  google: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3zM4 7h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v11h11V9H4z"/></svg>`,
  music: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.5a3.5 3.5 0 1 1-2-3.2V5l12-2v12.5a3.5 3.5 0 1 1-2-3.2V7.4l-8 1.3v9.8z"/></svg>`,
  prev: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 5.4 14 4l-8 8 8 8 1.4-1.4L8.8 12z"/></svg>`,
  next: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 5.4 10 4l8 8-8 8-1.4-1.4 6.6-6.6z"/></svg>`,
  palette: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 23 9.8C23 5.5 18.1 2 12 2zM6.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>`,
};

/** Twinkling sparkles at [x%, y%, size px, delay s] positions inside the parent box. */
const twinkles = (spots: [number, number, number, number][]) => `
  <span class="twinkles" aria-hidden="true">${spots
    .map(([x, y, s, t]) => `<i style="--x:${x}%;--y:${y}%;--s:${s}px;--t:${t}s">${sparkle}</i>`)
    .join("")}</span>`;

const ornament = (cls: string) => `<span class="orn ${cls}" data-draw aria-hidden="true">${sprig}</span>`;

/** Wraps each letter for the staggered heading reveal; words stay unbreakable. */
function splitLetters(text: string) {
  let n = 0;
  return text
    .normalize("NFC")
    .split(" ")
    .map((word) => `<span class="word">${Array.from(word, (ch) => `<span class="ch" style="--c:${n++}">${esc(ch)}</span>`).join("")}</span>`)
    .join(" ");
}

const secHead = (eyebrow: string, title: string) => `
  <header class="sec-head" data-reveal>
    <p class="script">${esc(eyebrow)}</p>
    <h2 aria-label="${esc(title)}"><span aria-hidden="true">${splitLetters(title)}</span></h2>
    <span class="divider" aria-hidden="true">${heart}</span>
  </header>`;

const main = dateParts(w.date);

function intro() {
  return `
  <div class="intro" id="intro">
    <span class="medallion" data-draw aria-hidden="true">${medallion}</span>
    ${ornament("orn-tl")}${ornament("orn-br")}
    <div class="intro-inner">
      <p class="intro-guest">Trân trọng kính mời<strong id="guest-name">Quý khách</strong></p>
      <button class="envelope" id="envelope" type="button" aria-label="Mở thiệp cưới">
        <span class="env-back"></span>
        <span class="env-letter">
          <span class="letter-inner">
            <span class="script">Save the date</span>
            <span class="letter-names">${esc(w.groom.name)} <em>&amp;</em> ${esc(w.bride.name)}</span>
            <span class="letter-date">${main.day} · ${main.month} · ${main.year}</span>
          </span>
        </span>
        <span class="env-pocket"></span>
        <span class="env-flap"></span>
        <span class="env-seal">${esc(w.initials)}</span>
      </button>
      <p class="intro-hint">Chạm để mở thiệp</p>
    </div>
  </div>`;
}

/** The original hero picture: layered arch photo with a rotating seal (lite/reduced tiers). */
function photoStage() {
  return `
      <div class="hero-stage" data-tilt="9">
        <div class="hero-float"><div class="hero-photo">
          <span class="layer layer-back" aria-hidden="true"></span>
          <span class="layer layer-mid" aria-hidden="true"></span>
          <div class="layer layer-img">${photo(w.heroPhoto, `${w.groom.name} và ${w.bride.name}`, { eager: true, sizes: "(max-width: 900px) 78vw, 420px" })}</div>
          <span class="layer layer-badge" aria-hidden="true">${heart}</span>
          <span class="layer layer-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120"><path id="seal-ring" fill="none" d="M14 60a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/>
              <text><textPath href="#seal-ring" textLength="286" lengthAdjust="spacing">SAVE THE DATE · ${main.day}.${main.month}.${main.year} ·</textPath></text></svg>
            <b>${esc(w.initials)}</b>
          </span>
        </div></div>
        ${heroTwinkles}
      </div>`;
}

const heroTwinkles = twinkles([[-6, 12, 16, 0], [104, 22, 12, 1.1], [96, 70, 18, 0.5], [-10, 64, 11, 1.7], [50, -6, 13, 2.2], [8, 98, 14, 0.9]]);

/** Month grid for the invitation, Monday first, with the wedding day ringed by a heart. */
function monthGrid() {
  const [y, m, d] = [Number(main.year), Number(main.month), Number(main.day)];
  const lead = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7;
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const cells = [
    ...["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((n) => `<b>${n}</b>`),
    ...Array<string>(lead).fill("<i></i>"),
    ...Array.from({ length: days }, (_, i) => (i + 1 === d ? `<i class="on">${heart}<span>${d}</span></i>` : `<i>${i + 1}</i>`)),
  ];
  return `<div class="fold-month"><p>Tháng ${m} · ${y}</p><div class="fold-days">${cells.join("")}</div></div>`;
}

/**
 * The printed invitation as a 3D letter fold (full tier only). Three 5:7 panels on one sheet:
 * A (left) is die-cut with an arch window and folds over last, so its outside is the cover and
 * the window frames the photo printed on the back of C, which folds in first. Inside, A doubles
 * as a photo-booth frame for guests, B announces the wedding and C invites the guest.
 * features/fold-card.ts unfolds it as the guest scrolls.
 */
function foldStage() {
  const party = w.events.find((e) => e.start === w.date) ?? w.events[w.events.length - 1];
  const when = dateParts(party.start);
  const families = [w.groom, w.bride].some((p) => p.parents.length)
    ? `<div class="fold-families">${([["Nhà trai", w.groom], ["Nhà gái", w.bride]] as const)
        .map(([side, p]) => `<p><small>${side}</small>${p.parents.map(esc).join("<br>")}</p>`)
        .join("")}</div>`
    : "";
  const shade = `<i class="fold-shade"></i>`;
  return `
      <div class="hero-stage" role="img" aria-label="${esc(`Thiệp cưới ${w.groom.name} và ${w.bride.name}, ${main.day}.${main.month}.${main.year}`)}">
        <div class="hero-float"><div class="fold-move">
          ${heroTwinkles}
          <div class="fold-sway"><div class="fold-card" aria-hidden="true">
            <div class="fold-panel fold-b">
              <div class="face fold-main">
                ${families}
                <span class="fold-mono">${esc(w.initials)}</span>
                <p class="script">Trân trọng báo tin</p>
                <p class="fold-caps">Lễ thành hôn của</p>
                <p class="fold-person"><small>${esc(w.groom.role)}</small>${esc(w.groom.fullName)}</p>
                <p class="fold-amp script">&amp;</p>
                <p class="fold-person"><small>${esc(w.bride.role)}</small>${esc(w.bride.fullName)}</p>
                <div class="fold-date"><span>${esc(main.weekday)}</span><b>${main.day}</b><span>Tháng ${main.month}</span><em>${main.year}</em></div>
                <p class="fold-lunar">${esc(w.lunarDate)}</p>
              </div>
            </div>
            <div class="fold-panel fold-c">
              <div class="face fold-details">
                <p class="script">Trân trọng kính mời</p>
                <p class="fold-guest" data-guest>Quý khách</p>
                <p class="fold-small">tới dự bữa tiệc chung vui cùng gia đình chúng tôi</p>
                <p class="fold-caps">${esc(party.title)}</p>
                <p class="fold-time">${when.time}</p>
                <p class="fold-small">${esc(when.weekday)} · ${when.day}.${when.month}.${when.year}</p>
                <p class="fold-venue">${esc(party.place)}<small>${esc(party.address)}</small></p>
                ${monthGrid()}
                <p class="fold-small fold-thanks">Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi</p>
                ${shade}
              </div>
              <div class="face face-back fold-photo">
                ${photo(w.heroPhoto, "", { eager: true, sizes: "(max-width: 900px) 80vw, 400px" })}
                <p class="fold-quote">“${esc(w.quote)}”</p>
                ${shade}
              </div>
            </div>
            <div class="fold-panel fold-a">
              <div class="face fold-frame fold-booth">
                <span class="fold-window"></span>
                <span class="fold-finder"></span>
                <p class="fold-caps"><i></i>Photo booth</p>
                <p class="script">Cùng chụp một tấm nhé!</p>
                <p class="fold-small">Giơ khung lên &amp; lưu lại khoảnh khắc ngày vui</p>
                ${shade}
              </div>
              <div class="face face-back fold-frame fold-cover">
                <span class="fold-window"></span>
                <p class="fold-caps">Save the date</p>
                <p class="script">${esc(w.groom.name)} <span>&amp;</span> ${esc(w.bride.name)}</p>
                <p class="fold-cover-date">${main.day} · ${main.month} · ${main.year}</p>
                <span class="fold-sprig tl">${sprig}</span><span class="fold-sprig tr">${sprig}</span>
                ${shade}
              </div>
            </div>
          </div></div>
        </div></div>
      </div>`;
}

function hero() {
  // Capable devices get the 3D folded invitation, pinned while it opens; the rest keep the photo.
  const fold = getTier() === "full";
  const scene = `
    <div class="hero-rays" aria-hidden="true"></div>
    <div class="hero-orbit" aria-hidden="true"><i></i><i></i></div>
    ${ornament("orn-tr")}${ornament("orn-bl")}
    <div class="hero-grid">
      <div class="hero-text">
        <p class="eyebrow">Chúng mình sắp cưới</p>
        <h1 class="names">
          <span>${esc(w.groom.name)}</span>
          <span class="amp">&amp;</span>
          <span>${esc(w.bride.name)}</span>
        </h1>
        <p class="hero-date"><span>${esc(main.weekday)}</span><strong>${main.day}.${main.month}.${main.year}</strong></p>
        <p class="lunar">${esc(w.lunarDate)}</p>
      </div>
      ${fold ? foldStage() : photoStage()}
    </div>
    ${fold ? "" : `<p class="hero-quote" data-reveal>“${esc(w.quote)}”</p>`}
    <a class="scroll-cue" href="#countdown" aria-label="Cuộn xuống"><span></span></a>`;
  return fold
    ? `<section class="hero hero-fold" id="top"><div class="fold-pin">${scene}</div></section>`
    : `<section class="hero" id="top">${scene}</section>`;
}

/** Two crossing bands of scrolling text between the hero and the rest of the card. */
function ribbons() {
  const phrase = `<span>${esc(w.groom.name)}</span>${heart}<span>${esc(w.bride.name)}</span>${sparkle}<span>${main.day}.${main.month}.${main.year}</span>${sparkle}<span class="script">Save the date</span>${sparkle}`;
  // Two identical halves so translating by -50% loops seamlessly.
  const band = (cls: string) => `<div class="ribbon ${cls}"><div class="ribbon-track">${phrase.repeat(10)}</div></div>`;
  return `<div class="ribbons" aria-hidden="true">${band("ribbon-a")}${band("ribbon-b")}</div>`;
}

function countdown() {
  const unit = (key: string, label: string) =>
    `<div class="cd-unit"><span class="cd-num" data-cd="${key}">00</span><span class="cd-label">${label}</span></div>`;
  return `
  <section class="section countdown" id="countdown">
    <span class="cd-dial" aria-hidden="true">${dial(new Date().getSeconds())}</span>
    ${secHead("Đếm ngược", "Đến ngày chung đôi")}
    <div class="cd-grid" data-reveal>
      ${unit("d", "Ngày")}${unit("h", "Giờ")}${unit("m", "Phút")}${unit("s", "Giây")}
    </div>
    <p class="cd-done" hidden>Hôm nay là ngày vui của chúng mình!</p>
  </section>`;
}

/**
 * Scrapbook invitation: paper pieces laid on the table one after another as it scrolls in
 * (polaroid, ribbon-tied date card, die-cut save-the-date tag, pearls), then the letter.
 * Pieces sit at different depths so the pointer tilt gives a parallax on desktop.
 */
function letter() {
  const time = dateParts(w.date).time;
  const pearl = (x: number, y: number, s: number) => `<i class="pearl" style="--x:${x}%;--y:${y}%;--s:${s}px"></i>`;
  return `
  <section class="section letter" id="letter">
    ${secHead("Lời mời", "Gửi những người thương")}
    <div class="scrap" data-tilt="6">
      <figure class="scrap-polaroid" data-reveal style="--i:0">
        ${photo(w.letter.photo, `${w.groom.name} và ${w.bride.name}`, { sizes: "(max-width: 640px) 50vw, 300px" })}
        <figcaption><small>Lời gửi gắm từ</small><span class="script">${esc(w.groom.name)} &amp; ${esc(w.bride.name)}</span></figcaption>
      </figure>
      <div class="scrap-date" data-reveal style="--i:1">
        <span class="scrap-emboss" aria-hidden="true">${sprig}</span>
        <span class="scrap-ribbon" aria-hidden="true"><i></i></span>
        <b>${main.day}</b>
        <span class="script">Tháng ${Number(main.month)}</span>
        <em>${main.year}</em>
        <small>Vào lúc ${time}</small>
      </div>
      <div class="scrap-tag" data-reveal style="--i:2">
        <small>Save the date</small>
        <span class="script">${esc(w.groom.name)}</span>
        <span class="script">&amp; ${esc(w.bride.name)}</span>
      </div>
      <span class="scrap-pearls" data-reveal style="--i:3" aria-hidden="true">${pearl(-3, 6, 22)}${pearl(97, 30, 16)}${pearl(44, 97, 26)}${pearl(55, 92, 12)}${pearl(-5, 88, 14)}</span>
    </div>
    <article class="scrap-letter" data-reveal>
      ${w.letter.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
      <p class="script scrap-sign">${esc(w.groom.name)} &amp; ${esc(w.bride.name)}</p>
    </article>
  </section>`;
}

function personCard(p: Person, side: "groom" | "bride") {
  const parents = p.parents.length
    ? `<p class="parents">${p.parents.map(esc).join("<br>")}</p>`
    : "";
  return `
  <button class="flip-card ${side}" type="button" data-flip data-thread-stop data-reveal aria-pressed="false"
    aria-label="${esc(`${p.role} ${p.fullName} — chạm để lật thẻ`)}">
    <span class="flip-inner">
      <span class="flip-face flip-front">
        ${photo(p.photo, p.fullName, { sizes: "(max-width: 640px) 80vw, 360px" })}
        <span class="flip-caption"><small>${esc(p.role)}</small><strong>${esc(p.name)}</strong></span>
      </span>
      <span class="flip-face flip-back">
        <small>${esc(p.role)}</small>
        <strong class="script">${esc(p.fullName)}</strong>
        ${parents}
        <span class="bio">${esc(p.bio)}</span>
        <span class="flip-hint">Chạm để lật lại</span>
      </span>
    </span>
  </button>`;
}

function couple() {
  return `
  <section class="section couple" id="couple">
    <p class="watermark" aria-hidden="true"><span>${"Love · Forever · ".repeat(6)}</span></p>
    ${secHead("Cô dâu & Chú rể", "Hai nửa yêu thương")}
    <div class="couple-grid">
      ${personCard(w.groom, "groom")}
      <span class="couple-heart" aria-hidden="true">${heart}</span>
      ${personCard(w.bride, "bride")}
    </div>
    <p class="hint-text">Chạm vào thẻ để xem thêm</p>
  </section>`;
}

function story() {
  return `
  <section class="section story" id="story">
    ${secHead("Chuyện tình yêu", "Hành trình của chúng mình")}
    <ol class="timeline">
      ${w.story
        .map(
          (s, i) => `
        <li class="tl-item" data-reveal data-thread-stop=".tl-dot" style="--i:${i}">
          <span class="tl-dot" aria-hidden="true">${heart}</span>
          <div class="tl-card">
            <div class="tl-photo">${photo(s.photo, s.title, { sizes: "(max-width: 640px) 80vw, 320px" })}</div>
            <div class="tl-body"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>
          </div>
        </li>`,
        )
        .join("")}
    </ol>
  </section>`;
}

function eventCard(e: WeddingEvent, i: number) {
  const d = dateParts(e.start);
  const mapUrl = e.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.place}, ${e.address}`)}`;
  // One button, wired per device: Apple devices import an .ics into Calendar, everyone else gets Google Calendar.
  const calBtn = prefersIcs()
    ? `<button class="btn btn-ghost" type="button" data-ics="${i}" aria-label="Thêm ${esc(e.title)} vào lịch (Apple Calendar)">${icon.apple}Thêm vào lịch</button>`
    : `<a class="btn btn-ghost" href="${buildGoogleCalendarUrl(e)}" target="_blank" rel="noopener" aria-label="Thêm ${esc(e.title)} vào lịch (Google Calendar)">${icon.google}Thêm vào lịch</a>`;
  return `
  <article class="event-card" data-reveal data-thread-stop style="--i:${i}">
    <h3>${esc(e.title)}</h3>
    <p class="event-time">${d.time}</p>
    <p class="event-date">${esc(d.weekday)}, ${d.day}/${d.month}/${d.year}</p>
    <p class="event-place"><strong>${esc(e.place)}</strong>${esc(e.address)}</p>
    <div class="event-actions">
      <a class="btn btn-ghost" href="${mapUrl}" target="_blank" rel="noopener">${icon.map}Chỉ đường</a>
      ${calBtn}
    </div>
  </article>`;
}

function events() {
  return `
  <section class="section events" id="events">
    <span class="arches" data-draw data-reveal aria-hidden="true">${arches}</span>
    ${secHead("Sự kiện", "Lễ cưới")}
    <div class="event-grid">${w.events.map(eventCard).join("")}</div>
  </section>`;
}

function gallery() {
  return `
  <section class="section gallery" id="gallery">
    ${secHead("Album", "Khoảnh khắc yêu thương")}
    <div class="cf" data-reveal>
      <div class="cf-track" id="cf-track" tabindex="0" aria-label="Album ảnh cưới, vuốt ngang để xem">
        ${w.gallery
          .map(
            (g, i) => `
          <button class="cf-item" type="button" data-index="${i}" aria-label="Xem ảnh ${i + 1}">
            ${photo(g, `Ảnh cưới ${i + 1}`, { sizes: "(max-width: 640px) 68vw, 300px" })}
          </button>`,
          )
          .join("")}
      </div>
      <button class="cf-nav prev" type="button" data-cf="-1" aria-label="Ảnh trước">${icon.prev}</button>
      <button class="cf-nav next" type="button" data-cf="1" aria-label="Ảnh sau">${icon.next}</button>
    </div>
    <p class="cf-count" aria-live="polite"><span id="cf-current">1</span> / ${w.gallery.length}</p>
  </section>`;
}

function bankCard(p: Person) {
  const b = p.bank;
  const qr = `https://img.vietqr.io/image/${encodeURIComponent(b.name.replace(/\s+/g, ""))}-${encodeURIComponent(b.number)}-compact2.png?addInfo=${encodeURIComponent("Mung cuoi")}&accountName=${encodeURIComponent(b.owner)}`;
  return `
  <div class="bank-card">
    <p class="bank-role">Mừng ${esc(p.role.toLowerCase())}</p>
    <img class="bank-qr" src="${qr}" alt="Mã QR chuyển khoản ${esc(b.name)}" width="220" height="220" loading="lazy" decoding="async">
    <p class="bank-name">${esc(b.name)}</p>
    <p class="bank-owner">${esc(b.owner)}</p>
    <button class="btn btn-soft" type="button" data-copy="${esc(b.number)}">${icon.copy}${esc(b.number)}</button>
  </div>`;
}

function gift() {
  return `
  <section class="section gift" id="gift">
    ${secHead("Hộp mừng cưới", "Gửi yêu thương")}
    <p class="lead" data-reveal>Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi thêm lời chúc, bạn có thể mở hộp quà bên dưới.</p>
    <button class="giftbox" id="giftbox" type="button" aria-expanded="false" aria-controls="bank-cards" data-reveal>
      <span class="gb-scene">
        <span class="gb-lid"><span class="gb-bow"></span></span>
        <span class="gb-box"></span>
      </span>
      <span class="gb-label">Chạm để mở quà</span>
    </button>
    <div class="bank-cards" id="bank-cards" hidden>
      ${bankCard(w.groom)}${bankCard(w.bride)}
    </div>
  </section>`;
}

function rsvp() {
  return `
  <section class="section rsvp" id="rsvp">
    ${secHead("Xác nhận tham dự", "Bạn sẽ đến chứ?")}
    <form class="rsvp-form" id="rsvp-form" data-reveal novalidate>
      <span class="stamp" aria-hidden="true">${heart}<small>${main.day}.${main.month}</small></span>
      <label class="field"><span>Tên của bạn</span>
        <input name="name" autocomplete="name" required maxlength="60" placeholder="Nguyễn Văn A">
      </label>
      <fieldset class="field choice">
        <legend>Bạn sẽ tham dự chứ?</legend>
        <label><input type="radio" name="attend" value="yes" checked><span>Chắc chắn rồi!</span></label>
        <label><input type="radio" name="attend" value="maybe"><span>Mình đang cân nhắc</span></label>
        <label><input type="radio" name="attend" value="no"><span>Rất tiếc, mình bận</span></label>
      </fieldset>
      <label class="field" data-guests><span>Số người đi cùng</span>
        <select name="guests">
          <option value="1">Chỉ mình tôi</option><option value="2">2 người</option>
          <option value="3">3 người</option><option value="4">4 người trở lên</option>
        </select>
      </label>
      <label class="field"><span>Lời chúc</span>
        <textarea name="wish" rows="3" maxlength="300" placeholder="Chúc hai bạn trăm năm hạnh phúc!"></textarea>
      </label>
      <p class="form-error" role="alert" hidden></p>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Gửi tin nhắn</button>
        <button class="btn btn-ghost" type="button" data-zalo>Gửi qua Zalo</button>
      </div>
    </form>
  </section>`;
}

function footer() {
  return `
  <footer class="footer">
    <span class="footer-rings" data-draw data-reveal>${rings}</span>
    <p class="script">Thank you</p>
    <p class="footer-names">${esc(w.groom.name)} &amp; ${esc(w.bride.name)}</p>
    <p class="footer-note">Rất hân hạnh được đón tiếp!</p>
  </footer>`;
}

function themePicker() {
  if (!w.themePicker) return "";
  const options = Object.entries(themes)
    .map(
      ([id, t]) => `
      <button class="theme-opt" type="button" data-theme-id="${id}" aria-pressed="false">
        <span class="theme-swatch" aria-hidden="true" style="--a:${t.colors.wine};--b:${t.colors.rose};--c:${t.colors.paper}"></span>${esc(t.label)}
      </button>`,
    )
    .join("");
  return `
  <button class="theme-btn" id="theme-btn" type="button" aria-label="Đổi màu thiệp" aria-expanded="false" aria-controls="theme-panel">${icon.palette}</button>
  <div class="theme-panel" id="theme-panel" role="group" aria-label="Chọn tông màu" hidden>
    <p class="theme-title">Tông màu</p>${options}
  </div>`;
}

function overlays() {
  return `
  <svg class="paper-motif" aria-hidden="true">
    <defs><pattern id="motif" width="88" height="88" patternUnits="userSpaceOnUse">
      <path d="M22 15q1 6 7 7q-6 1-7 7q-1-6-7-7q6-1 7-7z"/>
      <path d="M66 70c-3.5-2.4-6-4.6-6-7.2 0-1.8 1.3-3 2.9-3 1.3 0 2.4.8 3.1 1.9.7-1.1 1.8-1.9 3.1-1.9 1.6 0 2.9 1.2 2.9 3 0 2.6-2.5 4.8-6 7.2z"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#motif)"/>
  </svg>
  <canvas class="petals" id="petals" aria-hidden="true"></canvas>
  <button class="music-btn" id="music-btn" type="button" aria-label="Bật/tắt nhạc" aria-pressed="false" hidden>
    <span class="vinyl" aria-hidden="true"><span class="vinyl-label">${icon.music}</span></span>
    <span class="tonearm" aria-hidden="true"></span>
  </button>
  <audio id="music" src="${encodeURI(w.music)}" preload="none" loop></audio>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh">
    <img id="lb-img" alt="">
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Đóng">${icon.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="-1" aria-label="Ảnh trước">${icon.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="1" aria-label="Ảnh sau">${icon.next}</button>
  </dialog>
  ${themePicker()}
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

export function render(root: HTMLElement) {
  root.innerHTML = `
    ${intro()}
    <main class="card" id="card" inert>
      ${hero()}${ribbons()}${countdown()}${letter()}${couple()}${story()}${events()}${gallery()}${gift()}${rsvp()}${footer()}
    </main>
    ${overlays()}`;
}
