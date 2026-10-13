(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={title:`Xuân Tùng & Phương Anh — Thiệp cưới`,description:`Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.`,initials:`T & A`,date:`2027-01-17T11:00:00+07:00`,lunarDate:`Tức ngày 10 tháng 12 năm Bính Ngọ`,heroPhoto:`/photos/couple-15`,quote:`Yêu nhau không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.`,theme:`hong-do`,themePicker:!0,music:`https://cdn.jsdelivr.net/gh/saygoodbyethe3-bit/music-hosting/Beautiful in White - Westlife.mp3`,groom:{name:`Xuân Tùng`,fullName:`Cấn Xuân Tùng`,role:`Chú rể`,parents:[],bio:`Người con trai luôn tin rằng hạnh phúc là được nắm tay một người thật lâu.`,photo:`/photos/couple-12`,phone:`0348889995`,bank:{name:`Techcombank`,number:`1312228888`,owner:`CAN XUAN TUNG`}},bride:{name:`Phương Anh`,fullName:`Trần Thị Phương Anh`,role:`Cô dâu`,parents:[],bio:`Cô gái thích hoa, thích nắng và thích mỗi ngày được bình yên bên anh.`,photo:`/photos/couple-13`,bank:{name:`Techcombank`,number:`1312228888`,owner:`CAN XUAN TUNG`}},events:[{title:`Lễ Vu Quy`,start:`2027-01-17T07:00:00+07:00`,durationMin:120,place:`Tư gia nhà gái`,address:`Hải Phòng`},{title:`Lễ Thành Hôn`,start:`2027-01-17T09:00:00+07:00`,durationMin:120,place:`Tư gia nhà trai`,address:`Hải Phòng`},{title:`Tiệc Cưới`,start:`2027-01-17T11:00:00+07:00`,durationMin:180,place:`The Pandora Center Hải Phòng`,address:`12 Võ Nguyên Giáp, Kênh Dương, Lê Chân, Hải Phòng`,mapUrl:`https://www.google.com/maps/search/?api=1&query=The+Pandora+Center,+12+V%C3%B5+Nguy%C3%AAn+Gi%C3%A1p,+K%C3%AAnh+D%C6%B0%C6%A1ng,+L%C3%AA+Ch%C3%A2n,+H%E1%BA%A3i+Ph%C3%B2ng`}],letter:{photo:`/photos/couple-02`,paragraphs:[`Chúng mình rất vui và háo hức khi sắp được chia sẻ ngày hạnh phúc nhất của cuộc đời với những người thân yêu, bạn bè và đồng nghiệp.`,`Vì thời gian có hạn nên chúng mình chưa thể đến mời trực tiếp từng người. Mong tấm thiệp nhỏ này thay lời mời chân thành nhất gửi đến bạn — người đã luôn đồng hành cùng chúng mình.`,`Sự hiện diện của bạn là món quà quý giá và lời chúc phúc tuyệt vời nhất. Hẹn gặp bạn trong ngày đặc biệt ấy nhé!`]},story:[{title:`Lần đầu gặp gỡ`,text:`Một buổi chiều rất bình thường, bỗng trở thành ngày đáng nhớ nhất khi hai ánh mắt chạm nhau.`,photo:`/photos/couple-01`},{title:`Những chuyến đi`,text:`Cùng nhau đi qua biển, qua phố, qua những bữa ăn giản dị — và nhận ra nơi nào có nhau là nhà.`,photo:`/photos/couple-03`},{title:`Lời hứa trọn đời`,text:`Và rồi, chúng mình quyết định viết tiếp câu chuyện này bằng hai chữ: mãi mãi.`,photo:`/photos/couple-14`}],gallery:[`/photos/couple-15`,`/photos/couple-01`,`/photos/couple-02`,`/photos/couple-04`,`/photos/couple-06`,`/photos/couple-07`,`/photos/couple-08`,`/photos/couple-14`,`/photos/couple-05`,`/photos/couple-09`]},t=e=>e.toISOString().replace(/[-:]/g,``).replace(/\.\d{3}/,``),n=e=>e.replace(/\\/g,`\\\\`).replace(/[,;]/g,e=>`\\${e}`).replace(/\n/g,`\\n`),r=()=>/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);function i(n){let r=new Date(n.start),i=new Date(r.getTime()+n.durationMin*6e4),a=`${n.title} — ${e.groom.name} & ${e.bride.name}`,o=`${n.place}, ${n.address}`,s=`${e.title}\n${n.place}\n${n.address}\n\nTrân trọng kính mời bạn đến chung vui cùng gia đình chúng mình!`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:`TEMPLATE`,text:a,dates:`${t(r)}/${t(i)}`,details:s,location:o}).toString()}`}function a(r){let i=e.events[r],a=new Date(i.start),o=new Date(a.getTime()+i.durationMin*6e4),s=`${e.groom.name} & ${e.bride.name}`;return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//lovecard-3d//VI`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`BEGIN:VEVENT`,`UID:${t(a)}-${r}@lovecard-3d`,`DTSTAMP:${t(new Date)}`,`DTSTART:${t(a)}`,`DTEND:${t(o)}`,`SUMMARY:${n(`${i.title} — ${s}`)}`,`DESCRIPTION:${n(`${e.title} — ${i.place}`)}`,`LOCATION:${n(`${i.place}, ${i.address}`)}`,`BEGIN:VALARM`,`TRIGGER:-PT2H`,`ACTION:DISPLAY`,`DESCRIPTION:${n(i.title)}`,`END:VALARM`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`)}function o(){document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-ics]`);if(!n)return;let r=Number(n.dataset.ics);if(isNaN(r)||!e.events[r])return;let i=a(r),o=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(o&&s){window.location.href=`data:text/calendar;charset=utf-8,`+encodeURIComponent(i);return}let c=new Blob([i],{type:`text/calendar;charset=utf-8`}),l=URL.createObjectURL(c),u=document.createElement(`a`);u.href=l,u.download=`thiep-cuoi-${e.events[r].title.toLowerCase().replace(/\s+/g,`-`)}.ics`,document.body.appendChild(u),u.click(),document.body.removeChild(u),setTimeout(()=>URL.revokeObjectURL(l),1e3)})}var s=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`);function c(e,t=document){let n=t.querySelector(e);if(!n)throw Error(`Missing element: ${e}`);return n}var l=(e,t=document)=>Array.from(t.querySelectorAll(e));function u(e,t,n={}){let{sizes:r=`(max-width: 640px) 90vw, 480px`,eager:i=!1,cls:a=``}=n;return`<img class="${a}" src="${e}-sm.webp" srcset="${e}-sm.webp 480w, ${e}.webp 900w" sizes="${r}"
    alt="${s(t)}" ${i?`fetchpriority="high"`:`loading="lazy"`} decoding="async" draggable="false">`}var d=e=>String(e).padStart(2,`0`),f=`Asia/Ho_Chi_Minh`;function p(e){let t=new Date(e),n=e=>new Intl.DateTimeFormat(`vi-VN`,{timeZone:f,...e}).format(t),[r,i,a]=n({day:`2-digit`,month:`2-digit`,year:`numeric`}).split(`/`);return{day:r,month:i,year:a,weekday:n({weekday:`long`}),time:n({hour:`2-digit`,minute:`2-digit`,hour12:!1})}}function m(){if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return`reduced`;let e=navigator,t=(e.hardwareConcurrency??8)<=4,n=(e.deviceMemory??8)<=3;return t||n||e.connection?.saveData?`lite`:`full`}var h=m(),g=new Set,_=()=>h,v=()=>matchMedia(`(hover: hover) and (pointer: fine)`).matches;function y(e){g.add(e)}function b(){h===`full`&&(h=`lite`,x(),g.forEach(e=>e(h)))}function x(){let e=document.documentElement;e.classList.toggle(`lite`,h!==`full`),e.classList.toggle(`reduced`,h===`reduced`)}function S(){let t=new Date(e.date).getTime(),n=Object.fromEntries(l(`[data-cd]`).map(e=>[e.dataset.cd,e])),r=_()!==`reduced`&&`animate`in Element.prototype,i=0,a=(e,t)=>{let i=n[e];i.textContent!==t&&(i.textContent=t,r&&!document.hidden&&i.animate([{transform:`rotateX(-90deg)`,opacity:0},{transform:`rotateX(0)`,opacity:1}],{duration:420,easing:`cubic-bezier(.2,.8,.2,1.2)`}))},o=()=>{let e=Math.max(0,t-Date.now()),n=Math.floor(e/1e3);a(`d`,d(Math.floor(n/86400))),a(`h`,d(Math.floor(n%86400/3600))),a(`m`,d(Math.floor(n%3600/60))),a(`s`,d(n%60)),e===0&&(clearInterval(i),c(`.cd-done`).hidden=!1)};o(),i=window.setInterval(o,1e3)}var C=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4 2.2.4-.9 1.8-2.2 4-2.2 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z"/></svg>`,w=`
<svg class="sprig" viewBox="0 0 160 160" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 152C40 132 70 110 92 80S120 44 132 30"/>
  <path d="M60 118C66 100 64 86 56 74"/>
  <path d="M96 74C112 74 126 80 136 92"/>
  <path d="M30 140Q14 128 16 110Q32 120 30 140z"/>
  <path d="M46 128Q64 132 74 146Q54 146 46 128z"/>
  <path d="M56 74Q44 60 48 44Q62 56 56 74z"/>
  <path d="M78 98Q98 98 108 112Q88 114 78 98z"/>
  <path d="M136 92Q152 96 156 112Q140 108 136 92z"/>
  <path d="M110 54Q96 42 98 26Q112 38 110 54z"/>
  ${[0,1,2,3,4].map(e=>`<path d="M132 30q-9-13 0-21q9 8 0 21z" transform="rotate(${e*72} 132 30)"/>`).join(``)}
  <path d="M68 96a2.5 2.5 0 1 0 .01 0M118 66a2.5 2.5 0 1 0 .01 0M40 112a2 2 0 1 0 .01 0"/>
</svg>`,T=`
<svg class="rings" viewBox="0 0 124 84" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 54a26 26 0 1 0 52 0a26 26 0 1 0-52 0"/>
  <path d="M54 54a26 26 0 1 0 52 0a26 26 0 1 0-52 0"/>
  <path d="M80 28l-6-7 3-4h6l3 4z"/>
  <path d="M80 8V2M92 12l4-4M68 12l-4-4"/>
</svg>`,E=e=>`<path d="M100 62Q114 38 100 14Q86 38 100 62z" transform="rotate(${e*30} 100 100)"/><path d="M100 22l4 7-4 7-4-7z" transform="rotate(${e*30+15} 100 100)"/>`,D=`
<svg class="medallion-art" viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".6" stroke-linejoin="round">
  <path d="M3 100a97 97 0 1 0 194 0a97 97 0 1 0-194 0"/>
  <path d="M8 100a92 92 0 1 0 184 0a92 92 0 1 0-184 0"/>
  ${Array.from({length:12},(e,t)=>E(t)).join(``)}
  <path d="M66 100a34 34 0 1 0 68 0a34 34 0 1 0-68 0"/>
</svg>`,ee=e=>{let t=e*Math.PI/30,[n,r]=e%5?[86,92]:[78,92],i=e=>`${(100+e*Math.sin(t)).toFixed(1)} ${(100-e*Math.cos(t)).toFixed(1)}`;return`M${i(n)}L${i(r)}`},O=e=>`
<svg viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round">
  <path stroke-width=".6" d="M2 100a98 98 0 1 0 196 0a98 98 0 1 0-196 0M30 100a70 70 0 1 0 140 0a70 70 0 1 0-140 0"/>
  <path stroke-width="1" d="${Array.from({length:60},(e,t)=>ee(t)).join(``)}"/>
  <path class="dial-hand" stroke-width="1.2" d="M100 112V16M97 100a3 3 0 1 0 6 0a3 3 0 1 0-6 0" style="animation-delay:-${e}s"/>
</svg>`,k=`
<svg viewBox="0 0 300 300" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".8">
  <path d="M20 300V150a130 130 0 0 1 260 0V300"/>
  <path d="M44 300V150a106 106 0 0 1 212 0V300"/>
  <path d="M68 300V150a82 82 0 0 1 164 0V300"/>
  <path d="M150 20V4M150 4l-4 6M150 4l4 6"/>
</svg>`,A=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/></svg>`;function te(){for(let e of l(`[data-draw]`))l(`path`,e).forEach((e,t)=>{e.style.setProperty(`--len`,String(Math.ceil(e.getTotalLength())+1)),e.style.setProperty(`--k`,String(t))})}function j(e,{size:t=1,anchored:n=!1}={}){if(_()===`reduced`||!(`animate`in Element.prototype))return;let{left:r,top:i,width:a,height:o}=e.getBoundingClientRect(),s=r+a/2,c=i+o/2,l=Math.round((_()===`full`?26:14)*t);for(let r=0;r<l;r++){let i=document.createElement(`span`),a=r%3==0;i.className=`burst ${a?`burst-heart`:`burst-spark`}`,i.innerHTML=a?C:A,n?(i.classList.add(`anchored`),e.append(i)):(i.style.left=`${s}px`,i.style.top=`${c}px`,document.body.append(i));let o=r/l*Math.PI*2+Math.random()*.5,u=(90+Math.random()*150)*t,d=Math.cos(o)*u,f=Math.sin(o)*u-40*t,p=.6+Math.random()*.8,m=(Math.random()-.5)*240;i.animate([{transform:`translate(-50%, -50%) scale(0)`,opacity:1},{transform:`translate(calc(-50% + ${d*.7}px), calc(-50% + ${f*.7}px)) scale(${p}) rotate(${m*.6}deg)`,opacity:1,offset:.55},{transform:`translate(calc(-50% + ${d}px), calc(-50% + ${f+60*t}px)) scale(${p*.6}) rotate(${m}deg)`,opacity:0}],{duration:1200+Math.random()*600,easing:`cubic-bezier(.2,.8,.3,1)`,delay:Math.random()*120}).onfinish=()=>i.remove()}}function ne(){let e=new URLSearchParams(location.search).get(`to`)?.trim();if(e)for(let t of[c(`#guest-name`),...l(`[data-guest]`)])t.textContent=e.slice(0,60)}function re(e){ne();let t=c(`#intro`),n=c(`#envelope`),r=c(`#card`);document.body.classList.add(`locked`),history.scrollRestoration=`manual`,scrollTo(0,0);let i=_()===`reduced`,a=!1;n.addEventListener(`click`,()=>{a||(a=!0,e(),j(c(`.env-seal`,n)),t.classList.add(`opening`),window.setTimeout(()=>{t.classList.add(`opened`),r.inert=!1,document.body.classList.remove(`locked`),r.classList.add(`shown`)},i?0:1500),window.setTimeout(()=>t.remove(),i?400:2400))})}function ie(){for(let e of l(`[data-flip]`)){let t=t=>{e.classList.toggle(`flipped`,t),e.setAttribute(`aria-pressed`,String(t))};e.addEventListener(`click`,()=>t(!e.classList.contains(`flipped`))),e.addEventListener(`thread`,n=>{let r=n.detail;setTimeout(()=>t(r),e.classList.contains(`bride`)?220:0)})}}var M=(e,t,n)=>{let r=Math.min(1,Math.max(0,(e-t)/(n-t)));return r*r*(3-2*r)},N=(e,t,n)=>e+(t-e)*n,ae=.09;function oe(){let e=document.querySelector(`.hero-fold`);if(!e)return;let t=c(`.fold-pin`,e),n=c(`.hero-stage`,e),r=c(`.fold-move`,e),i=c(`.fold-card`,e),a=c(`.fold-a`,e),o=c(`.fold-c`,e),s=0,l=[0,0],u=1,d=1,f=!1,p=1,m=0,h=0,g=0,_=()=>{s=n.offsetWidth;let r=n.offsetHeight,i=0,a=0;for(let e=n;e&&e!==t;e=e.offsetParent)i+=e.offsetLeft,a+=e.offsetTop;let[o,c]=[t.clientWidth,t.clientHeight];l=[o/2-i-s/2,c/2-a-r/2],u=Math.min(1.15,(o-40)/s,(c-96)/r),d=Math.min(1,(o-48)/(3*s),(c-96)/r),f=d>=.8,p=Math.max(1,e.offsetHeight-t.offsetHeight)},v=e=>{let n=M(e,0,.16),c=M(e,.06,.34),p=M(e,.42,.7),m=M(e,.86,1),h,g;f?(h=-.5*c+.5*p,g=N(1,d,Math.max(c,p))*(1-.05*m)):(h=M(e,.74,.86)*(1-m),g=N(N(1,u,n),d,m));let _=10*(Math.sin(Math.PI*p)-Math.sin(Math.PI*c)),v=12*m;r.style.transform=`translate3d(${l[0]*n}px, ${l[1]*n}px, 0) scale(${g})`,i.style.transform=`rotateX(${v}deg) rotateY(${_}deg) translate3d(${-h*s}px, 0, 0)`,a.style.transform=`translate3d(0, 0, ${2*(1-c)}px) rotateY(${180*(1-c)}deg)`,o.style.transform=`translate3d(0, 0, ${1-p}px) rotateY(${-180*(1-p)}deg)`,a.style.setProperty(`--shade`,(.5*Math.sin(Math.PI*c)).toFixed(3)),o.style.setProperty(`--shade`,(.5*Math.sin(Math.PI*p)).toFixed(3)),t.style.setProperty(`--fade`,n.toFixed(3))},y=()=>Math.min(1,Math.max(0,-e.getBoundingClientRect().top/p)),b=e=>{let t=Math.min(.05,(e-(h||e))/1e3);h=e;let n=y();m+=(n-m)*(1-Math.exp(-t/ae)),Math.abs(n-m)<5e-4&&(m=n),v(m),g=m===n?0:requestAnimationFrame(b),g||(h=0)},x=()=>{g||(g=requestAnimationFrame(b))},S=new ResizeObserver(()=>{_(),m=y(),v(m)});S.observe(t),S.observe(c(`.hero-grid`,e)),addEventListener(`scroll`,x,{passive:!0})}function se(){let e=c(`#cf-track`),t=l(`.cf-item`,e),n=c(`#cf-current`),r=[],i=1,a=0,o=0,s=()=>{i=t[0].offsetWidth||1,r=t.map(e=>e.offsetLeft+e.offsetWidth/2),u()},u=()=>{o=0;let s=e.scrollLeft+e.clientWidth/2,c=0;t.forEach((e,t)=>{let n=Math.max(-3,Math.min(3,(r[t]-s)/i));e.style.setProperty(`--d`,n.toFixed(3)),e.style.setProperty(`--ad`,Math.abs(n).toFixed(3)),e.style.zIndex=String(10-Math.round(Math.abs(n)*2)),Math.abs(n)<Math.abs((r[c]-s)/i)&&(c=t)}),c!==a&&(a=c,n.textContent=String(c+1))},d=n=>{let i=Math.max(0,Math.min(t.length-1,n));e.scrollTo({left:r[i]-e.clientWidth/2,behavior:`smooth`})};e.addEventListener(`scroll`,()=>o||(o=requestAnimationFrame(u)),{passive:!0}),new ResizeObserver(s).observe(e),l(`[data-cf]`).forEach(e=>e.addEventListener(`click`,()=>d(a+Number(e.dataset.cf)))),e.addEventListener(`keydown`,e=>{if(e.key===`ArrowRight`)d(a+1);else if(e.key===`ArrowLeft`)d(a-1);else return;e.preventDefault()});let f=ce(d);t.forEach((e,t)=>e.addEventListener(`click`,()=>t===a?f.open(t):d(t)))}function ce(t){let n=c(`#lightbox`),r=c(`#lb-img`),i=e.gallery,a=0,o=e=>{a=(e+i.length)%i.length,r.src=`${i[a]}.webp`,r.alt=`Ảnh cưới ${a+1}`,t(a)};n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-lb]`);t?t.dataset.lb===`close`?n.close():o(a+Number(t.dataset.lb)):e.target===n&&n.close()}),n.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&o(a+1),e.key===`ArrowLeft`&&o(a-1)});let s=0;return n.addEventListener(`pointerdown`,e=>s=e.clientX),n.addEventListener(`pointerup`,e=>{let t=e.clientX-s;Math.abs(t)>45&&o(a+(t<0?1:-1))}),{open(e){o(e),n.showModal()}}}var P=0;function F(e){let t=c(`#toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(P),P=window.setTimeout(()=>t.classList.remove(`show`),2600)}async function I(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.cssText=`position:fixed;opacity:0;top:0`,document.body.append(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}}function le(){let e=c(`#giftbox`),t=c(`#bank-cards`);e.addEventListener(`click`,()=>{e.classList.contains(`open`)||(e.classList.add(`open`),e.setAttribute(`aria-expanded`,`true`),window.setTimeout(()=>{t.hidden=!1,requestAnimationFrame(()=>t.classList.add(`in`))},_()===`reduced`?0:650))});for(let e of l(`[data-copy]`))e.addEventListener(`click`,async()=>{F(await I(e.dataset.copy)?`Đã sao chép số tài khoản`:`Không sao chép được, bạn vui lòng ghi lại nhé`)})}var ue=`http://www.w3.org/2000/svg`,L=240,de=3,fe=2600;function pe(){let e=c(`#card`),t=l(`.card > .section`),n=c(`.footer`,e),r=c(`.footer-rings`,n),i=c(`.timeline`,e);if(!t.length)return;let a=document.createElementNS(ue,`svg`);a.classList.add(`thread`),a.setAttribute(`aria-hidden`,`true`),a.innerHTML=`<linearGradient id="thread-ink" gradientUnits="userSpaceOnUse" x1="0" x2="0"><stop class="ink-rose"/><stop class="ink-gold" offset="1"/></linearGradient><mask id="thread-beads" maskUnits="userSpaceOnUse"></mask><path mask="url(#thread-beads)"/>`;let o=c(`linearGradient`,a),s=c(`mask`,a),u=c(`path`,a),d=document.createElement(`span`);d.className=`thread-tip`,d.setAttribute(`aria-hidden`,`true`),d.innerHTML=C,e.prepend(a,d),n.classList.add(`threaded`);let f=_()!==`reduced`,p=0,m=0,h=[],g=0,v=0,y=`idle`,b=0,x=[],S=t=>{let n=0,r=0;for(let i=t;i&&i!==e;i=i.offsetParent)n+=i.offsetLeft,r+=i.offsetTop;return{x:n,y:r}},w=()=>l(`.tl-dot`,i).map(e=>{let{x:t,y:n}=S(e);return{x:t+e.offsetWidth/2,y:n+e.offsetHeight/2,r:e.offsetWidth/2+de}}),T=()=>{let{x:e,y:t}=S(r),n=r.offsetWidth/124,i=(r,i)=>`${e+r*n} ${t+i*n}`,a=26*n,o=i(62,35.24),s=i(62,72.76);return`L${o}A${a} ${a} 0 1 0 ${s}A${a} ${a} 0 0 0 ${o}A${a} ${a} 0 1 1 ${s}A${a} ${a} 0 0 1 ${i(80,28)}l${-6*n} ${-7*n}l${3*n} ${-4*n}h${6*n}l${3*n} ${4*n}l${-6*n} ${7*n}`},E=()=>{let r=e.clientWidth,a=Math.min(48,Math.max(8,r*.025)),d=r/2;g=n.offsetTop;let _=[...t.map(e=>e.offsetTop),g],v=w(),b=`M${d} ${_[0]}`;for(let e=0;e<_.length-1;e++){let[n,o]=[_[e],_[e+1]],s=e%2?r-a:a,l=Math.min(56,(o-n)/4);b+=`C${s} ${n} ${s} ${n} ${s} ${n+l}`;let u=s;if(v.length&&t[e].contains(i)){let r=c(`.sec-head`,t[e]),a=e=>Math.min(Math.max(e,n+l),o-l),d=a(S(r).y+r.offsetHeight),f=a(S(i).y),p=(d+f)/2;u=v[0].x,b+=`L${s} ${d}C${s} ${p} ${u} ${p} ${u} ${f}`}b+=`L${u} ${o-l}C${u} ${o} ${u} ${o} ${d} ${o}`}if(u.setAttribute(`d`,b),m=u.getTotalLength(),h=Array.from({length:241},(e,t)=>u.getPointAtLength(m*t/L).y),u.setAttribute(`d`,b+T()),p=u.getTotalLength(),x=l(`[data-thread-stop]`,e).map(e=>{let t=e.dataset.threadStop?c(e.dataset.threadStop,e):e;return{el:e,anchor:t,y:S(t).y+t.offsetHeight/2,lit:e.classList.contains(`lit`)}}),!f)for(let e of x)e.el.classList.add(`lit`);o.setAttribute(`y1`,String(g-80)),o.setAttribute(`y2`,String(g+40)),s.innerHTML=`<rect width="${r}" height="${e.clientHeight}" fill="#fff"/>`+v.map(e=>`<circle cx="${e.x}" cy="${e.y}" r="${e.r}" fill="#000"/>`).join(``),f&&(u.style.strokeDasharray=`${p}`,y===`tied`&&D(p))},D=e=>{u.style.strokeDashoffset=`${p-e}`;let t=u.getPointAtLength(e);d.style.transform=`translate3d(${t.x}px, ${t.y}px, 0)`,d.classList.toggle(`on`,e>0&&e<p),d.classList.toggle(`gilded`,t.y>g);for(let e of x){let n=t.y>=e.y;n!==e.lit&&(e.lit=n,e.el.classList.toggle(`lit`,n),e.el.dispatchEvent(new CustomEvent(`thread`,{detail:n})),n&&t.y-e.y<innerHeight/2&&j(e.anchor,{size:.35,anchored:!0}))}},ee=()=>{if(y!==`idle`)return;y=`tying`;let e=performance.now(),t=r=>{let i=Math.min(1,(r-e)/fe),a=i<.5?4*i**3:1-(-2*i+2)**3/2;D(m+(p-m)*a),i<1?b=requestAnimationFrame(t):(y=`tied`,n.classList.add(`tied`))};b=requestAnimationFrame(t)},O=()=>{y!==`idle`&&(cancelAnimationFrame(b),y=`idle`,n.classList.remove(`tied`))},k=()=>{if(v=0,!p)return;let t=innerHeight*.62-e.getBoundingClientRect().top,n=h.findIndex(e=>e>=t);if(n<0)return ee();O();let r=h[n]-h[n-1]||1;D(n===0?0:m*(n-1+(t-h[n-1])/r)/L)},A=()=>{v||(v=requestAnimationFrame(k))};new ResizeObserver(()=>{E(),f&&A()}).observe(e),f?addEventListener(`scroll`,A,{passive:!0}):n.classList.add(`tied`)}function me(){let e=c(`#music`),t=c(`#music-btn`),n=!1,r=()=>{let n=!e.paused;t.classList.toggle(`playing`,n),t.setAttribute(`aria-pressed`,String(n))};e.addEventListener(`play`,r),e.addEventListener(`pause`,r);let i=()=>{n=!0,e.volume=.6,e.play().catch(()=>{n=!1,r()})};return t.addEventListener(`click`,()=>{e.paused?i():(n=!1,e.pause())}),document.addEventListener(`visibilitychange`,()=>{document.hidden?e.pause():n&&e.play().catch(()=>{})}),{start(){t.hidden=!1,i()}}}var R={"hong-kem":{label:`Hồng kem`,colors:{ivory:`#fbf5ee`,paper:`#fffaf5`,blush:`#f6e1dc`,rose:`#d98b9b`,roseDeep:`#b75a6e`,wine:`#6e2a3a`,gold:`#c7a05a`,ink:`#3d2b2f`,muted:`#86706f`},petals:[`#f4b6c2`,`#f8d3da`,`#e89aab`,`#fbe4d0`]},"xanh-la-trang":{label:`Xanh lá trắng`,colors:{ivory:`#f6faf5`,paper:`#ffffff`,blush:`#e2eee1`,rose:`#8db898`,roseDeep:`#4c8a5f`,wine:`#2c5a40`,gold:`#b89a5a`,ink:`#25342b`,muted:`#6b7c70`},petals:[`#cde6d1`,`#e9f4ea`,`#a6cdb0`,`#fffdf4`]},"do-kem":{label:`Đỏ kem`,colors:{ivory:`#f8efe2`,paper:`#fffaf0`,blush:`#f2dcc5`,rose:`#cc6a5e`,roseDeep:`#a8322d`,wine:`#7a1a1d`,gold:`#c39a4f`,ink:`#3e2620`,muted:`#8a6f62`},petals:[`#e7897f`,`#f3c9b6`,`#d65a52`,`#f7e6cc`]},"do-trang":{label:`Đỏ trắng`,colors:{ivory:`#fdfafa`,paper:`#ffffff`,blush:`#f8e3e3`,rose:`#e0626a`,roseDeep:`#c4161c`,wine:`#8e0e14`,gold:`#c9a24a`,ink:`#2e1d1e`,muted:`#7f6a6b`},petals:[`#e8505b`,`#f4a3aa`,`#c4161c`,`#fde3e5`]},"hong-trang":{label:`Hồng trắng`,colors:{ivory:`#fff8fa`,paper:`#ffffff`,blush:`#fde6ee`,rose:`#ef98b4`,roseDeep:`#dc5d88`,wine:`#a33862`,gold:`#d4b07a`,ink:`#3f2a33`,muted:`#8c7480`},petals:[`#f9c4d5`,`#fde0ea`,`#f4a6c0`,`#ffffff`]},"hong-do":{label:`Hồng đỏ`,colors:{ivory:`#fff4f5`,paper:`#fffafb`,blush:`#fbd9df`,rose:`#ef6f8a`,roseDeep:`#d6334f`,wine:`#9b1b30`,gold:`#d1a256`,ink:`#3b1f26`,muted:`#8b6870`},petals:[`#f58ca0`,`#fbc1cc`,`#e0405e`,`#ffe3e8`]},"xanh-navy":{label:`Xanh navy`,colors:{ivory:`#f6f8fb`,paper:`#ffffff`,blush:`#e2e8f2`,rose:`#8fa6c8`,roseDeep:`#3f5f8f`,wine:`#1f3358`,gold:`#c2a15e`,ink:`#1e2738`,muted:`#6b7689`},petals:[`#c9d6ea`,`#e8eef7`,`#a8bbd9`,`#fffaf0`]},"tim-lavender":{label:`Tím lavender`,colors:{ivory:`#faf7fc`,paper:`#ffffff`,blush:`#ece3f4`,rose:`#b39ad0`,roseDeep:`#8a63b3`,wine:`#553a7a`,gold:`#c9a86a`,ink:`#2f2638`,muted:`#7e7189`},petals:[`#d9c8ee`,`#efe6f8`,`#c3a9e2`,`#fff7fb`]}},z=e=>!!e&&Object.hasOwn(R,e),B=`lovecard-theme`,V={ivory:`--ivory`,paper:`--paper`,blush:`--blush`,rose:`--rose`,roseDeep:`--rose-deep`,wine:`--wine`,gold:`--gold`,ink:`--ink`,muted:`--muted`},H=e=>{let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]},U=e=>`#${e.map(e=>Math.round(e).toString(16).padStart(2,`0`)).join(``)}`,W=(e,t,n)=>[0,1,2].map(r=>e[r]+(t[r]-e[r])*n);function he(e){let[t,n,r,i,a]=[e.rose,e.blush,e.wine,e.gold,e.ink].map(H),o=[0,0,0],s=W(i,H(`#fff3d6`),.45),c=W(r,o,.3),l={"--gold-light":U(s),"--gold-ribbon":U(W(i,[255,255,255],.2)),"--wine-light":U(W(r,H(e.roseDeep),.25)),"--wine-dark":U(c),"--line":U(W(n,H(e.muted),.15))};for(let e=20;e<=80;e+=10)l[`--tint-${e}`]=U(W(n,t,e/100));let u={wine:r,rose:t,gold:i,ink:a,"gold-light":s,"wine-dark":c,shade:W(r,o,.75)};for(let[e,t]of Object.entries(u))l[`--${e}-rgb`]=t.map(Math.round).join(`, `);return l}var G=new Set,K=e.theme,ge=()=>R[K];function _e(e){G.add(e)}function ve(){try{return localStorage.getItem(B)}catch{return null}}function ye(){let t=new URLSearchParams(location.search).get(`theme`);if(z(t))return t;let n=ve();return e.themePicker&&z(n)?n:e.theme}function q(e){K=e;let t=document.documentElement,{colors:n}=R[e];for(let e of Object.keys(V))t.style.setProperty(V[e],n[e]);for(let[e,r]of Object.entries(he(n)))t.style.setProperty(e,r);t.dataset.theme=e,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,n.ivory),G.forEach(t=>t(R[e]))}function be(){q(ye())}function xe(){let e=document.querySelector(`#theme-btn`);if(!e)return;let t=c(`#theme-panel`),n=l(`[data-theme-id]`,t),r=()=>n.forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.themeId===K))),i=n=>{t.hidden=!n,e.setAttribute(`aria-expanded`,String(n))};e.addEventListener(`click`,()=>i(!!t.hidden)),t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-theme-id]`)?.dataset.themeId;if(z(t)){q(t);try{localStorage.setItem(B,t)}catch{}r()}}),document.addEventListener(`click`,e=>{!t.hidden&&!e.target.closest(`#theme-btn, #theme-panel`)&&i(!1)}),document.addEventListener(`keydown`,n=>{n.key===`Escape`&&!t.hidden&&(i(!1),e.focus())}),r()}function J(e){return e.map(e=>{let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.translate(32,32);let r=n.createLinearGradient(0,-28,0,28);return r.addColorStop(0,e),r.addColorStop(1,`#ffffff`),n.fillStyle=r,n.beginPath(),n.moveTo(0,-28),n.bezierCurveTo(22,-20,20,14,0,28),n.bezierCurveTo(-20,14,-22,-20,0,-28),n.fill(),t})}function Se(){if(_()===`reduced`)return{start(){}};let e=c(`#petals`),t=e.getContext(`2d`);if(!t)return{start(){}};let n=J(ge().petals);_e(e=>n=J(e.petals));let r=[],i=0,a=0,o=1,s=0,l=0,u=!1,d={frames:0,total:0},f=()=>{let e=Math.min(1,innerWidth*innerHeight/1024e3);return Math.round((_()===`full`?28:10)*(.55+.45*e))},p=e=>({x:Math.random()*i,y:e?Math.random()*a:-30,size:10+Math.random()*12,vy:28+Math.random()*38,vx:-8+Math.random()*16,sway:Math.random()*Math.PI*2,swaySpeed:.6+Math.random()*1.1,rot:Math.random()*Math.PI*2,vr:-1+Math.random()*2,flip:Math.random()*Math.PI*2,vf:1.5+Math.random()*2.5,sprite:Math.floor(Math.random()*n.length)}),m=()=>{o=Math.min(devicePixelRatio||1,_()===`full`?1.5:1),i=innerWidth,a=innerHeight,e.width=Math.round(i*o),e.height=Math.round(a*o);let t=f();for(r=r.slice(0,t);r.length<t;)r.push(p(!0))},h=c=>{s=requestAnimationFrame(h);let u=Math.min(.05,(c-(l||c))/1e3);l=c,d.frames<150&&u>0&&(d.frames++,d.total+=u,d.frames===150&&d.total/150>1/40&&b()),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height);for(let e of r){e.sway+=e.swaySpeed*u,e.y+=e.vy*u,e.x+=(e.vx+Math.sin(e.sway)*22)*u,e.rot+=e.vr*u,e.flip+=e.vf*u,(e.y>a+30||e.x<-40||e.x>i+40)&&Object.assign(e,p(!1));let r=e.size/64*o,s=Math.cos(e.flip),c=Math.cos(e.rot),l=Math.sin(e.rot);t.globalAlpha=.55+.35*Math.abs(s),t.setTransform(c*r*s,l*r*s,-l*r,c*r,e.x*o,e.y*o),t.drawImage(n[e.sprite],-32,-32)}},g=()=>{!u||s||document.hidden||(l=0,s=requestAnimationFrame(h))},v=()=>{cancelAnimationFrame(s),s=0};document.addEventListener(`visibilitychange`,()=>document.hidden?v():g());let x=0;return addEventListener(`resize`,()=>{clearTimeout(x),x=window.setTimeout(m,150)}),y(m),{start(){u=!0,m(),e.classList.add(`on`),g()}}}function Ce(){let t=c(`#rsvp-form`),n=c(`.form-error`,t),r=e.groom.phone??``,i=c(`[data-guests]`,t);t.addEventListener(`change`,e=>{let t=e.target;t.name===`attend`&&(i.hidden=t.value===`no`)});let a=()=>{let r=new FormData(t),i=String(r.get(`name`)??``).trim();if(!i)return n.textContent=`Bạn cho chúng mình biết tên nhé!`,n.hidden=!1,t.querySelector(`[name=name]`).focus(),null;n.hidden=!0;let a=t.querySelector(`[name=guests]`).selectedOptions[0].text,o=String(r.get(`wish`)??``).trim(),s={yes:`Tham dự: Có (${a})`,maybe:`Tham dự: Đang cân nhắc (${a})`,no:`Tham dự: Rất tiếc, không đến được`}[String(r.get(`attend`))];return[`Xác nhận dự cưới ${e.groom.name} & ${e.bride.name}`,`Tên: ${i}`,s,o&&`Lời chúc: ${o}`].filter(Boolean).join(`
`)};t.addEventListener(`submit`,e=>{e.preventDefault();let t=a();t&&(location.href=`sms:${r}?&body=${encodeURIComponent(t)}`,F(`Cảm ơn bạn đã phản hồi!`))}),c(`[data-zalo]`,t).addEventListener(`click`,async()=>{let e=a();e&&(F(await I(e)?`Đã sao chép lời nhắn — dán vào Zalo nhé!`:`Mở Zalo để gửi lời nhắn nhé!`),window.open(`https://zalo.me/${r}`,`_blank`,`noopener`))})}function we(){let e=l(`[data-reveal]`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`in`));return}let t=new IntersectionObserver(e=>{for(let n of e)n.isIntersecting&&(n.target.classList.add(`in`),t.unobserve(n.target))},{rootMargin:`0px 0px -8% 0px`,threshold:.12});e.forEach(e=>t.observe(e))}function Te(){if(_()===`full`&&v())for(let e of l(`[data-tilt]`)){let t=Number(e.dataset.tilt)||10,n=0,r=0,i=0,a=()=>{n=0,e.style.setProperty(`--rx`,`${(-i*t).toFixed(2)}deg`),e.style.setProperty(`--ry`,`${(r*t).toFixed(2)}deg`)};e.addEventListener(`pointermove`,t=>{let o=e.getBoundingClientRect();r=(t.clientX-o.left)/o.width-.5,i=(t.clientY-o.top)/o.height-.5,n||(n=requestAnimationFrame(a))}),e.addEventListener(`pointerleave`,()=>{r=i=0,n||(n=requestAnimationFrame(a))})}}var Y={map:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,cal:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10z"/></svg>`,apple:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.09.65-2.73 1.4-.56.64-1.04 1.7-1.01 2.74 1.07.08 2.12-.52 2.73-1.27z"/></svg>`,google:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>`,copy:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3zM4 7h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v11h11V9H4z"/></svg>`,music:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.5a3.5 3.5 0 1 1-2-3.2V5l12-2v12.5a3.5 3.5 0 1 1-2-3.2V7.4l-8 1.3v9.8z"/></svg>`,prev:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 5.4 14 4l-8 8 8 8 1.4-1.4L8.8 12z"/></svg>`,next:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 5.4 10 4l8 8-8 8-1.4-1.4 6.6-6.6z"/></svg>`,palette:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 23 9.8C23 5.5 18.1 2 12 2zM6.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,close:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>`},Ee=e=>`
  <span class="twinkles" aria-hidden="true">${e.map(([e,t,n,r])=>`<i style="--x:${e}%;--y:${t}%;--s:${n}px;--t:${r}s">${A}</i>`).join(``)}</span>`,X=e=>`<span class="orn ${e}" data-draw aria-hidden="true">${w}</span>`;function De(e){let t=0;return e.normalize(`NFC`).split(` `).map(e=>`<span class="word">${Array.from(e,e=>`<span class="ch" style="--c:${t++}">${s(e)}</span>`).join(``)}</span>`).join(` `)}var Z=(e,t)=>`
  <header class="sec-head" data-reveal>
    <p class="script">${s(e)}</p>
    <h2 aria-label="${s(t)}"><span aria-hidden="true">${De(t)}</span></h2>
    <span class="divider" aria-hidden="true">${C}</span>
  </header>`,Q=p(e.date);function Oe(){return`
  <div class="intro" id="intro">
    <span class="medallion" data-draw aria-hidden="true">${D}</span>
    ${X(`orn-tl`)}${X(`orn-br`)}
    <div class="intro-inner">
      <p class="intro-guest">Trân trọng kính mời<strong id="guest-name">Quý khách</strong></p>
      <button class="envelope" id="envelope" type="button" aria-label="Mở thiệp cưới">
        <span class="env-back"></span>
        <span class="env-letter">
          <span class="letter-inner">
            <span class="script">Save the date</span>
            <span class="letter-names">${s(e.groom.name)} <em>&amp;</em> ${s(e.bride.name)}</span>
            <span class="letter-date">${Q.day} · ${Q.month} · ${Q.year}</span>
          </span>
        </span>
        <span class="env-pocket"></span>
        <span class="env-flap"></span>
        <span class="env-seal">${s(e.initials)}</span>
      </button>
      <p class="intro-hint">Chạm để mở thiệp</p>
    </div>
  </div>`}function ke(){return`
      <div class="hero-stage" data-tilt="9">
        <div class="hero-float"><div class="hero-photo">
          <span class="layer layer-back" aria-hidden="true"></span>
          <span class="layer layer-mid" aria-hidden="true"></span>
          <div class="layer layer-img">${u(e.heroPhoto,`${e.groom.name} và ${e.bride.name}`,{eager:!0,sizes:`(max-width: 900px) 78vw, 420px`})}</div>
          <span class="layer layer-badge" aria-hidden="true">${C}</span>
          <span class="layer layer-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120"><path id="seal-ring" fill="none" d="M14 60a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/>
              <text><textPath href="#seal-ring" textLength="286" lengthAdjust="spacing">SAVE THE DATE · ${Q.day}.${Q.month}.${Q.year} ·</textPath></text></svg>
            <b>${s(e.initials)}</b>
          </span>
        </div></div>
        ${Ae}
      </div>`}var Ae=Ee([[-6,12,16,0],[104,22,12,1.1],[96,70,18,.5],[-10,64,11,1.7],[50,-6,13,2.2],[8,98,14,.9]]);function je(){let[e,t,n]=[Number(Q.year),Number(Q.month),Number(Q.day)],r=(new Date(Date.UTC(e,t-1,1)).getUTCDay()+6)%7,i=new Date(Date.UTC(e,t,0)).getUTCDate();return`<div class="fold-month"><p>Tháng ${t} · ${e}</p><div class="fold-days">${[...[`T2`,`T3`,`T4`,`T5`,`T6`,`T7`,`CN`].map(e=>`<b>${e}</b>`),...Array(r).fill(`<i></i>`),...Array.from({length:i},(e,t)=>t+1===n?`<i class="on">${C}<span>${n}</span></i>`:`<i>${t+1}</i>`)].join(``)}</div></div>`}function Me(){let t=e.events.find(t=>t.start===e.date)??e.events[e.events.length-1],n=p(t.start),r=[e.groom,e.bride].some(e=>e.parents.length)?`<div class="fold-families">${[[`Nhà trai`,e.groom],[`Nhà gái`,e.bride]].map(([e,t])=>`<p><small>${e}</small>${t.parents.map(s).join(`<br>`)}</p>`).join(``)}</div>`:``,i=`<i class="fold-shade"></i>`;return`
      <div class="hero-stage" role="img" aria-label="${s(`Thiệp cưới ${e.groom.name} và ${e.bride.name}, ${Q.day}.${Q.month}.${Q.year}`)}">
        <div class="hero-float"><div class="fold-move">
          ${Ae}
          <div class="fold-sway"><div class="fold-card" aria-hidden="true">
            <div class="fold-panel fold-b">
              <div class="face fold-main">
                ${r}
                <span class="fold-mono">${s(e.initials)}</span>
                <p class="script">Trân trọng báo tin</p>
                <p class="fold-caps">Lễ thành hôn của</p>
                <p class="fold-person"><small>${s(e.groom.role)}</small>${s(e.groom.fullName)}</p>
                <p class="fold-amp script">&amp;</p>
                <p class="fold-person"><small>${s(e.bride.role)}</small>${s(e.bride.fullName)}</p>
                <div class="fold-date"><span>${s(Q.weekday)}</span><b>${Q.day}</b><span>Tháng ${Q.month}</span><em>${Q.year}</em></div>
                <p class="fold-lunar">${s(e.lunarDate)}</p>
              </div>
            </div>
            <div class="fold-panel fold-c">
              <div class="face fold-details">
                <p class="script">Trân trọng kính mời</p>
                <p class="fold-guest" data-guest>Quý khách</p>
                <p class="fold-small">tới dự bữa tiệc chung vui cùng gia đình chúng tôi</p>
                <p class="fold-caps">${s(t.title)}</p>
                <p class="fold-time">${n.time}</p>
                <p class="fold-small">${s(n.weekday)} · ${n.day}.${n.month}.${n.year}</p>
                <p class="fold-venue">${s(t.place)}<small>${s(t.address)}</small></p>
                ${je()}
                <p class="fold-small fold-thanks">Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi</p>
                ${i}
              </div>
              <div class="face face-back fold-photo">
                ${u(e.heroPhoto,``,{eager:!0,sizes:`(max-width: 900px) 80vw, 400px`})}
                <p class="fold-quote">“${s(e.quote)}”</p>
                ${i}
              </div>
            </div>
            <div class="fold-panel fold-a">
              <div class="face fold-frame fold-booth">
                <span class="fold-window"></span>
                <span class="fold-finder"></span>
                <p class="fold-caps"><i></i>Photo booth</p>
                <p class="script">Cùng chụp một tấm nhé!</p>
                <p class="fold-small">Giơ khung lên &amp; lưu lại khoảnh khắc ngày vui</p>
                ${i}
              </div>
              <div class="face face-back fold-frame fold-cover">
                <span class="fold-window"></span>
                <p class="fold-caps">Save the date</p>
                <p class="script">${s(e.groom.name)} <span>&amp;</span> ${s(e.bride.name)}</p>
                <p class="fold-cover-date">${Q.day} · ${Q.month} · ${Q.year}</p>
                <span class="fold-sprig tl">${w}</span><span class="fold-sprig tr">${w}</span>
                ${i}
              </div>
            </div>
          </div></div>
        </div></div>
      </div>`}function Ne(){let t=_()===`full`,n=`
    <div class="hero-rays" aria-hidden="true"></div>
    <div class="hero-orbit" aria-hidden="true"><i></i><i></i></div>
    ${X(`orn-tr`)}${X(`orn-bl`)}
    <div class="hero-grid">
      <div class="hero-text">
        <p class="eyebrow">Chúng mình sắp cưới</p>
        <h1 class="names">
          <span>${s(e.groom.name)}</span>
          <span class="amp">&amp;</span>
          <span>${s(e.bride.name)}</span>
        </h1>
        <p class="hero-date"><span>${s(Q.weekday)}</span><strong>${Q.day}.${Q.month}.${Q.year}</strong></p>
        <p class="lunar">${s(e.lunarDate)}</p>
      </div>
      ${t?Me():ke()}
    </div>
    ${t?``:`<p class="hero-quote" data-reveal>“${s(e.quote)}”</p>`}
    <a class="scroll-cue" href="#countdown" aria-label="Cuộn xuống"><span></span></a>`;return t?`<section class="hero hero-fold" id="top"><div class="fold-pin">${n}</div></section>`:`<section class="hero" id="top">${n}</section>`}function Pe(){let t=`<span>${s(e.groom.name)}</span>${C}<span>${s(e.bride.name)}</span>${A}<span>${Q.day}.${Q.month}.${Q.year}</span>${A}<span class="script">Save the date</span>${A}`,n=e=>`<div class="ribbon ${e}"><div class="ribbon-track">${t.repeat(10)}</div></div>`;return`<div class="ribbons" aria-hidden="true">${n(`ribbon-a`)}${n(`ribbon-b`)}</div>`}function Fe(){let e=(e,t)=>`<div class="cd-unit"><span class="cd-num" data-cd="${e}">00</span><span class="cd-label">${t}</span></div>`;return`
  <section class="section countdown" id="countdown">
    <span class="cd-dial" aria-hidden="true">${O(new Date().getSeconds())}</span>
    ${Z(`Đếm ngược`,`Đến ngày chung đôi`)}
    <div class="cd-grid" data-reveal>
      ${e(`d`,`Ngày`)}${e(`h`,`Giờ`)}${e(`m`,`Phút`)}${e(`s`,`Giây`)}
    </div>
    <p class="cd-done" hidden>Hôm nay là ngày vui của chúng mình!</p>
  </section>`}function Ie(){let t=p(e.date).time,n=(e,t,n)=>`<i class="pearl" style="--x:${e}%;--y:${t}%;--s:${n}px"></i>`;return`
  <section class="section letter" id="letter">
    ${Z(`Lời mời`,`Gửi những người thương`)}
    <div class="scrap" data-tilt="6">
      <figure class="scrap-polaroid" data-reveal style="--i:0">
        ${u(e.letter.photo,`${e.groom.name} và ${e.bride.name}`,{sizes:`(max-width: 640px) 50vw, 300px`})}
        <figcaption><small>Lời gửi gắm từ</small><span class="script">${s(e.groom.name)} &amp; ${s(e.bride.name)}</span></figcaption>
      </figure>
      <div class="scrap-date" data-reveal style="--i:1">
        <span class="scrap-emboss" aria-hidden="true">${w}</span>
        <span class="scrap-ribbon" aria-hidden="true"><i></i></span>
        <b>${Q.day}</b>
        <span class="script">Tháng ${Number(Q.month)}</span>
        <em>${Q.year}</em>
        <small>Vào lúc ${t}</small>
      </div>
      <div class="scrap-tag" data-reveal style="--i:2">
        <small>Save the date</small>
        <span class="script">${s(e.groom.name)}</span>
        <span class="script">&amp; ${s(e.bride.name)}</span>
      </div>
      <span class="scrap-pearls" data-reveal style="--i:3" aria-hidden="true">${n(-3,6,22)}${n(97,30,16)}${n(44,97,26)}${n(55,92,12)}${n(-5,88,14)}</span>
    </div>
    <article class="scrap-letter" data-reveal>
      ${e.letter.paragraphs.map(e=>`<p>${s(e)}</p>`).join(``)}
      <p class="script scrap-sign">${s(e.groom.name)} &amp; ${s(e.bride.name)}</p>
    </article>
  </section>`}function Le(e,t){let n=e.parents.length?`<p class="parents">${e.parents.map(s).join(`<br>`)}</p>`:``;return`
  <button class="flip-card ${t}" type="button" data-flip data-thread-stop data-reveal aria-pressed="false"
    aria-label="${s(`${e.role} ${e.fullName} — chạm để lật thẻ`)}">
    <span class="flip-inner">
      <span class="flip-face flip-front">
        ${u(e.photo,e.fullName,{sizes:`(max-width: 640px) 80vw, 360px`})}
        <span class="flip-caption"><small>${s(e.role)}</small><strong>${s(e.name)}</strong></span>
      </span>
      <span class="flip-face flip-back">
        <small>${s(e.role)}</small>
        <strong class="script">${s(e.fullName)}</strong>
        ${n}
        <span class="bio">${s(e.bio)}</span>
        <span class="flip-hint">Chạm để lật lại</span>
      </span>
    </span>
  </button>`}function Re(){return`
  <section class="section couple" id="couple">
    <p class="watermark" aria-hidden="true"><span>${`Love · Forever · `.repeat(6)}</span></p>
    ${Z(`Cô dâu & Chú rể`,`Hai nửa yêu thương`)}
    <div class="couple-grid">
      ${Le(e.groom,`groom`)}
      <span class="couple-heart" aria-hidden="true">${C}</span>
      ${Le(e.bride,`bride`)}
    </div>
    <p class="hint-text">Chạm vào thẻ để xem thêm</p>
  </section>`}function ze(){return`
  <section class="section story" id="story">
    ${Z(`Chuyện tình yêu`,`Hành trình của chúng mình`)}
    <ol class="timeline">
      ${e.story.map((e,t)=>`
        <li class="tl-item" data-reveal data-thread-stop=".tl-dot" style="--i:${t}">
          <span class="tl-dot" aria-hidden="true">${C}</span>
          <div class="tl-card">
            <div class="tl-photo">${u(e.photo,e.title,{sizes:`(max-width: 640px) 80vw, 320px`})}</div>
            <div class="tl-body"><h3>${s(e.title)}</h3><p>${s(e.text)}</p></div>
          </div>
        </li>`).join(``)}
    </ol>
  </section>`}function Be(e,t){let n=p(e.start),a=e.mapUrl||`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.place}, ${e.address}`)}`,o=r()?`<button class="btn btn-ghost" type="button" data-ics="${t}" aria-label="Thêm ${s(e.title)} vào lịch (Apple Calendar)">${Y.apple}Thêm vào lịch</button>`:`<a class="btn btn-ghost" href="${i(e)}" target="_blank" rel="noopener" aria-label="Thêm ${s(e.title)} vào lịch (Google Calendar)">${Y.google}Thêm vào lịch</a>`;return`
  <article class="event-card" data-reveal data-thread-stop style="--i:${t}">
    <h3>${s(e.title)}</h3>
    <p class="event-time">${n.time}</p>
    <p class="event-date">${s(n.weekday)}, ${n.day}/${n.month}/${n.year}</p>
    <p class="event-place"><strong>${s(e.place)}</strong>${s(e.address)}</p>
    <div class="event-actions">
      <a class="btn btn-ghost" href="${a}" target="_blank" rel="noopener">${Y.map}Chỉ đường</a>
      ${o}
    </div>
  </article>`}function Ve(){return`
  <section class="section events" id="events">
    <span class="arches" data-draw data-reveal aria-hidden="true">${k}</span>
    ${Z(`Sự kiện`,`Lễ cưới`)}
    <div class="event-grid">${e.events.map(Be).join(``)}</div>
  </section>`}function He(){return`
  <section class="section gallery" id="gallery">
    ${Z(`Album`,`Khoảnh khắc yêu thương`)}
    <div class="cf" data-reveal>
      <div class="cf-track" id="cf-track" tabindex="0" aria-label="Album ảnh cưới, vuốt ngang để xem">
        ${e.gallery.map((e,t)=>`
          <button class="cf-item" type="button" data-index="${t}" aria-label="Xem ảnh ${t+1}">
            ${u(e,`Ảnh cưới ${t+1}`,{sizes:`(max-width: 640px) 68vw, 300px`})}
          </button>`).join(``)}
      </div>
      <button class="cf-nav prev" type="button" data-cf="-1" aria-label="Ảnh trước">${Y.prev}</button>
      <button class="cf-nav next" type="button" data-cf="1" aria-label="Ảnh sau">${Y.next}</button>
    </div>
    <p class="cf-count" aria-live="polite"><span id="cf-current">1</span> / ${e.gallery.length}</p>
  </section>`}function $(e){let t=e.bank,n=`https://img.vietqr.io/image/${encodeURIComponent(t.name.replace(/\s+/g,``))}-${encodeURIComponent(t.number)}-compact2.png?addInfo=Mung%20cuoi&accountName=${encodeURIComponent(t.owner)}`;return`
  <div class="bank-card">
    <p class="bank-role">Mừng ${s(e.role.toLowerCase())}</p>
    <img class="bank-qr" src="${n}" alt="Mã QR chuyển khoản ${s(t.name)}" width="220" height="220" loading="lazy" decoding="async">
    <p class="bank-name">${s(t.name)}</p>
    <p class="bank-owner">${s(t.owner)}</p>
    <button class="btn btn-soft" type="button" data-copy="${s(t.number)}">${Y.copy}${s(t.number)}</button>
  </div>`}function Ue(){return`
  <section class="section gift" id="gift">
    ${Z(`Hộp mừng cưới`,`Gửi yêu thương`)}
    <p class="lead" data-reveal>Sự hiện diện của bạn là món quà quý giá nhất. Nếu muốn gửi thêm lời chúc, bạn có thể mở hộp quà bên dưới.</p>
    <button class="giftbox" id="giftbox" type="button" aria-expanded="false" aria-controls="bank-cards" data-reveal>
      <span class="gb-scene">
        <span class="gb-lid"><span class="gb-bow"></span></span>
        <span class="gb-box"></span>
      </span>
      <span class="gb-label">Chạm để mở quà</span>
    </button>
    <div class="bank-cards" id="bank-cards" hidden>
      ${$(e.groom)}${$(e.bride)}
    </div>
  </section>`}function We(){return`
  <section class="section rsvp" id="rsvp">
    ${Z(`Xác nhận tham dự`,`Bạn sẽ đến chứ?`)}
    <form class="rsvp-form" id="rsvp-form" data-reveal novalidate>
      <span class="stamp" aria-hidden="true">${C}<small>${Q.day}.${Q.month}</small></span>
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
  </section>`}function Ge(){return`
  <footer class="footer">
    <span class="footer-rings" data-draw data-reveal>${T}</span>
    <p class="script">Thank you</p>
    <p class="footer-names">${s(e.groom.name)} &amp; ${s(e.bride.name)}</p>
    <p class="footer-note">Rất hân hạnh được đón tiếp!</p>
  </footer>`}function Ke(){if(!e.themePicker)return``;let t=Object.entries(R).map(([e,t])=>`
      <button class="theme-opt" type="button" data-theme-id="${e}" aria-pressed="false">
        <span class="theme-swatch" aria-hidden="true" style="--a:${t.colors.wine};--b:${t.colors.rose};--c:${t.colors.paper}"></span>${s(t.label)}
      </button>`).join(``);return`
  <button class="theme-btn" id="theme-btn" type="button" aria-label="Đổi màu thiệp" aria-expanded="false" aria-controls="theme-panel">${Y.palette}</button>
  <div class="theme-panel" id="theme-panel" role="group" aria-label="Chọn tông màu" hidden>
    <p class="theme-title">Tông màu</p>${t}
  </div>`}function qe(){return`
  <svg class="paper-motif" aria-hidden="true">
    <defs><pattern id="motif" width="88" height="88" patternUnits="userSpaceOnUse">
      <path d="M22 15q1 6 7 7q-6 1-7 7q-1-6-7-7q6-1 7-7z"/>
      <path d="M66 70c-3.5-2.4-6-4.6-6-7.2 0-1.8 1.3-3 2.9-3 1.3 0 2.4.8 3.1 1.9.7-1.1 1.8-1.9 3.1-1.9 1.6 0 2.9 1.2 2.9 3 0 2.6-2.5 4.8-6 7.2z"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#motif)"/>
  </svg>
  <canvas class="petals" id="petals" aria-hidden="true"></canvas>
  <button class="music-btn" id="music-btn" type="button" aria-label="Bật/tắt nhạc" aria-pressed="false" hidden>
    <span class="vinyl" aria-hidden="true"><span class="vinyl-label">${Y.music}</span></span>
    <span class="tonearm" aria-hidden="true"></span>
  </button>
  <audio id="music" src="${encodeURI(e.music)}" preload="none" loop></audio>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh">
    <img id="lb-img" alt="">
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Đóng">${Y.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="-1" aria-label="Ảnh trước">${Y.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="1" aria-label="Ảnh sau">${Y.next}</button>
  </dialog>
  ${Ke()}
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`}function Je(e){e.innerHTML=`
    ${Oe()}
    <main class="card" id="card" inert>
      ${Ne()}${Pe()}${Fe()}${Ie()}${Re()}${ze()}${Ve()}${He()}${Ue()}${We()}${Ge()}
    </main>
    ${qe()}`}x(),be(),Je(c(`#app`)),te();var Ye=me(),Xe=Se();re(()=>{Ye.start(),Xe.start()}),S(),oe(),ie(),se(),le(),Ce(),o(),pe(),we(),Te(),xe();