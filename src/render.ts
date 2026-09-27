import { wedding as w, type Person, type WeddingEvent } from "./config/wedding";
import { dateParts, esc, photo } from "./lib/dom";

const heart = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4 2.2.4-.9 1.8-2.2 4-2.2 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z"/></svg>`;

const icon = {
  map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,
  cal: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10z"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3zM4 7h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v11h11V9H4z"/></svg>`,
  music: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.5a3.5 3.5 0 1 1-2-3.2V5l12-2v12.5a3.5 3.5 0 1 1-2-3.2V7.4l-8 1.3v9.8z"/></svg>`,
  prev: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 5.4 14 4l-8 8 8 8 1.4-1.4L8.8 12z"/></svg>`,
  next: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 5.4 10 4l8 8-8 8-1.4-1.4 6.6-6.6z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>`,
};

const secHead = (eyebrow: string, title: string) => `
  <header class="sec-head" data-reveal>
    <p class="script">${esc(eyebrow)}</p>
    <h2>${esc(title)}</h2>
    <span class="divider" aria-hidden="true">${heart}</span>
  </header>`;

const main = dateParts(w.date);

function intro() {
  return `
  <div class="intro" id="intro">
    <div class="intro-glow" aria-hidden="true"></div>
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

function hero() {
  return `
  <section class="hero" id="top">
    <div class="hero-orbit" aria-hidden="true"><i></i><i></i></div>
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
      <div class="hero-stage" data-tilt="9">
        <div class="hero-float"><div class="hero-photo">
          <span class="layer layer-back" aria-hidden="true"></span>
          <span class="layer layer-mid" aria-hidden="true"></span>
          <div class="layer layer-img">${photo(w.heroPhoto, `${w.groom.name} và ${w.bride.name}`, { eager: true, sizes: "(max-width: 900px) 78vw, 420px" })}</div>
          <span class="layer layer-badge" aria-hidden="true">${heart}</span>
        </div></div>
      </div>
    </div>
    <p class="hero-quote" data-reveal>“${esc(w.quote)}”</p>
    <a class="scroll-cue" href="#countdown" aria-label="Cuộn xuống"><span></span></a>
  </section>`;
}

function countdown() {
  const unit = (key: string, label: string) =>
    `<div class="cd-unit"><span class="cd-num" data-cd="${key}">00</span><span class="cd-label">${label}</span></div>`;
  return `
  <section class="section countdown" id="countdown">
    ${secHead("Đếm ngược", "Đến ngày chung đôi")}
    <div class="cd-grid" data-reveal>
      ${unit("d", "Ngày")}${unit("h", "Giờ")}${unit("m", "Phút")}${unit("s", "Giây")}
    </div>
    <p class="cd-done" hidden>Hôm nay là ngày vui của chúng mình!</p>
  </section>`;
}

function personCard(p: Person, side: "groom" | "bride") {
  const parents = p.parents.length
    ? `<p class="parents">${p.parents.map(esc).join("<br>")}</p>`
    : "";
  return `
  <button class="flip-card ${side}" type="button" data-flip data-reveal aria-pressed="false"
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
        <li class="tl-item" data-reveal style="--i:${i}">
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
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.place}, ${e.address}`)}`;
  return `
  <article class="event-card" data-reveal style="--i:${i}">
    <h3>${esc(e.title)}</h3>
    <p class="event-time">${d.time}</p>
    <p class="event-date">${esc(d.weekday)}, ${d.day}/${d.month}/${d.year}</p>
    <p class="event-place"><strong>${esc(e.place)}</strong>${esc(e.address)}</p>
    <div class="event-actions">
      <a class="btn btn-ghost" href="${mapUrl}" target="_blank" rel="noopener">${icon.map}Chỉ đường</a>
      <button class="btn btn-ghost" type="button" data-ics="${i}">${icon.cal}Lưu lịch</button>
    </div>
  </article>`;
}

function events() {
  return `
  <section class="section events" id="events">
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
      <label class="field"><span>Tên của bạn</span>
        <input name="name" autocomplete="name" required maxlength="60" placeholder="Nguyễn Văn A">
      </label>
      <fieldset class="field choice">
        <legend>Bạn sẽ tham dự chứ?</legend>
        <label><input type="radio" name="attend" value="yes" checked><span>Chắc chắn rồi!</span></label>
        <label><input type="radio" name="attend" value="no"><span>Rất tiếc, mình bận</span></label>
      </fieldset>
      <label class="field"><span>Số người đi cùng</span>
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
    <p class="script">Thank you</p>
    <p class="footer-names">${esc(w.groom.name)} &amp; ${esc(w.bride.name)}</p>
    <p class="footer-note">Rất hân hạnh được đón tiếp!</p>
  </footer>`;
}

function overlays() {
  return `
  <canvas class="petals" id="petals" aria-hidden="true"></canvas>
  <button class="music-btn" id="music-btn" type="button" aria-label="Bật/tắt nhạc" aria-pressed="false" hidden>${icon.music}</button>
  <audio id="music" src="${encodeURI(w.music)}" preload="none" loop></audio>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh">
    <img id="lb-img" alt="">
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Đóng">${icon.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="-1" aria-label="Ảnh trước">${icon.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="1" aria-label="Ảnh sau">${icon.next}</button>
  </dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

export function render(root: HTMLElement) {
  root.innerHTML = `
    ${intro()}
    <main class="card" id="card" inert>
      ${hero()}${countdown()}${couple()}${story()}${events()}${gallery()}${gift()}${rsvp()}${footer()}
    </main>
    ${overlays()}`;
}
