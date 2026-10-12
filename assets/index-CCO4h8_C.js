(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={title:`Xuân Tùng & Phương Anh — Thiệp cưới`,description:`Trân trọng kính mời bạn đến chung vui trong ngày trọng đại của chúng mình.`,initials:`T & A`,date:`2027-01-17T12:00:00+07:00`,lunarDate:`Tức ngày 10 tháng 12 năm Bính Ngọ`,heroPhoto:`/photos/couple-15`,quote:`Yêu nhau không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng.`,theme:`hong-kem`,themePicker:!0,music:`https://cdn.jsdelivr.net/gh/saygoodbyethe3-bit/music-hosting/Beautiful in White - Westlife.mp3`,groom:{name:`Xuân Tùng`,fullName:`Cấn Xuân Tùng`,role:`Chú rể`,parents:[],bio:`Người con trai luôn tin rằng hạnh phúc là được nắm tay một người thật lâu.`,photo:`/photos/couple-12`,phone:`0348889995`,bank:{name:`Techcombank`,number:`1312228888`,owner:`CAN XUAN TUNG`}},bride:{name:`Phương Anh`,fullName:`Trần Thị Phương Anh`,role:`Cô dâu`,parents:[],bio:`Cô gái thích hoa, thích nắng và thích mỗi ngày được bình yên bên anh.`,photo:`/photos/couple-13`,bank:{name:`Techcombank`,number:`1312228888`,owner:`CAN XUAN TUNG`}},events:[{title:`Lễ Vu Quy`,start:`2027-01-17T08:00:00+07:00`,durationMin:120,place:`Tư gia nhà gái`,address:`Hải Phòng`},{title:`Lễ Thành Hôn`,start:`2027-01-17T10:00:00+07:00`,durationMin:120,place:`Tư gia nhà trai`,address:`Hải Phòng`},{title:`Tiệc Cưới`,start:`2027-01-17T12:00:00+07:00`,durationMin:180,place:`The Pandora Center Hải Phòng`,address:`12 Võ Nguyên Giáp, Kênh Dương, Lê Chân, Hải Phòng`,mapUrl:`https://www.google.com/maps/search/?api=1&query=The+Pandora+Center,+12+V%C3%B5+Nguy%C3%AAn+Gi%C3%A1p,+K%C3%AAnh+D%C6%B0%C6%A1ng,+L%C3%AA+Ch%C3%A2n,+H%E1%BA%A3i+Ph%C3%B2ng`}],story:[{title:`Lần đầu gặp gỡ`,text:`Một buổi chiều rất bình thường, bỗng trở thành ngày đáng nhớ nhất khi hai ánh mắt chạm nhau.`,photo:`/photos/couple-01`},{title:`Những chuyến đi`,text:`Cùng nhau đi qua biển, qua phố, qua những bữa ăn giản dị — và nhận ra nơi nào có nhau là nhà.`,photo:`/photos/couple-03`},{title:`Lời hứa trọn đời`,text:`Và rồi, chúng mình quyết định viết tiếp câu chuyện này bằng hai chữ: mãi mãi.`,photo:`/photos/couple-14`}],gallery:[`/photos/couple-15`,`/photos/couple-01`,`/photos/couple-02`,`/photos/couple-04`,`/photos/couple-06`,`/photos/couple-07`,`/photos/couple-08`,`/photos/couple-14`,`/photos/couple-05`,`/photos/couple-09`]},t=e=>e.toISOString().replace(/[-:]/g,``).replace(/\.\d{3}/,``),n=e=>e.replace(/\\/g,`\\\\`).replace(/[,;]/g,e=>`\\${e}`).replace(/\n/g,`\\n`);function r(n){let r=new Date(n.start),i=new Date(r.getTime()+n.durationMin*6e4),a=`${n.title} — ${e.groom.name} & ${e.bride.name}`,o=`${n.place}, ${n.address}`,s=`${e.title}\n${n.place}\n${n.address}\n\nTrân trọng kính mời bạn đến chung vui cùng gia đình chúng mình!`;return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:`TEMPLATE`,text:a,dates:`${t(r)}/${t(i)}`,details:s,location:o}).toString()}`}function i(r){let i=e.events[r],a=new Date(i.start),o=new Date(a.getTime()+i.durationMin*6e4),s=`${e.groom.name} & ${e.bride.name}`;return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//lovecard-3d//VI`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`BEGIN:VEVENT`,`UID:${t(a)}-${r}@lovecard-3d`,`DTSTAMP:${t(new Date)}`,`DTSTART:${t(a)}`,`DTEND:${t(o)}`,`SUMMARY:${n(`${i.title} — ${s}`)}`,`DESCRIPTION:${n(`${e.title} — ${i.place}`)}`,`LOCATION:${n(`${i.place}, ${i.address}`)}`,`BEGIN:VALARM`,`TRIGGER:-PT2H`,`ACTION:DISPLAY`,`DESCRIPTION:${n(i.title)}`,`END:VALARM`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`)}function a(){document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-ics]`);if(!n)return;let r=Number(n.dataset.ics);if(isNaN(r)||!e.events[r])return;let a=i(r),o=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1,s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(o&&s){window.location.href=`data:text/calendar;charset=utf-8,`+encodeURIComponent(a);return}let c=new Blob([a],{type:`text/calendar;charset=utf-8`}),l=URL.createObjectURL(c),u=document.createElement(`a`);u.href=l,u.download=`thiep-cuoi-${e.events[r].title.toLowerCase().replace(/\s+/g,`-`)}.ics`,document.body.appendChild(u),u.click(),document.body.removeChild(u),setTimeout(()=>URL.revokeObjectURL(l),1e3)})}var o=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`);function s(e,t=document){let n=t.querySelector(e);if(!n)throw Error(`Missing element: ${e}`);return n}var c=(e,t=document)=>Array.from(t.querySelectorAll(e));function l(e,t,n={}){let{sizes:r=`(max-width: 640px) 90vw, 480px`,eager:i=!1,cls:a=``}=n;return`<img class="${a}" src="${e}-sm.webp" srcset="${e}-sm.webp 480w, ${e}.webp 900w" sizes="${r}"
    alt="${o(t)}" ${i?`fetchpriority="high"`:`loading="lazy"`} decoding="async" draggable="false">`}var u=e=>String(e).padStart(2,`0`),d=`Asia/Ho_Chi_Minh`;function f(e){let t=new Date(e),n=e=>new Intl.DateTimeFormat(`vi-VN`,{timeZone:d,...e}).format(t),[r,i,a]=n({day:`2-digit`,month:`2-digit`,year:`numeric`}).split(`/`);return{day:r,month:i,year:a,weekday:n({weekday:`long`}),time:n({hour:`2-digit`,minute:`2-digit`,hour12:!1})}}function p(){if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)return`reduced`;let e=navigator,t=(e.hardwareConcurrency??8)<=4,n=(e.deviceMemory??8)<=3;return t||n||e.connection?.saveData?`lite`:`full`}var m=p(),h=new Set,g=()=>m,_=()=>matchMedia(`(hover: hover) and (pointer: fine)`).matches;function ee(e){h.add(e)}function te(){m===`full`&&(m=`lite`,v(),h.forEach(e=>e(m)))}function v(){let e=document.documentElement;e.classList.toggle(`lite`,m!==`full`),e.classList.toggle(`reduced`,m===`reduced`)}function y(){let t=new Date(e.date).getTime(),n=Object.fromEntries(c(`[data-cd]`).map(e=>[e.dataset.cd,e])),r=g()!==`reduced`&&`animate`in Element.prototype,i=0,a=(e,t)=>{let i=n[e];i.textContent!==t&&(i.textContent=t,r&&!document.hidden&&i.animate([{transform:`rotateX(-90deg)`,opacity:0},{transform:`rotateX(0)`,opacity:1}],{duration:420,easing:`cubic-bezier(.2,.8,.2,1.2)`}))},o=()=>{let e=Math.max(0,t-Date.now()),n=Math.floor(e/1e3);a(`d`,u(Math.floor(n/86400))),a(`h`,u(Math.floor(n%86400/3600))),a(`m`,u(Math.floor(n%3600/60))),a(`s`,u(n%60)),e===0&&(clearInterval(i),s(`.cd-done`).hidden=!1)};o(),i=window.setInterval(o,1e3)}var b=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.6 1.3 4 2.2.4-.9 1.8-2.2 4-2.2 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z"/></svg>`,x=`
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
</svg>`,S=`
<svg class="rings" viewBox="0 0 124 84" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 54a26 26 0 1 0 52 0a26 26 0 1 0-52 0"/>
  <path d="M54 54a26 26 0 1 0 52 0a26 26 0 1 0-52 0"/>
  <path d="M80 28l-6-7 3-4h6l3 4z"/>
  <path d="M80 8V2M92 12l4-4M68 12l-4-4"/>
</svg>`,C=e=>`<path d="M100 62Q114 38 100 14Q86 38 100 62z" transform="rotate(${e*30} 100 100)"/><path d="M100 22l4 7-4 7-4-7z" transform="rotate(${e*30+15} 100 100)"/>`,w=`
<svg class="medallion-art" viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".6" stroke-linejoin="round">
  <path d="M3 100a97 97 0 1 0 194 0a97 97 0 1 0-194 0"/>
  <path d="M8 100a92 92 0 1 0 184 0a92 92 0 1 0-184 0"/>
  ${Array.from({length:12},(e,t)=>C(t)).join(``)}
  <path d="M66 100a34 34 0 1 0 68 0a34 34 0 1 0-68 0"/>
</svg>`,T=e=>{let t=e*Math.PI/30,[n,r]=e%5?[86,92]:[78,92],i=e=>`${(100+e*Math.sin(t)).toFixed(1)} ${(100-e*Math.cos(t)).toFixed(1)}`;return`M${i(n)}L${i(r)}`},E=e=>`
<svg viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round">
  <path stroke-width=".6" d="M2 100a98 98 0 1 0 196 0a98 98 0 1 0-196 0M30 100a70 70 0 1 0 140 0a70 70 0 1 0-140 0"/>
  <path stroke-width="1" d="${Array.from({length:60},(e,t)=>T(t)).join(``)}"/>
  <path class="dial-hand" stroke-width="1.2" d="M100 112V16M97 100a3 3 0 1 0 6 0a3 3 0 1 0-6 0" style="animation-delay:-${e}s"/>
</svg>`,ne=`
<svg viewBox="0 0 300 300" aria-hidden="true" fill="none" stroke="currentColor" stroke-width=".8">
  <path d="M20 300V150a130 130 0 0 1 260 0V300"/>
  <path d="M44 300V150a106 106 0 0 1 212 0V300"/>
  <path d="M68 300V150a82 82 0 0 1 164 0V300"/>
  <path d="M150 20V4M150 4l-4 6M150 4l4 6"/>
</svg>`,D=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/></svg>`;function re(){for(let e of c(`[data-draw]`))c(`path`,e).forEach((e,t)=>{e.style.setProperty(`--len`,String(Math.ceil(e.getTotalLength())+1)),e.style.setProperty(`--k`,String(t))})}function ie(e){if(g()===`reduced`||!(`animate`in Element.prototype))return;let{left:t,top:n,width:r,height:i}=e.getBoundingClientRect(),a=t+r/2,o=n+i/2,s=g()===`full`?26:14;for(let e=0;e<s;e++){let t=document.createElement(`span`),n=e%3==0;t.className=`burst ${n?`burst-heart`:`burst-spark`}`,t.innerHTML=n?b:D,t.style.left=`${a}px`,t.style.top=`${o}px`,document.body.append(t);let r=e/s*Math.PI*2+Math.random()*.5,i=90+Math.random()*150,c=Math.cos(r)*i,l=Math.sin(r)*i-40,u=.6+Math.random()*.8,d=(Math.random()-.5)*240;t.animate([{transform:`translate(-50%, -50%) scale(0)`,opacity:1},{transform:`translate(calc(-50% + ${c*.7}px), calc(-50% + ${l*.7}px)) scale(${u}) rotate(${d*.6}deg)`,opacity:1,offset:.55},{transform:`translate(calc(-50% + ${c}px), calc(-50% + ${l+60}px)) scale(${u*.6}) rotate(${d}deg)`,opacity:0}],{duration:1200+Math.random()*600,easing:`cubic-bezier(.2,.8,.3,1)`,delay:Math.random()*120}).onfinish=()=>t.remove()}}function ae(){let e=new URLSearchParams(location.search).get(`to`)?.trim();e&&(s(`#guest-name`).textContent=e.slice(0,60))}function oe(e){ae();let t=s(`#intro`),n=s(`#envelope`),r=s(`#card`);document.body.classList.add(`locked`),history.scrollRestoration=`manual`,scrollTo(0,0);let i=g()===`reduced`,a=!1;n.addEventListener(`click`,()=>{a||(a=!0,e(),ie(s(`.env-seal`,n)),t.classList.add(`opening`),window.setTimeout(()=>{t.classList.add(`opened`),r.inert=!1,document.body.classList.remove(`locked`),r.classList.add(`shown`)},i?0:1500),window.setTimeout(()=>t.remove(),i?400:2400))})}function se(){for(let e of c(`[data-flip]`))e.addEventListener(`click`,()=>{let t=e.classList.toggle(`flipped`);e.setAttribute(`aria-pressed`,String(t))})}function ce(){let e=s(`#cf-track`),t=c(`.cf-item`,e),n=s(`#cf-current`),r=[],i=1,a=0,o=0,l=()=>{i=t[0].offsetWidth||1,r=t.map(e=>e.offsetLeft+e.offsetWidth/2),u()},u=()=>{o=0;let s=e.scrollLeft+e.clientWidth/2,c=0;t.forEach((e,t)=>{let n=Math.max(-3,Math.min(3,(r[t]-s)/i));e.style.setProperty(`--d`,n.toFixed(3)),e.style.setProperty(`--ad`,Math.abs(n).toFixed(3)),e.style.zIndex=String(10-Math.round(Math.abs(n)*2)),Math.abs(n)<Math.abs((r[c]-s)/i)&&(c=t)}),c!==a&&(a=c,n.textContent=String(c+1))},d=n=>{let i=Math.max(0,Math.min(t.length-1,n));e.scrollTo({left:r[i]-e.clientWidth/2,behavior:`smooth`})};e.addEventListener(`scroll`,()=>o||(o=requestAnimationFrame(u)),{passive:!0}),new ResizeObserver(l).observe(e),c(`[data-cf]`).forEach(e=>e.addEventListener(`click`,()=>d(a+Number(e.dataset.cf)))),e.addEventListener(`keydown`,e=>{if(e.key===`ArrowRight`)d(a+1);else if(e.key===`ArrowLeft`)d(a-1);else return;e.preventDefault()});let f=O(d);t.forEach((e,t)=>e.addEventListener(`click`,()=>t===a?f.open(t):d(t)))}function O(t){let n=s(`#lightbox`),r=s(`#lb-img`),i=e.gallery,a=0,o=e=>{a=(e+i.length)%i.length,r.src=`${i[a]}.webp`,r.alt=`Ảnh cưới ${a+1}`,t(a)};n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-lb]`);t?t.dataset.lb===`close`?n.close():o(a+Number(t.dataset.lb)):e.target===n&&n.close()}),n.addEventListener(`keydown`,e=>{e.key===`ArrowRight`&&o(a+1),e.key===`ArrowLeft`&&o(a-1)});let c=0;return n.addEventListener(`pointerdown`,e=>c=e.clientX),n.addEventListener(`pointerup`,e=>{let t=e.clientX-c;Math.abs(t)>45&&o(a+(t<0?1:-1))}),{open(e){o(e),n.showModal()}}}var k=0;function A(e){let t=s(`#toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(k),k=window.setTimeout(()=>t.classList.remove(`show`),2600)}async function j(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.cssText=`position:fixed;opacity:0;top:0`,document.body.append(t),t.select();let n=document.execCommand(`copy`);return t.remove(),n}}function M(){let e=s(`#giftbox`),t=s(`#bank-cards`);e.addEventListener(`click`,()=>{e.classList.contains(`open`)||(e.classList.add(`open`),e.setAttribute(`aria-expanded`,`true`),window.setTimeout(()=>{t.hidden=!1,requestAnimationFrame(()=>t.classList.add(`in`))},g()===`reduced`?0:650))});for(let e of c(`[data-copy]`))e.addEventListener(`click`,async()=>{A(await j(e.dataset.copy)?`Đã sao chép số tài khoản`:`Không sao chép được, bạn vui lòng ghi lại nhé`)})}var N=`http://www.w3.org/2000/svg`,P=240;function le(){let e=s(`#card`),t=c(`.card > .section`),n=s(`.footer`,e);if(!t.length)return;let r=document.createElementNS(N,`svg`);r.classList.add(`thread`),r.setAttribute(`aria-hidden`,`true`);let i=document.createElementNS(N,`path`);r.append(i);let a=document.createElement(`span`);a.className=`thread-tip`,a.setAttribute(`aria-hidden`,`true`),a.innerHTML=b,e.prepend(r,a);let o=g()!==`reduced`,l=0,u=[],d=0,f=()=>{let r=e.clientWidth,a=Math.min(48,Math.max(8,r*.025)),s=r/2,c=[...t.map(e=>e.offsetTop),n.offsetTop],d=`M${s} ${c[0]}`;for(let e=0;e<c.length-1;e++){let[t,n]=[c[e],c[e+1]],i=e%2?r-a:a,o=Math.min(56,(n-t)/4);d+=`C${i} ${t} ${i} ${t} ${i} ${t+o}L${i} ${n-o}C${i} ${n} ${i} ${n} ${s} ${n}`}i.setAttribute(`d`,d),l=i.getTotalLength(),u=Array.from({length:241},(e,t)=>i.getPointAtLength(l*t/P).y),o&&(i.style.strokeDasharray=`${l}`)},p=()=>{d=0;let t=innerHeight*.62-e.getBoundingClientRect().top,n=u.findIndex(e=>e>=t),r=l;if(n===0)r=0;else if(n>0){let e=u[n]-u[n-1]||1;r=l*(n-1+(t-u[n-1])/e)/P}i.style.strokeDashoffset=`${l-r}`;let o=i.getPointAtLength(r);a.style.transform=`translate3d(${o.x}px, ${o.y}px, 0)`,a.classList.toggle(`on`,r>0&&r<l)},m=()=>{d||(d=requestAnimationFrame(p))};new ResizeObserver(()=>{f(),o&&m()}).observe(e),o&&addEventListener(`scroll`,m,{passive:!0})}function ue(){let e=s(`#music`),t=s(`#music-btn`),n=!1,r=()=>{let n=!e.paused;t.classList.toggle(`playing`,n),t.setAttribute(`aria-pressed`,String(n))};e.addEventListener(`play`,r),e.addEventListener(`pause`,r);let i=()=>{n=!0,e.volume=.6,e.play().catch(()=>{n=!1,r()})};return t.addEventListener(`click`,()=>{e.paused?i():(n=!1,e.pause())}),document.addEventListener(`visibilitychange`,()=>{document.hidden?e.pause():n&&e.play().catch(()=>{})}),{start(){t.hidden=!1,i()}}}var F={"hong-kem":{label:`Hồng kem`,colors:{ivory:`#fbf5ee`,paper:`#fffaf5`,blush:`#f6e1dc`,rose:`#d98b9b`,roseDeep:`#b75a6e`,wine:`#6e2a3a`,gold:`#c7a05a`,ink:`#3d2b2f`,muted:`#86706f`},petals:[`#f4b6c2`,`#f8d3da`,`#e89aab`,`#fbe4d0`]},"xanh-la-trang":{label:`Xanh lá trắng`,colors:{ivory:`#f6faf5`,paper:`#ffffff`,blush:`#e2eee1`,rose:`#8db898`,roseDeep:`#4c8a5f`,wine:`#2c5a40`,gold:`#b89a5a`,ink:`#25342b`,muted:`#6b7c70`},petals:[`#cde6d1`,`#e9f4ea`,`#a6cdb0`,`#fffdf4`]},"do-kem":{label:`Đỏ kem`,colors:{ivory:`#f8efe2`,paper:`#fffaf0`,blush:`#f2dcc5`,rose:`#cc6a5e`,roseDeep:`#a8322d`,wine:`#7a1a1d`,gold:`#c39a4f`,ink:`#3e2620`,muted:`#8a6f62`},petals:[`#e7897f`,`#f3c9b6`,`#d65a52`,`#f7e6cc`]},"do-trang":{label:`Đỏ trắng`,colors:{ivory:`#fdfafa`,paper:`#ffffff`,blush:`#f8e3e3`,rose:`#e0626a`,roseDeep:`#c4161c`,wine:`#8e0e14`,gold:`#c9a24a`,ink:`#2e1d1e`,muted:`#7f6a6b`},petals:[`#e8505b`,`#f4a3aa`,`#c4161c`,`#fde3e5`]},"hong-trang":{label:`Hồng trắng`,colors:{ivory:`#fff8fa`,paper:`#ffffff`,blush:`#fde6ee`,rose:`#ef98b4`,roseDeep:`#dc5d88`,wine:`#a33862`,gold:`#d4b07a`,ink:`#3f2a33`,muted:`#8c7480`},petals:[`#f9c4d5`,`#fde0ea`,`#f4a6c0`,`#ffffff`]},"hong-do":{label:`Hồng đỏ`,colors:{ivory:`#fff4f5`,paper:`#fffafb`,blush:`#fbd9df`,rose:`#ef6f8a`,roseDeep:`#d6334f`,wine:`#9b1b30`,gold:`#d1a256`,ink:`#3b1f26`,muted:`#8b6870`},petals:[`#f58ca0`,`#fbc1cc`,`#e0405e`,`#ffe3e8`]},"xanh-navy":{label:`Xanh navy`,colors:{ivory:`#f6f8fb`,paper:`#ffffff`,blush:`#e2e8f2`,rose:`#8fa6c8`,roseDeep:`#3f5f8f`,wine:`#1f3358`,gold:`#c2a15e`,ink:`#1e2738`,muted:`#6b7689`},petals:[`#c9d6ea`,`#e8eef7`,`#a8bbd9`,`#fffaf0`]},"tim-lavender":{label:`Tím lavender`,colors:{ivory:`#faf7fc`,paper:`#ffffff`,blush:`#ece3f4`,rose:`#b39ad0`,roseDeep:`#8a63b3`,wine:`#553a7a`,gold:`#c9a86a`,ink:`#2f2638`,muted:`#7e7189`},petals:[`#d9c8ee`,`#efe6f8`,`#c3a9e2`,`#fff7fb`]}},I=e=>!!e&&Object.hasOwn(F,e),L=`lovecard-theme`,R={ivory:`--ivory`,paper:`--paper`,blush:`--blush`,rose:`--rose`,roseDeep:`--rose-deep`,wine:`--wine`,gold:`--gold`,ink:`--ink`,muted:`--muted`},z=e=>{let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]},B=e=>`#${e.map(e=>Math.round(e).toString(16).padStart(2,`0`)).join(``)}`,V=(e,t,n)=>[0,1,2].map(r=>e[r]+(t[r]-e[r])*n);function H(e){let[t,n,r,i,a]=[e.rose,e.blush,e.wine,e.gold,e.ink].map(z),o=[0,0,0],s=V(i,z(`#fff3d6`),.45),c=V(r,o,.3),l={"--gold-light":B(s),"--gold-ribbon":B(V(i,[255,255,255],.2)),"--wine-light":B(V(r,z(e.roseDeep),.25)),"--wine-dark":B(c),"--line":B(V(n,z(e.muted),.15))};for(let e=20;e<=80;e+=10)l[`--tint-${e}`]=B(V(n,t,e/100));let u={wine:r,rose:t,gold:i,ink:a,"gold-light":s,"wine-dark":c,shade:V(r,o,.75)};for(let[e,t]of Object.entries(u))l[`--${e}-rgb`]=t.map(Math.round).join(`, `);return l}var U=new Set,W=e.theme,de=()=>F[W];function fe(e){U.add(e)}function pe(){try{return localStorage.getItem(L)}catch{return null}}function me(){let t=new URLSearchParams(location.search).get(`theme`);if(I(t))return t;let n=pe();return e.themePicker&&I(n)?n:e.theme}function G(e){W=e;let t=document.documentElement,{colors:n}=F[e];for(let e of Object.keys(R))t.style.setProperty(R[e],n[e]);for(let[e,r]of Object.entries(H(n)))t.style.setProperty(e,r);t.dataset.theme=e,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,n.ivory),U.forEach(t=>t(F[e]))}function he(){G(me())}function K(){let e=document.querySelector(`#theme-btn`);if(!e)return;let t=s(`#theme-panel`),n=c(`[data-theme-id]`,t),r=()=>n.forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.themeId===W))),i=n=>{t.hidden=!n,e.setAttribute(`aria-expanded`,String(n))};e.addEventListener(`click`,()=>i(!!t.hidden)),t.addEventListener(`click`,e=>{let t=e.target.closest(`[data-theme-id]`)?.dataset.themeId;if(I(t)){G(t);try{localStorage.setItem(L,t)}catch{}r()}}),document.addEventListener(`click`,e=>{!t.hidden&&!e.target.closest(`#theme-btn, #theme-panel`)&&i(!1)}),document.addEventListener(`keydown`,n=>{n.key===`Escape`&&!t.hidden&&(i(!1),e.focus())}),r()}function q(e){return e.map(e=>{let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`);n.translate(32,32);let r=n.createLinearGradient(0,-28,0,28);return r.addColorStop(0,e),r.addColorStop(1,`#ffffff`),n.fillStyle=r,n.beginPath(),n.moveTo(0,-28),n.bezierCurveTo(22,-20,20,14,0,28),n.bezierCurveTo(-20,14,-22,-20,0,-28),n.fill(),t})}function ge(){if(g()===`reduced`)return{start(){}};let e=s(`#petals`),t=e.getContext(`2d`);if(!t)return{start(){}};let n=q(de().petals);fe(e=>n=q(e.petals));let r=[],i=0,a=0,o=1,c=0,l=0,u=!1,d={frames:0,total:0},f=()=>{let e=Math.min(1,innerWidth*innerHeight/1024e3);return Math.round((g()===`full`?28:10)*(.55+.45*e))},p=e=>({x:Math.random()*i,y:e?Math.random()*a:-30,size:10+Math.random()*12,vy:28+Math.random()*38,vx:-8+Math.random()*16,sway:Math.random()*Math.PI*2,swaySpeed:.6+Math.random()*1.1,rot:Math.random()*Math.PI*2,vr:-1+Math.random()*2,flip:Math.random()*Math.PI*2,vf:1.5+Math.random()*2.5,sprite:Math.floor(Math.random()*n.length)}),m=()=>{o=Math.min(devicePixelRatio||1,g()===`full`?1.5:1),i=innerWidth,a=innerHeight,e.width=Math.round(i*o),e.height=Math.round(a*o);let t=f();for(r=r.slice(0,t);r.length<t;)r.push(p(!0))},h=s=>{c=requestAnimationFrame(h);let u=Math.min(.05,(s-(l||s))/1e3);l=s,d.frames<150&&u>0&&(d.frames++,d.total+=u,d.frames===150&&d.total/150>1/40&&te()),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,e.width,e.height);for(let e of r){e.sway+=e.swaySpeed*u,e.y+=e.vy*u,e.x+=(e.vx+Math.sin(e.sway)*22)*u,e.rot+=e.vr*u,e.flip+=e.vf*u,(e.y>a+30||e.x<-40||e.x>i+40)&&Object.assign(e,p(!1));let r=e.size/64*o,s=Math.cos(e.flip),c=Math.cos(e.rot),l=Math.sin(e.rot);t.globalAlpha=.55+.35*Math.abs(s),t.setTransform(c*r*s,l*r*s,-l*r,c*r,e.x*o,e.y*o),t.drawImage(n[e.sprite],-32,-32)}},_=()=>{!u||c||document.hidden||(l=0,c=requestAnimationFrame(h))},v=()=>{cancelAnimationFrame(c),c=0};document.addEventListener(`visibilitychange`,()=>document.hidden?v():_());let y=0;return addEventListener(`resize`,()=>{clearTimeout(y),y=window.setTimeout(m,150)}),ee(m),{start(){u=!0,m(),e.classList.add(`on`),_()}}}function _e(){let t=s(`#rsvp-form`),n=s(`.form-error`,t),r=e.groom.phone??``,i=()=>{let r=new FormData(t),i=String(r.get(`name`)??``).trim();if(!i)return n.textContent=`Bạn cho chúng mình biết tên nhé!`,n.hidden=!1,t.querySelector(`[name=name]`).focus(),null;n.hidden=!0;let a=r.get(`attend`)===`yes`,o=t.querySelector(`[name=guests]`).selectedOptions[0].text,s=String(r.get(`wish`)??``).trim();return[`Xác nhận dự cưới ${e.groom.name} & ${e.bride.name}`,`Tên: ${i}`,a?`Tham dự: Có (${o})`:`Tham dự: Rất tiếc, không đến được`,s&&`Lời chúc: ${s}`].filter(Boolean).join(`
`)};t.addEventListener(`submit`,e=>{e.preventDefault();let t=i();t&&(location.href=`sms:${r}?&body=${encodeURIComponent(t)}`,A(`Cảm ơn bạn đã phản hồi!`))}),s(`[data-zalo]`,t).addEventListener(`click`,async()=>{let e=i();e&&(A(await j(e)?`Đã sao chép lời nhắn — dán vào Zalo nhé!`:`Mở Zalo để gửi lời nhắn nhé!`),window.open(`https://zalo.me/${r}`,`_blank`,`noopener`))})}function ve(){let e=s(`.timeline`);if(g()===`reduced`||!(`IntersectionObserver`in window))return;let t=0,n=()=>{t=0;let n=e.getBoundingClientRect(),r=Math.min(1,Math.max(0,(innerHeight*.65-n.top)/n.height));e.style.setProperty(`--p`,r.toFixed(3))},r=()=>{t||(t=requestAnimationFrame(n))};e.style.setProperty(`--p`,`0`),new IntersectionObserver(([e])=>{e.isIntersecting?(addEventListener(`scroll`,r,{passive:!0}),n()):removeEventListener(`scroll`,r)}).observe(e)}function ye(){let e=c(`[data-reveal]`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`in`));return}let t=new IntersectionObserver(e=>{for(let n of e)n.isIntersecting&&(n.target.classList.add(`in`),t.unobserve(n.target))},{rootMargin:`0px 0px -8% 0px`,threshold:.12});e.forEach(e=>t.observe(e))}function be(){if(g()===`full`&&_())for(let e of c(`[data-tilt]`)){let t=Number(e.dataset.tilt)||10,n=0,r=0,i=0,a=()=>{n=0,e.style.setProperty(`--rx`,`${(-i*t).toFixed(2)}deg`),e.style.setProperty(`--ry`,`${(r*t).toFixed(2)}deg`)};e.addEventListener(`pointermove`,t=>{let o=e.getBoundingClientRect();r=(t.clientX-o.left)/o.width-.5,i=(t.clientY-o.top)/o.height-.5,n||(n=requestAnimationFrame(a))}),e.addEventListener(`pointerleave`,()=>{r=i=0,n||(n=requestAnimationFrame(a))})}}var J={map:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>`,cal:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm-2 8h14v10H5V10z"/></svg>`,apple:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.09.65-2.73 1.4-.56.64-1.04 1.7-1.01 2.74 1.07.08 2.12-.52 2.73-1.27z"/></svg>`,google:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/></svg>`,copy:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h11a2 2 0 0 1 2 2v11h-2V5H8V3zM4 7h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 2v11h11V9H4z"/></svg>`,music:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18.5a3.5 3.5 0 1 1-2-3.2V5l12-2v12.5a3.5 3.5 0 1 1-2-3.2V7.4l-8 1.3v9.8z"/></svg>`,prev:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 5.4 14 4l-8 8 8 8 1.4-1.4L8.8 12z"/></svg>`,next:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 5.4 10 4l8 8-8 8-1.4-1.4 6.6-6.6z"/></svg>`,palette:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4A5.6 5.6 0 0 0 23 9.8C23 5.5 18.1 2 12 2zM6.5 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`,close:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6 10.6 12 5 6.4z"/></svg>`},xe=e=>`
  <span class="twinkles" aria-hidden="true">${e.map(([e,t,n,r])=>`<i style="--x:${e}%;--y:${t}%;--s:${n}px;--t:${r}s">${D}</i>`).join(``)}</span>`,Y=e=>`<span class="orn ${e}" data-draw aria-hidden="true">${x}</span>`;function Se(e){let t=0;return e.normalize(`NFC`).split(` `).map(e=>`<span class="word">${Array.from(e,e=>`<span class="ch" style="--c:${t++}">${o(e)}</span>`).join(``)}</span>`).join(` `)}var X=(e,t)=>`
  <header class="sec-head" data-reveal>
    <p class="script">${o(e)}</p>
    <h2 aria-label="${o(t)}"><span aria-hidden="true">${Se(t)}</span></h2>
    <span class="divider" aria-hidden="true">${b}</span>
  </header>`,Z=f(e.date);function Ce(){return`
  <div class="intro" id="intro">
    <span class="medallion" data-draw aria-hidden="true">${w}</span>
    ${Y(`orn-tl`)}${Y(`orn-br`)}
    <div class="intro-inner">
      <p class="intro-guest">Trân trọng kính mời<strong id="guest-name">Quý khách</strong></p>
      <button class="envelope" id="envelope" type="button" aria-label="Mở thiệp cưới">
        <span class="env-back"></span>
        <span class="env-letter">
          <span class="letter-inner">
            <span class="script">Save the date</span>
            <span class="letter-names">${o(e.groom.name)} <em>&amp;</em> ${o(e.bride.name)}</span>
            <span class="letter-date">${Z.day} · ${Z.month} · ${Z.year}</span>
          </span>
        </span>
        <span class="env-pocket"></span>
        <span class="env-flap"></span>
        <span class="env-seal">${o(e.initials)}</span>
      </button>
      <p class="intro-hint">Chạm để mở thiệp</p>
    </div>
  </div>`}function we(){return`
  <section class="hero" id="top">
    <div class="hero-rays" aria-hidden="true"></div>
    <div class="hero-orbit" aria-hidden="true"><i></i><i></i></div>
    ${Y(`orn-tr`)}${Y(`orn-bl`)}
    <div class="hero-grid">
      <div class="hero-text">
        <p class="eyebrow">Chúng mình sắp cưới</p>
        <h1 class="names">
          <span>${o(e.groom.name)}</span>
          <span class="amp">&amp;</span>
          <span>${o(e.bride.name)}</span>
        </h1>
        <p class="hero-date"><span>${o(Z.weekday)}</span><strong>${Z.day}.${Z.month}.${Z.year}</strong></p>
        <p class="lunar">${o(e.lunarDate)}</p>
      </div>
      <div class="hero-stage" data-tilt="9">
        <div class="hero-float"><div class="hero-photo">
          <span class="layer layer-back" aria-hidden="true"></span>
          <span class="layer layer-mid" aria-hidden="true"></span>
          <div class="layer layer-img">${l(e.heroPhoto,`${e.groom.name} và ${e.bride.name}`,{eager:!0,sizes:`(max-width: 900px) 78vw, 420px`})}</div>
          <span class="layer layer-badge" aria-hidden="true">${b}</span>
          <span class="layer layer-seal" aria-hidden="true">
            <svg viewBox="0 0 120 120"><path id="seal-ring" fill="none" d="M14 60a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/>
              <text><textPath href="#seal-ring" textLength="286" lengthAdjust="spacing">SAVE THE DATE · ${Z.day}.${Z.month}.${Z.year} ·</textPath></text></svg>
            <b>${o(e.initials)}</b>
          </span>
        </div></div>
        ${xe([[-6,12,16,0],[104,22,12,1.1],[96,70,18,.5],[-10,64,11,1.7],[50,-6,13,2.2],[8,98,14,.9]])}
      </div>
    </div>
    <p class="hero-quote" data-reveal>“${o(e.quote)}”</p>
    <a class="scroll-cue" href="#countdown" aria-label="Cuộn xuống"><span></span></a>
  </section>`}function Te(){let t=`<span>${o(e.groom.name)}</span>${b}<span>${o(e.bride.name)}</span>${D}<span>${Z.day}.${Z.month}.${Z.year}</span>${D}<span class="script">Save the date</span>${D}`,n=e=>`<div class="ribbon ${e}"><div class="ribbon-track">${t.repeat(10)}</div></div>`;return`<div class="ribbons" aria-hidden="true">${n(`ribbon-a`)}${n(`ribbon-b`)}</div>`}function Ee(){let e=(e,t)=>`<div class="cd-unit"><span class="cd-num" data-cd="${e}">00</span><span class="cd-label">${t}</span></div>`;return`
  <section class="section countdown" id="countdown">
    <span class="cd-dial" aria-hidden="true">${E(new Date().getSeconds())}</span>
    ${X(`Đếm ngược`,`Đến ngày chung đôi`)}
    <div class="cd-grid" data-reveal>
      ${e(`d`,`Ngày`)}${e(`h`,`Giờ`)}${e(`m`,`Phút`)}${e(`s`,`Giây`)}
    </div>
    <p class="cd-done" hidden>Hôm nay là ngày vui của chúng mình!</p>
  </section>`}function Q(e,t){let n=e.parents.length?`<p class="parents">${e.parents.map(o).join(`<br>`)}</p>`:``;return`
  <button class="flip-card ${t}" type="button" data-flip data-reveal aria-pressed="false"
    aria-label="${o(`${e.role} ${e.fullName} — chạm để lật thẻ`)}">
    <span class="flip-inner">
      <span class="flip-face flip-front">
        ${l(e.photo,e.fullName,{sizes:`(max-width: 640px) 80vw, 360px`})}
        <span class="flip-caption"><small>${o(e.role)}</small><strong>${o(e.name)}</strong></span>
      </span>
      <span class="flip-face flip-back">
        <small>${o(e.role)}</small>
        <strong class="script">${o(e.fullName)}</strong>
        ${n}
        <span class="bio">${o(e.bio)}</span>
        <span class="flip-hint">Chạm để lật lại</span>
      </span>
    </span>
  </button>`}function De(){return`
  <section class="section couple" id="couple">
    <p class="watermark" aria-hidden="true"><span>${`Love · Forever · `.repeat(6)}</span></p>
    ${X(`Cô dâu & Chú rể`,`Hai nửa yêu thương`)}
    <div class="couple-grid">
      ${Q(e.groom,`groom`)}
      <span class="couple-heart" aria-hidden="true">${b}</span>
      ${Q(e.bride,`bride`)}
    </div>
    <p class="hint-text">Chạm vào thẻ để xem thêm</p>
  </section>`}function Oe(){return`
  <section class="section story" id="story">
    ${X(`Chuyện tình yêu`,`Hành trình của chúng mình`)}
    <ol class="timeline">
      ${e.story.map((e,t)=>`
        <li class="tl-item" data-reveal style="--i:${t}">
          <span class="tl-dot" aria-hidden="true">${b}</span>
          <div class="tl-card">
            <div class="tl-photo">${l(e.photo,e.title,{sizes:`(max-width: 640px) 80vw, 320px`})}</div>
            <div class="tl-body"><h3>${o(e.title)}</h3><p>${o(e.text)}</p></div>
          </div>
        </li>`).join(``)}
    </ol>
  </section>`}function ke(e,t){let n=f(e.start),i=e.mapUrl||`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.place}, ${e.address}`)}`,a=r(e);return`
  <article class="event-card" data-reveal style="--i:${t}">
    <h3>${o(e.title)}</h3>
    <p class="event-time">${n.time}</p>
    <p class="event-date">${o(n.weekday)}, ${n.day}/${n.month}/${n.year}</p>
    <p class="event-place"><strong>${o(e.place)}</strong>${o(e.address)}</p>
    <div class="event-actions">
      <a class="btn btn-ghost btn-map" href="${i}" target="_blank" rel="noopener">${J.map}Chỉ đường</a>
      <div class="cal-actions">
        <button class="btn btn-ghost btn-cal" type="button" data-ics="${t}" aria-label="Thêm vào Apple Calendar (iPhone / iOS)">
          ${J.apple}Apple (iOS)
        </button>
        <a class="btn btn-ghost btn-cal" href="${a}" target="_blank" rel="noopener" aria-label="Thêm vào Google Calendar (Android)">
          ${J.google}Google (Android)
        </a>
      </div>
    </div>
  </article>`}function Ae(){return`
  <section class="section events" id="events">
    <span class="arches" data-draw data-reveal aria-hidden="true">${ne}</span>
    ${X(`Sự kiện`,`Lễ cưới`)}
    <div class="event-grid">${e.events.map(ke).join(``)}</div>
  </section>`}function je(){return`
  <section class="section gallery" id="gallery">
    ${X(`Album`,`Khoảnh khắc yêu thương`)}
    <div class="cf" data-reveal>
      <div class="cf-track" id="cf-track" tabindex="0" aria-label="Album ảnh cưới, vuốt ngang để xem">
        ${e.gallery.map((e,t)=>`
          <button class="cf-item" type="button" data-index="${t}" aria-label="Xem ảnh ${t+1}">
            ${l(e,`Ảnh cưới ${t+1}`,{sizes:`(max-width: 640px) 68vw, 300px`})}
          </button>`).join(``)}
      </div>
      <button class="cf-nav prev" type="button" data-cf="-1" aria-label="Ảnh trước">${J.prev}</button>
      <button class="cf-nav next" type="button" data-cf="1" aria-label="Ảnh sau">${J.next}</button>
    </div>
    <p class="cf-count" aria-live="polite"><span id="cf-current">1</span> / ${e.gallery.length}</p>
  </section>`}function $(e){let t=e.bank,n=`https://img.vietqr.io/image/${encodeURIComponent(t.name.replace(/\s+/g,``))}-${encodeURIComponent(t.number)}-compact2.png?addInfo=Mung%20cuoi&accountName=${encodeURIComponent(t.owner)}`;return`
  <div class="bank-card">
    <p class="bank-role">Mừng ${o(e.role.toLowerCase())}</p>
    <img class="bank-qr" src="${n}" alt="Mã QR chuyển khoản ${o(t.name)}" width="220" height="220" loading="lazy" decoding="async">
    <p class="bank-name">${o(t.name)}</p>
    <p class="bank-owner">${o(t.owner)}</p>
    <button class="btn btn-soft" type="button" data-copy="${o(t.number)}">${J.copy}${o(t.number)}</button>
  </div>`}function Me(){return`
  <section class="section gift" id="gift">
    ${X(`Hộp mừng cưới`,`Gửi yêu thương`)}
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
  </section>`}function Ne(){return`
  <section class="section rsvp" id="rsvp">
    ${X(`Xác nhận tham dự`,`Bạn sẽ đến chứ?`)}
    <form class="rsvp-form" id="rsvp-form" data-reveal novalidate>
      <span class="stamp" aria-hidden="true">${b}<small>${Z.day}.${Z.month}</small></span>
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
  </section>`}function Pe(){return`
  <footer class="footer">
    <span class="footer-rings" data-draw data-reveal>${S}</span>
    <p class="script">Thank you</p>
    <p class="footer-names">${o(e.groom.name)} &amp; ${o(e.bride.name)}</p>
    <p class="footer-note">Rất hân hạnh được đón tiếp!</p>
  </footer>`}function Fe(){if(!e.themePicker)return``;let t=Object.entries(F).map(([e,t])=>`
      <button class="theme-opt" type="button" data-theme-id="${e}" aria-pressed="false">
        <span class="theme-swatch" aria-hidden="true" style="--a:${t.colors.wine};--b:${t.colors.rose};--c:${t.colors.paper}"></span>${o(t.label)}
      </button>`).join(``);return`
  <button class="theme-btn" id="theme-btn" type="button" aria-label="Đổi màu thiệp" aria-expanded="false" aria-controls="theme-panel">${J.palette}</button>
  <div class="theme-panel" id="theme-panel" role="group" aria-label="Chọn tông màu" hidden>
    <p class="theme-title">Tông màu</p>${t}
  </div>`}function Ie(){return`
  <svg class="paper-motif" aria-hidden="true">
    <defs><pattern id="motif" width="88" height="88" patternUnits="userSpaceOnUse">
      <path d="M22 15q1 6 7 7q-6 1-7 7q-1-6-7-7q6-1 7-7z"/>
      <path d="M66 70c-3.5-2.4-6-4.6-6-7.2 0-1.8 1.3-3 2.9-3 1.3 0 2.4.8 3.1 1.9.7-1.1 1.8-1.9 3.1-1.9 1.6 0 2.9 1.2 2.9 3 0 2.6-2.5 4.8-6 7.2z"/>
    </pattern></defs>
    <rect width="100%" height="100%" fill="url(#motif)"/>
  </svg>
  <canvas class="petals" id="petals" aria-hidden="true"></canvas>
  <button class="music-btn" id="music-btn" type="button" aria-label="Bật/tắt nhạc" aria-pressed="false" hidden>${J.music}</button>
  <audio id="music" src="${encodeURI(e.music)}" preload="none" loop></audio>
  <dialog class="lightbox" id="lightbox" aria-label="Xem ảnh">
    <img id="lb-img" alt="">
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Đóng">${J.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="-1" aria-label="Ảnh trước">${J.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="1" aria-label="Ảnh sau">${J.next}</button>
  </dialog>
  ${Fe()}
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`}function Le(e){e.innerHTML=`
    ${Ce()}
    <main class="card" id="card" inert>
      ${we()}${Te()}${Ee()}${De()}${Oe()}${Ae()}${je()}${Me()}${Ne()}${Pe()}
    </main>
    ${Ie()}`}v(),he(),Le(s(`#app`)),re();var Re=ue(),ze=ge();oe(()=>{Re.start(),ze.start()}),y(),se(),ce(),M(),_e(),a(),ve(),le(),ye(),be(),K();