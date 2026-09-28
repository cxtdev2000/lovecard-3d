(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={title:`Xuân Tùng & Phương Anh — Thiệp cưới`,description:`Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.`,initials:`T & A`,date:`2026-12-20T17:30:00+07:00`,lunarDate:`Tức ngày 12 tháng 11 năm Bính Ngọ`,heroPhoto:`/photos/couple-15`,quote:`Yêu nhau không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.`,music:`https://cdn.jsdelivr.net/gh/saygoodbyethe3-bit/music-hosting/Beautiful in White - Westlife.mp3`,groom:{name:`Xuân Tùng`,fullName:`Cấn Xuân Tùng`,role:`Chú rể`,parents:[],bio:`Người con trai luôn tin rằng hạnh phúc là được nắm tay một người thật lâu.`,photo:`/photos/couple-12`,phone:`0348889995`,bank:{name:`Techcombank`,number:`1312228888`,owner:`CAN XUAN TUNG`}},bride:{name:`Phương Anh`,fullName:`Trần Thị Phương Anh`,role:`Cô dâu`,parents:[],bio:`Cô gái thích hoa, thích nắng và thích mỗi ngày được bình yên bên anh.`,photo:`/photos/couple-13`,bank:{name:`Techcombank`,number:`1312228888`,owner:`CAN XUAN TUNG`}},events:[{title:`Lễ Vu Quy`,start:`2026-12-20T08:00:00+07:00`,durationMin:120,place:`Tư gia nhà gái`,address:`Hà Nội`},{title:`Lễ Thành Hôn`,start:`2026-12-20T10:30:00+07:00`,durationMin:120,place:`Tư gia nhà trai`,address:`Hà Nội`},{title:`Tiệc Cưới`,start:`2026-12-20T17:30:00+07:00`,durationMin:180,place:`Trung tâm tiệc cưới`,address:`Hà Nội`}],story:[{title:`Lần đầu gặp gỡ`,text:`Một buổi chiều rất bình thường, bỗng trở thành ngày đáng nhớ nhất khi hai ánh mắt chạm nhau.`,photo:`/photos/couple-01`},{title:`Những chuyến đi`,text:`Cùng nhau đi qua biển, qua phố, qua những bữa ăn giản dị — và nhận ra nơi nào có nhau là nhà.`,photo:`/photos/couple-03`},{title:`Lời hứa trọn đời`,text:`Và rồi, chúng mình quyết định viết tiếp câu chuyện này bằng hai chữ: mãi mãi.`,photo:`/photos/couple-14`}],gallery:[`/photos/couple-15`,`/photos/couple-01`,`/photos/couple-02`,`/photos/couple-04`,`/photos/couple-06`,`/photos/couple-07`,`/photos/couple-08`,`/photos/couple-14`,`/photos/couple-05`,`/photos/couple-09`]},t=e=>e.toISOString().replace(/[-:]/g,``).replace(/\.\d{3}/,``),n=e=>e.replace(/\\/g,`\\\\`).replace(/[,;]/g,e=>`\\${e}`).replace(/\n/g,`\\n`);function r(r){let i=e.events[r],a=new Date(i.start),o=new Date(a.getTime()+i.durationMin*6e4),s=`${e.groom.name} & ${e.bride.name}`;return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//lovecard-3d//VI`,`BEGIN:VEVENT`,`UID:${t(a)}-${r}@lovecard-3d`,`DTSTAMP:${t(new Date)}`,`DTSTART:${t(a)}`,`DTEND:${t(o)}`,`SUMMARY:${n(`${i.title} — ${s}`)}`,`LOCATION:${n(`${i.place}, ${i.address}`)}`,`BEGIN:VALARM`,`TRIGGER:-PT2H`,`ACTION:DISPLAY`,`DESCRIPTION:${n(i.title)}`,`END:VALARM`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`)}function i(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-ics]`);if(!t)return;let n=URL.createObjectURL(new Blob([r(Number(t.dataset.ics))],{type:`text/calendar`})),i=document.createElement(`a`);i.href=n,i.download=`thiep-cuoi.ics`,i.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)})}var a=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`);function o(e,t=document){let n=t.querySelector(e);if(!n)throw Error(`Missing element: ${e}`);return n}var s=(e,t=document)=>Array.from(t.querySelectorAll(e));function c(e,t,n={}){let{sizes:r=`(max-width: 640px) 90vw, 480px`,eager:i=!1,cls:o=``}=n;return`<img class="${o}" src="${e}-sm.webp" srcset="${e}-sm.webp 480w, ${e}.webp 900w" sizes="${r}"
    alt="${a(t)}" ${i?`fetchpriority="high"`:`loading="lazy"`} decoding="async" draggable="false">`}var l=e=>String(e).padStart(2,`0`),u=`Asia/Ho_Chi_Minh`;function d(e){let t=new Date(e),n=e=>new Intl.DateTimeFormat(`vi-VN`,{timeZone:u,...e}).format(t),[r,i,a]=n({day:`2-digit`,month:`2-digit`,year:`numeric`}).split(`/`);return{day:r,month:i,year:a,weekday:n({weekday:`long`}),time:n({hour:`2-digit`,minute:`2-digit`,hour12:!1})}}function f(){if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return`reduced`;let e=navigator,t=(e.hardwareConcurrency??8)<=4,n=(e.deviceMemory??8)<=3;return t||n||e.connection?.saveData?`lite`:`full`}var p=f(),m=new Set,h=()=>p,g=()=>matchMedia(`(hover: hover) and (pointer: fine)`).matches;function _(e){m.add(e)}function v(){p===`full`&&(p=`lite`,y(),m.forEach(e=>e(p)))}function y(){let e=document.documentElement;e.classList.toggle(`lite`,p!==`full`),e.classList.toggle(`reduced`,p===`reduced`)}function b(){let t=new Date(e.date).getTime(),n=Object.fromEntries(s(`[data-cd]`).map(e=>[e.dataset.cd,e])),r=h()!==`reduced`&&`animate`in Element.prototype,i=0,a=(e,t)=>{let i=n[e];i.textContent!==t&&(i.textContent=t,r&&!document.hidden&&i.animate([{transform:`rotateX(-90deg)`,opacity:0},{transform:`rotateX(0)`,opacity:1}],{duration:420,easing:`cubic-bezier(.2,.8,.2,1.2)`}))},c=()=>{let e=Math.max(0,t-Date.now()),n=Math.floor(e/1e3);a(`d`,l(Math.floor(n/86400))),a(`h`,l(Math.floor(n%86400/3600))),a(`m`,l(Math.floor(n%3600/60))),a(`s`,l(n%60)),e===0&&(clearInterval(i),o(`.cd-done`).hidden=!1)};c(),i=window.setInterval(c,1e3)}function x(){let e=new URLSearchParams(location.search).get(`to`)?.trim();e&&(o(`#guest-name`).textContent=e.slice(0,60))}function S(e){x();let t=o(`#intro`),n=o(`#envelope`),r=o(`#card`);document.body.classList.add(`locked`),history.scrollRestoration=`manual`,scrollTo(0,0);let i=h()===`reduced`,a=!1;n.addEventListener(`click`,()=>{a||(a=!0,e(),t.classList.add(`opening`),window.setTimeout(()=>{t.classList.add(`opened`),r.inert=!1,document.body.classList.remove(`locked`),r.classList.add(`shown`)},i?0:1500),window.setTimeout(()=>t.remove(),i?400:2400))})}function C(){for(let e of s(`[data-flip]`))e.addEventListener(`click`,()=>{let t=e.classList.toggle(`flipped`);e.setAttribute(`aria-pressed`,String(t))})}function w(){let e=o(`#cf-track`),t=s(`.cf-item`,e),n=o(`#cf-current`),r=[],i=1,a=0,c=0,l=()=>{i=t[0].offsetWidth||1,r=t.map(e=>e.offsetLeft+e.offsetWidth/2),u()},u=()=>{c=0;let o=e.scrollLeft+e.clientWidth/2,s=0;t.forEach((e,t)=>{let n=Math.max(-3,Math.min(3,(r[t]-o)/i));e.style.setProperty(`--d`,n.toFixed(3)),e.style.setProperty(`--ad`,Math.abs(n).toFixed(3)),e.style.zIndex=String(10-Math.round(Math.abs(n)*2)),Math.abs(n)<Math.abs((r[s]-o)/i)&&(s=t)}),s!==a&&(a=s,n.textContent=String(s+1))},d=n=>{let i=Math.max(0,Math.min(t.length-1,n));e.scrollTo({left:r[i]-e.clientWidth/2,behavior:`smooth`})};e.addEventListener(`scroll`,()=>c||(c=requestAnimationFrame(u)),{passive:!0}),new ResizeObserver(l).observe(e),s(`[data-cf]`).forEach(e=>e.addEventListener(`click`,()=>d(a+Number(e.dataset.cf)))),e.addEventListener(`keydown`,e=>{if(e.key===`ArrowRight`)d(a+1);else if(e.key===`ArrowLeft`)d(a-1);else return;e.preventDefault()});let f=T(d);t.forEach((e,t)=>e.addEventListener(`click`,()=>t===a?f.open(t):d(t)))}function T(t){let n=o(`#lightbox`),r=o(`#lb-img`),i=e.gallery,a=0,s=e=>{a=(e+i.length)%i.length,r.src=`${i[a]}.webp`,r.alt=`Ảnh cưới ${a+1}`,t(a)};n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-lb]`);t?t.dataset.lb===`close`?n.close():s(a+Number(t.dataset.lb)):e.target===n&&n.close()}),n.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&s(a+1),e.key===`ArrowLeft`&&s(a-1)});let c=0;return n.addEventListener(`pointerdown`,e=>c=e.clientX),n.addEventListener(`pointerup`,e=>{let t=e.clientX-c;Math.abs(t)>45&&s(a+(t<0?1:-1))}),{open(e){s(e),n.showModal()}}}var E=0;function D(e){let t=o(`#toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(E),E=window.setTimeout(()=>t.classList.remove(`show`),2600)}async function O(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.cssText=`position:fixed;opacity:0;top:0`,document.body.append(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}}function k(){let e=o(`#giftbox`),t=o(`#bank-cards`);e.addEventListener(`click`,()=>{e.classList.contains(`open`)||(e.classList.add(`open`),e.setAttribute(`aria-expanded`,`true`),window.setTimeout(()=>{t.hidden=!1,requestAnimationFrame(()=>t.classList.add(`in`))},h()===`reduced`?0:650))});for(let e of s(`[data-copy]`))e.addEventListener(`click`,async()=>{D(await O(e.dataset.copy)?`Đã sao chép số tài khoản`:`Không sao chép được, bạn vui lòng ghi lại nhé`)})}function A(){let e=o(`#music`),t=o(`#music-btn`),n=!1,r=()=>{let n=!e.paused;t.classList.toggle(`playing`,n),t.setAttribute(`aria-pressed`,String(n))};e.addEventListener(`play`,r),e.addEventListener(`pause`,r);let i=()=>{n=!0,e.volume=.6,e.play().catch(()=>{n=!1,r()})};return t.addEventListener(`click`,()=>{e.paused?i():(n=!1,e.pause())}),document.addEventListener(`visibilitychange`,()=>{document.hidden?e.pause():n&&e.play().catch(()=>{})}),{start(){t.hidden=!1,i()}}}var j=[`#f4b6c2`,`#f8d3da`,`#e89aab`,`#fbe4d0`];function M(){return j.map(e=>{let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.translate(32,32);let r=n.createLinearGradient(0,-28,0,28);return r.addColorStop(0,e),r.addColorStop(1,`#ffffff`),n.fillStyle=r,n.beginPath(),n.moveTo(0,-28),n.bezierCurveTo(22,-20,20,14,0,28),n.bezierCurveTo(-20,14,-22,-20,0,-28),n.fill(),t})}function N(){if(h()===`reduced`)return{start(){}};let e=o(`#petals`),t=e.getContext(`2d`);if(!t)return{start(){}};let n=M(),r=[],i=0,a=0,s=1,c=0,l=0,u=!1,d={frames:0,total:0},f=()=>{let e=Math.min(1,innerWidth*innerHeight/1024e3);return Math.round((h()===`full`?28:10)*(.55+.45*e))},p=e=>({x:Math.random()*i,y:e?Math.random()*a:-30,size:10+Math.random()*12,vy:28+Math.random()*38,vx:-8+Math.random()*16,sway:Math.random()*Math.PI*2,swaySpeed:.6+Math.random()*1.1,rot:Math.random()*Math.PI*2,vr:-1+Math.random()*2,flip:Math.random()*Math.PI*2,vf:1.5+Math.random()*2.5,sprite:Math.floor(Math.random()*n.length)}),m=()=>{s=Math.min(devicePixelRatio||1,h()===`full`?1.5:1),i=innerWidth,a=innerHeight,e.width=Math.round(i*s),e.height=Math.round(a*s);let t=f();for(r=r.slice(0,t);r.length<t;)r.push(p(!0))},g=o=>{c=requestAnimationFrame(g);let u=Math.min(.05,(o-(l||o))/1e3);l=o,d.frames<150&&u>0&&(d.frames++,d.total+=u,d.frames===150&&d.total/150>1/40&&v()),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height);for(let e of r){e.sway+=e.swaySpeed*u,e.y+=e.vy*u,e.x+=(e.vx+Math.sin(e.sway)*22)*u,e.rot+=e.vr*u,e.flip+=e.vf*u,(e.y>a+30||e.x<-40||e.x>i+40)&&Object.assign(e,p(!1));let r=e.size/64*s,o=Math.cos(e.flip),c=Math.cos(e.rot),l=Math.sin(e.rot);t.globalAlpha=.55+.35*Math.abs(o),t.setTransform(c*r*o,l*r*o,-l*r,c*r,e.x*s,e.y*s),t.drawImage(n[e.sprite],-32,-32)}},y=()=>{!u||c||document.hidden||(l=0,c=requestAnimationFrame(g))},b=()=>{cancelAnimationFrame(c),c=0};document.addEventListener(`visibilitychange`,()=>document.hidden?b():y());let x=0;return addEventListener(`resize`,()=>{clearTimeout(x),x=window.setTimeout(m,150)}),_(m),{start(){u=!0,m(),e.classList.add(`on`),y()}}}function P(){let t=o(`#rsvp-form`),n=o(`.form-error`,t),r=e.groom.phone??``,i=()=>{let r=new FormData(t),i=String(r.get(`name`)??``).trim();if(!i)return n.textContent=`Bạn cho chúng mình biết tên nhé!`,n.hidden=!1,t.querySelector(`[name=name]`).focus(),null;n.hidden=!0;let a=r.get(`attend`)===`yes`,o=t.querySelector(`[name=guests]`).selectedOptions[0].text,s=String(r.get(`wish`)??``).trim();return[`Xác nhận dự cưới ${e.groom.name} & ${e.bride.name}`,`Tên: ${i}`,a?`Tham dự: Có (${o})`:`Tham dự: Rất tiếc, không đến được`,s&&`Lời chúc: ${s}`].filter(Boolean).join(`
`)};t.addEventListener(`submit`,e=>{e.preventDefault();let t=i();t&&(location.href=`sms:${r}?&body=${encodeURIComponent(t)}`,D(`Cảm ơn bạn đã phản hồi!`))}),o(`[data-zalo]`,t).addEventListener(`click`,async()=>{let e=i();e&&(D(await O(e)?`Đã sao chép lời nhắn — dán vào Zalo nhé!`:`Mở Zalo để gửi lời nhắn nhé!`),window.open(`https://zalo.me/${r}`,`_blank`,`noopener`))})}function F(){let e=s(`[data-reveal]`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`in`));return}let t=new IntersectionObserver(e=>{for(let n of e)n.isIntersecting&&(n.target.classList.add(`in`),t.unobserve(n.target))},{rootMargin:`0px 0px -8% 0px`,threshold:.12});e.forEach(e=>t.observe(e))}function I(){if(h()===`full`&&g())for(let e of s(`[data-tilt]`)){let t=Number(e.dataset.tilt)||10,n=0,r=0,i=0,a=()=>{n=0,e.style.setProperty(`--rx`,`${(-i*t).toFixed(2)}deg`),e.style.setProperty(`--ry`,`${(r*t).toFixed(2)}deg`)};e.addEventListener(`pointermove`,t=>{let o=e.getBoundingClientRect();r=(t.clientX-o.left)/o.width-.5,i=(t.clientY-o.top)/o.height-.5,n||(n=requestAnimationFrame(a))}),e.addEventListener(`pointerleave`,()=>{r=i=0,n||(n=requestAnimationFrame(a))})}}var L=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4 2.2.4-.9 1.8-2.2 4-2.2 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z"/></svg>`,R={map:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,cal:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10z"/></svg>`,copy:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3zM4 7h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v11h11V9H4z"/></svg>`,music:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.5a3.5 3.5 0 1 1-2-3.2V5l12-2v12.5a3.5 3.5 0 1 1-2-3.2V7.4l-8 1.3v9.8z"/></svg>`,prev:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 5.4 14 4l-8 8 8 8 1.4-1.4L8.8 12z"/></svg>`,next:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 5.4 10 4l8 8-8 8-1.4-1.4 6.6-6.6z"/></svg>`,close:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>`},z=(e,t)=>`
  <header class="sec-head" data-reveal>
    <p class="script">${a(e)}</p>
    <h2>${a(t)}</h2>
    <span class="divider" aria-hidden="true">${L}</span>
  </header>`,B=d(e.date);function V(){return`
  <div class="intro" id="intro">
    <div class="intro-glow" aria-hidden="true"></div>
    <div class="intro-inner">
      <p class="intro-guest">Trân trọng kính mời<strong id="guest-name">Quý khách</strong></p>
      <button class="envelope" id="envelope" type="button" aria-label="Mở thiệp cưới">
        <span class="env-back"></span>
        <span class="env-letter">
          <span class="letter-inner">
            <span class="script">Save the date</span>
            <span class="letter-names">${a(e.groom.name)} <em>&amp;</em> ${a(e.bride.name)}</span>
            <span class="letter-date">${B.day} · ${B.month} · ${B.year}</span>
          </span>
        </span>
        <span class="env-pocket"></span>
        <span class="env-flap"></span>
        <span class="env-seal">${a(e.initials)}</span>
      </button>
      <p class="intro-hint">Chạm để mở thiệp</p>
    </div>
  </div>`}function H(){return`
  <section class="hero" id="top">
    <div class="hero-orbit" aria-hidden="true"><i></i><i></i></div>
    <div class="hero-grid">
      <div class="hero-text">
        <p class="eyebrow">Chúng mình sắp cưới</p>
        <h1 class="names">
          <span>${a(e.groom.name)}</span>
          <span class="amp">&amp;</span>
          <span>${a(e.bride.name)}</span>
        </h1>
        <p class="hero-date"><span>${a(B.weekday)}</span><strong>${B.day}.${B.month}.${B.year}</strong></p>
        <p class="lunar">${a(e.lunarDate)}</p>
      </div>
      <div class="hero-stage" data-tilt="9">
        <div class="hero-float"><div class="hero-photo">
          <span class="layer layer-back" aria-hidden="true"></span>
          <span class="layer layer-mid" aria-hidden="true"></span>
          <div class="layer layer-img">${c(e.heroPhoto,`${e.groom.name} và ${e.bride.name}`,{eager:!0,sizes:`(max-width: 900px) 78vw, 420px`})}</div>
          <span class="layer layer-badge" aria-hidden="true">${L}</span>
        </div></div>
      </div>
    </div>
    <p class="hero-quote" data-reveal>“${a(e.quote)}”</p>
    <a class="scroll-cue" href="#countdown" aria-label="Cuộn xuống"><span></span></a>
  </section>`}function U(){let e=(e,t)=>`<div class="cd-unit"><span class="cd-num" data-cd="${e}">00</span><span class="cd-label">${t}</span></div>`;return`
  <section class="section countdown" id="countdown">
    ${z(`Đếm ngược`,`Đến ngày chung đôi`)}
    <div class="cd-grid" data-reveal>
      ${e(`d`,`Ngày`)}${e(`h`,`Giờ`)}${e(`m`,`Phút`)}${e(`s`,`Giây`)}
    </div>
    <p class="cd-done" hidden>Hôm nay là ngày vui của chúng mình!</p>
  </section>`}function W(e,t){let n=e.parents.length?`<p class="parents">${e.parents.map(a).join(`<br>`)}</p>`:``;return`
  <button class="flip-card ${t}" type="button" data-flip data-reveal aria-pressed="false"
    aria-label="${a(`${e.role} ${e.fullName} — chạm để lật thẻ`)}">
    <span class="flip-inner">
      <span class="flip-face flip-front">
        ${c(e.photo,e.fullName,{sizes:`(max-width: 640px) 80vw, 360px`})}
        <span class="flip-caption"><small>${a(e.role)}</small><strong>${a(e.name)}</strong></span>
      </span>
      <span class="flip-face flip-back">
        <small>${a(e.role)}</small>
        <strong class="script">${a(e.fullName)}</strong>
        ${n}
        <span class="bio">${a(e.bio)}</span>
        <span class="flip-hint">Chạm để lật lại</span>
      </span>
    </span>
  </button>`}function G(){return`
  <section class="section couple" id="couple">
    ${z(`Cô dâu & Chú rể`,`Hai nửa yêu thương`)}
    <div class="couple-grid">
      ${W(e.groom,`groom`)}
      <span class="couple-heart" aria-hidden="true">${L}</span>
      ${W(e.bride,`bride`)}
    </div>
    <p class="hint-text">Chạm vào thẻ để xem thêm</p>
  </section>`}function K(){return`
  <section class="section story" id="story">
    ${z(`Chuyện tình yêu`,`Hành trình của chúng mình`)}
    <ol class="timeline">
      ${e.story.map((e,t)=>`
        <li class="tl-item" data-reveal style="--i:${t}">
          <span class="tl-dot" aria-hidden="true">${L}</span>
          <div class="tl-card">
            <div class="tl-photo">${c(e.photo,e.title,{sizes:`(max-width: 640px) 80vw, 320px`})}</div>
            <div class="tl-body"><h3>${a(e.title)}</h3><p>${a(e.text)}</p></div>
          </div>
        </li>`).join(``)}
    </ol>
  </section>`}function q(e,t){let n=d(e.start),r=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.place}, ${e.address}`)}`;return`
  <article class="event-card" data-reveal style="--i:${t}">
    <h3>${a(e.title)}</h3>
    <p class="event-time">${n.time}</p>
    <p class="event-date">${a(n.weekday)}, ${n.day}/${n.month}/${n.year}</p>
    <p class="event-place"><strong>${a(e.place)}</strong>${a(e.address)}</p>
    <div class="event-actions">
      <a class="btn btn-ghost" href="${r}" target="_blank" rel="noopener">${R.map}Chỉ đường</a>
      <button class="btn btn-ghost" type="button" data-ics="${t}">${R.cal}Lưu lịch</button>
    </div>
  </article>`}function J(){return`
  <section class="section events" id="events">
    ${z(`Sự kiện`,`Lễ cưới`)}
    <div class="event-grid">${e.events.map(q).join(``)}</div>
  </section>`}function Y(){return`
  <section class="section gallery" id="gallery">
    ${z(`Album`,`Khoảnh khắc yêu thương`)}
    <div class="cf" data-reveal>
      <div class="cf-track" id="cf-track" tabindex="0" aria-label="Album ảnh cưới, vuốt ngang để xem">
        ${e.gallery.map((e,t)=>`
          <button class="cf-item" type="button" data-index="${t}" aria-label="Xem ảnh ${t+1}">
            ${c(e,`Ảnh cưới ${t+1}`,{sizes:`(max-width: 640px) 68vw, 300px`})}
          </button>`).join(``)}
      </div>
      <button class="cf-nav prev" type="button" data-cf="-1" aria-label="Ảnh trước">${R.prev}</button>
      <button class="cf-nav next" type="button" data-cf="1" aria-label="Ảnh sau">${R.next}</button>
    </div>
    <p class="cf-count" aria-live="polite"><span id="cf-current">1</span> / ${e.gallery.length}</p>
  </section>`}function X(e){let t=e.bank,n=`https://img.vietqr.io/image/${encodeURIComponent(t.name.replace(/\s+/g,``))}-${encodeURIComponent(t.number)}-compact2.png?addInfo=Mung%20cuoi&accountName=${encodeURIComponent(t.owner)}`;return`
  <div class="bank-card">
    <p class="bank-role">Mừng ${a(e.role.toLowerCase())}</p>
    <img class="bank-qr" src="${n}" alt="Mã QR chuyển khoản ${a(t.name)}" width="220" height="220" loading="lazy" decoding="async">
    <p class="bank-name">${a(t.name)}</p>
    <p class="bank-owner">${a(t.owner)}</p>
    <button class="btn btn-soft" type="button" data-copy="${a(t.number)}">${R.copy}${a(t.number)}</button>
  </div>`}function Z(){return`
  <section class="section gift" id="gift">
    ${z(`Hộp mừng cưới`,`Gửi yêu thương`)}
    <p class="lead" data-reveal>Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi thêm lời chúc, bạn có thể mở hộp quà bên dưới.</p>
    <button class="giftbox" id="giftbox" type="button" aria-expanded="false" aria-controls="bank-cards" data-reveal>
      <span class="gb-scene">
        <span class="gb-lid"><span class="gb-bow"></span></span>
        <span class="gb-box"></span>
      </span>
      <span class="gb-label">Chạm để mở quà</span>
    </button>
    <div class="bank-cards" id="bank-cards" hidden>
      ${X(e.groom)}${X(e.bride)}
    </div>
  </section>`}function Q(){return`
  <section class="section rsvp" id="rsvp">
    ${z(`Xác nhận tham dự`,`Bạn sẽ đến chứ?`)}
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
  </section>`}function $(){return`
  <footer class="footer">
    <p class="script">Thank you</p>
    <p class="footer-names">${a(e.groom.name)} &amp; ${a(e.bride.name)}</p>
    <p class="footer-note">Rất hân hạnh được đón tiếp!</p>
  </footer>`}function ee(){return`
  <canvas class="petals" id="petals" aria-hidden="true"></canvas>
  <button class="music-btn" id="music-btn" type="button" aria-label="Bật/tắt nhạc" aria-pressed="false" hidden>${R.music}</button>
  <audio id="music" src="${encodeURI(e.music)}" preload="none" loop></audio>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh">
    <img id="lb-img" alt="">
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Đóng">${R.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="-1" aria-label="Ảnh trước">${R.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="1" aria-label="Ảnh sau">${R.next}</button>
  </dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`}function te(e){e.innerHTML=`
    ${V()}
    <main class="card" id="card" inert>
      ${H()}${U()}${G()}${K()}${J()}${Y()}${Z()}${Q()}${$()}
    </main>
    ${ee()}`}y(),te(o(`#app`));var ne=A(),re=N();S(()=>{ne.start(),re.start()}),b(),C(),w(),k(),P(),i(),F(),I();