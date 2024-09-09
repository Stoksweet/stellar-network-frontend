"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(y,f,i)=>{i.d(f,{c:()=>c});var g=i(4261),d=i(1086),a=i(8607);const c=(o,s)=>{let e,n;const v=(l,E,u)=>{if(typeof document>"u")return;const p=document.elementFromPoint(l,E);p&&s(p)&&!p.disabled?p!==e&&(t(),r(p,u)):t()},r=(l,E)=>{e=l,n||(n=e);const u=e;(0,g.w)(()=>u.classList.add("ion-activated")),E()},t=(l=!1)=>{if(!e)return;const E=e;(0,g.w)(()=>E.classList.remove("ion-activated")),l&&n!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>v(l.currentX,l.currentY,d.a),onMove:l=>v(l.currentX,l.currentY,d.b),onEnd:()=>{t(!0),(0,d.h)(),n=void 0}})}},8438:(y,f,i)=>{i.d(f,{g:()=>d});var g=i(8476);const d=()=>{if(void 0!==g.w)return g.w.Capacitor}},5572:(y,f,i)=>{i.d(f,{c:()=>g,i:()=>d});const g=(a,c,o)=>"function"==typeof o?o(a,c):"string"==typeof o?a[o]===c[o]:Array.isArray(c)?c.includes(a):a===c,d=(a,c,o)=>void 0!==a&&(Array.isArray(a)?a.some(s=>g(s,c,o)):g(a,c,o))},3351:(y,f,i)=>{i.d(f,{g:()=>g});const g=(s,e,n,v,r)=>a(s[1],e[1],n[1],v[1],r).map(t=>d(s[0],e[0],n[0],v[0],t)),d=(s,e,n,v,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*n*r+3*n+v*r))-s*Math.pow(r-1,3),a=(s,e,n,v,r)=>o((v-=r)-3*(n-=r)+3*(e-=r)-(s-=r),3*n-6*e+3*s,3*e-3*s,s).filter(l=>l>=0&&l<=1),o=(s,e,n,v)=>{if(0===s)return((s,e,n)=>{const v=e*e-4*s*n;return v<0?[]:[(-e+Math.sqrt(v))/(2*s),(-e-Math.sqrt(v))/(2*s)]})(e,n,v);const r=(3*(n/=s)-(e/=s)*e)/3,t=(2*e*e*e-9*e*n+27*(v/=s))/27;if(0===r)return[Math.pow(-t,1/3)];if(0===t)return[Math.sqrt(-r),-Math.sqrt(-r)];const l=Math.pow(t/2,2)+Math.pow(r/3,3);if(0===l)return[Math.pow(t/2,.5)-e/3];if(l>0)return[Math.pow(-t/2+Math.sqrt(l),1/3)-Math.pow(t/2+Math.sqrt(l),1/3)-e/3];const E=Math.sqrt(Math.pow(-r/3,3)),u=Math.acos(-t/(2*Math.sqrt(Math.pow(-r/3,3)))),p=2*Math.pow(E,1/3);return[p*Math.cos(u/3)-e/3,p*Math.cos((u+2*Math.PI)/3)-e/3,p*Math.cos((u+4*Math.PI)/3)-e/3]}},7464:(y,f,i)=>{i.d(f,{i:()=>g});const g=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,f,i)=>{i.r(f),i.d(f,{startFocusVisible:()=>c});const g="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=o=>{let s=[],e=!0;const n=o?o.shadowRoot:document,v=o||document.body,r=M=>{s.forEach(_=>_.classList.remove(g)),M.forEach(_=>_.classList.add(g)),s=M},t=()=>{e=!1,r([])},l=M=>{e=a.includes(M.key),e||r([])},E=M=>{if(e&&void 0!==M.composedPath){const _=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));r(_)}},u=()=>{n.activeElement===v&&r([])};return n.addEventListener("keydown",l),n.addEventListener("focusin",E),n.addEventListener("focusout",u),n.addEventListener("touchstart",t,{passive:!0}),n.addEventListener("mousedown",t),{destroy:()=>{n.removeEventListener("keydown",l),n.removeEventListener("focusin",E),n.removeEventListener("focusout",u),n.removeEventListener("touchstart",t),n.removeEventListener("mousedown",t)},setFocus:r}}},1086:(y,f,i)=>{i.d(f,{I:()=>d,a:()=>e,b:()=>n,c:()=>s,d:()=>r,h:()=>v});var g=i(8438),d=function(t){return t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT",t}(d||{});const c={getEngine(){const t=(0,g.g)();if(null!=t&&t.isPluginAvailable("Haptics"))return t.Plugins.Haptics},available(){if(!this.getEngine())return!1;const l=(0,g.g)();return"web"!==(null==l?void 0:l.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(t){const l=this.getEngine();l&&l.impact({style:t.style})},notification(t){const l=this.getEngine();l&&l.notification({type:t.type})},selection(){this.impact({style:d.Light})},selectionStart(){const t=this.getEngine();t&&t.selectionStart()},selectionChanged(){const t=this.getEngine();t&&t.selectionChanged()},selectionEnd(){const t=this.getEngine();t&&t.selectionEnd()}},o=()=>c.available(),s=()=>{o()&&c.selection()},e=()=>{o()&&c.selectionStart()},n=()=>{o()&&c.selectionChanged()},v=()=>{o()&&c.selectionEnd()},r=t=>{o()&&c.impact(t)}},909:(y,f,i)=>{i.d(f,{I:()=>s,a:()=>r,b:()=>o,c:()=>E,d:()=>p,f:()=>t,g:()=>v,i:()=>n,p:()=>u,r:()=>M,s:()=>l});var g=i(467),d=i(4920),a=i(4929);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,n=_=>"ION-CONTENT"===_.tagName,v=function(){var _=(0,g.A)(function*(m){return n(m)?(yield new Promise(w=>(0,d.c)(m,w)),m.getScrollElement()):m});return function(w){return _.apply(this,arguments)}}(),r=_=>_.querySelector(s)||_.querySelector(e),t=_=>_.closest(e),l=(_,m)=>n(_)?_.scrollToTop(m):Promise.resolve(_.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),E=(_,m,w,O)=>n(_)?_.scrollByPoint(m,w,O):Promise.resolve(_.scrollBy({top:w,left:m,behavior:O>0?"smooth":"auto"})),u=_=>(0,a.b)(_,o),p=_=>{if(n(_)){const w=_.scrollY;return _.scrollY=!1,w}return _.style.setProperty("overflow","hidden"),!0},M=(_,m)=>{n(_)?_.scrollY=m:_.style.removeProperty("overflow")}},3992:(y,f,i)=>{i.d(f,{a:()=>g,b:()=>E,c:()=>e,d:()=>u,e:()=>P,f:()=>s,g:()=>p,h:()=>a,i:()=>d,j:()=>h,k:()=>D,l:()=>n,m:()=>t,n:()=>M,o:()=>r,p:()=>o,q:()=>c,r:()=>C,s:()=>L,t:()=>l,u:()=>w,v:()=>O,w:()=>v,x:()=>_,y:()=>m});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,f,i)=>{i.d(f,{c:()=>c,g:()=>o});var g=i(8476),d=i(4920),a=i(4929);const c=(e,n,v)=>{let r,t;if(void 0!==g.w&&"MutationObserver"in g.w){const p=Array.isArray(n)?n:[n];r=new MutationObserver(M=>{for(const _ of M)for(const m of _.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&p.includes(m.slot))return v(),void(0,d.r)(()=>l(m))}),r.observe(e,{childList:!0,subtree:!0})}const l=p=>{var M;t&&(t.disconnect(),t=void 0),t=new MutationObserver(_=>{v();for(const m of _)for(const w of m.removedNodes)w.nodeType===Node.ELEMENT_NODE&&w.slot===n&&u()}),t.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},u=()=>{t&&(t.disconnect(),t=void 0)};return{destroy:()=>{r&&(r.disconnect(),r=void 0),u()}}},o=(e,n,v)=>{const r=null==e?0:e.toString().length,t=s(r,n);if(void 0===v)return t;try{return v(r,n)}catch(l){return(0,a.a)("Exception in provided `counterFormatter`.",l),t}},s=(e,n)=>`${e} / ${n}`},1622:(y,f,i)=>{i.r(f),i.d(f,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>C,keyboardDidClose:()=>_,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>r,setKeyboardClose:()=>u,setKeyboardOpen:()=>E,startKeyboardAssist:()=>t,trackViewportChanges:()=>O});var g=i(4379);i(8438),i(8476);const c="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},n={},v=!1;const r=()=>{e={},n={},v=!1},t=h=>{if(g.K.getEngine())l(h);else{if(!h.visualViewport)return;n=C(h.visualViewport),h.visualViewport.onresize=()=>{O(h),p()||M(h)?E(h):_(h)&&u(h)}}},l=h=>{h.addEventListener("keyboardDidShow",D=>E(h,D)),h.addEventListener("keyboardDidHide",()=>u(h))},E=(h,D)=>{m(h,D),v=!0},u=h=>{w(h),v=!1},p=()=>!v&&e.width===n.width&&(e.height-n.height)*n.scale>150,M=h=>v&&!_(h),_=h=>v&&n.height===h.innerHeight,m=(h,D)=>{const P=new CustomEvent(c,{detail:{keyboardHeight:D?D.keyboardHeight:h.innerHeight-n.height}});h.dispatchEvent(P)},w=h=>{const D=new CustomEvent(o);h.dispatchEvent(D)},O=h=>{e=Object.assign({},n),n=C(h.visualViewport)},C=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(y,f,i)=>{i.d(f,{K:()=>c,a:()=>a});var g=i(8438),d=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(d||{}),a=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(a||{});const c={getEngine(){const o=(0,g.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==d.Unimplemented)throw s}):Promise.resolve(void 0)}}},4731:(y,f,i)=>{i.d(f,{c:()=>s});var g=i(467),d=i(8476),a=i(4379);const c=e=>{if(void 0===d.d||e===a.a.None||void 0===e)return null;const n=d.d.querySelector("ion-app");return null!=n?n:d.d.body},o=e=>{const n=c(e);return null===n?0:n.clientHeight},s=function(){var e=(0,g.A)(function*(n){let v,r,t,l;const E=function(){var m=(0,g.A)(function*(){const w=yield a.K.getResizeMode(),O=void 0===w?void 0:w.mode;v=()=>{void 0===l&&(l=o(O)),t=!0,u(t,O)},r=()=>{t=!1,u(t,O)},null==d.w||d.w.addEventListener("keyboardWillShow",v),null==d.w||d.w.addEventListener("keyboardWillHide",r)});return function(){return m.apply(this,arguments)}}(),u=(m,w)=>{n&&n(m,p(w))},p=m=>{if(0===l||l===o(m))return;const w=c(m);return null!==w?new Promise(O=>{const h=new ResizeObserver(()=>{w.clientHeight===l&&(h.disconnect(),O())});h.observe(w)}):void 0};return yield E(),{init:E,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",v),null==d.w||d.w.removeEventListener("keyboardWillHide",r),v=r=void 0},isKeyboardVisible:()=>t}});return function(v){return e.apply(this,arguments)}}()},7838:(y,f,i)=>{i.d(f,{c:()=>d});var g=i(467);const d=()=>{let a;return{lock:function(){var o=(0,g.A)(function*(){const s=a;let e;return a=new Promise(n=>e=n),void 0!==s&&(yield s),e});return function(){return o.apply(this,arguments)}}()}}},9001:(y,f,i)=>{i.d(f,{c:()=>a});var g=i(8476),d=i(4920);const a=(c,o,s)=>{let e;const n=()=>!(void 0===o()||void 0!==c.label||null===s()),r=()=>{const l=o();if(void 0===l)return;if(!n())return void l.style.removeProperty("width");const E=s().scrollWidth;if(0===E&&null===l.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==e)return;const u=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(r(),u.disconnect(),e=void 0)},{threshold:.01,root:c});u.observe(l)}else l.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{n()&&(0,d.r)(()=>{r()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,f,i)=>{i.d(f,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(a,c,o)=>{const s=a*c/o-a+"ms",e=2*Math.PI*c/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(a,c,o)=>{const s=c/o,e=a*s-a+"ms",n=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,c,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":a*c/o-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*c+(c<o/2?180:-180)}deg)`,"animation-delay":a*c/o-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,c,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/o-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,c,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/o-a+"ms"}})}}},7166:(y,f,i)=>{i.r(f),i.d(f,{createSwipeBackGesture:()=>o});var g=i(4920),d=i(7464),a=i(8607);i(1970);const o=(s,e,n,v,r)=>{const t=s.ownerDocument.defaultView;let l=(0,d.i)(s);const u=w=>l?-w.deltaX:w.deltaX;return(0,a.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w=>(l=(0,d.i)(s),(w=>{const{startX:C}=w;return l?C>=t.innerWidth-50:C<=50})(w)&&e()),onStart:n,onMove:w=>{const C=u(w)/t.innerWidth;v(C)},onEnd:w=>{const O=u(w),C=t.innerWidth,h=O/C,D=(w=>l?-w.velocityX:w.velocityX)(w),P=D>=0&&(D>.2||O>C/2),A=(P?1-h:h)*C;let x=0;if(A>5){const k=A/Math.abs(D);x=Math.min(k,540)}r(P,h<=0?.01:(0,g.j)(0,h,.9999),x)}})}},2935:(y,f,i)=>{i.d(f,{w:()=>g});const g=(c,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(n=>{s(d(n,o))});return e.observe(c,{childList:!0,subtree:!0}),e},d=(c,o)=>{let s;return c.forEach(e=>{for(let n=0;n<e.addedNodes.length;n++)s=a(e.addedNodes[n],o)||s}),s},a=(c,o)=>{if(1!==c.nodeType)return;const s=c;return(s.tagName===o.toUpperCase()?[s]:Array.from(s.querySelectorAll(o))).find(n=>n.value===s.value)}},1307:(y,f,i)=>{i.d(f,{S:()=>o});var g=i(177),d=i(4341),a=i(4742),c=i(3953);let o=(()=>{var s;class e{}return(s=e).\u0275fac=function(v){return new(v||s)},s.\u0275mod=c.$C({type:s}),s.\u0275inj=c.G2t({imports:[g.MD,d.YN,a.bv]}),e})()},5499:(y,f,i)=>{i.d(f,{J:()=>s});var g=i(467),d=i(3953),a=i(9967),c=i(6713),o=i(4742);let s=(()=>{var e;class n{constructor(r,t,l){this.auth=r,this.alertCtrl=t,this.modalCtrl=l,this.db=(0,d.WQX)(a._7)}getResources(){var r=this;return(0,g.A)(function*(){let t=[],l=[];const E=(0,a.rJ)(r.db,"nodes"),u=(0,a.P)(E,(0,a._M)("userId","==",r.auth.user.uid));t=(yield(0,a.GG)(u)).docs;const p=(0,a.rJ)(r.db,"workloads"),M=(0,a.P)(p,(0,a._M)("userId","==",r.auth.user.uid));return l=(yield(0,a.GG)(M)).docs,[...t,...l]})()}activateStargazerProviders(){return(0,g.A)(function*(){const r=window.stargazer;if(!r)throw new Error("Unable to get wallet provider, is stargazer installed?");if(!("getProvider"in r))throw new Error("This seems like a really old version of stargazer");const t=r.getProvider("ethereum");yield t.activate();const l=r.getProvider("constellation");return yield l.activate(),{ethProvider:t,dagProvider:l}})()}conect(){var r=this;return(0,g.A)(function*(){const{ethProvider:t,dagProvider:l}=yield r.activateStargazerProviders(),E=yield t.request({method:"eth_accounts",params:[]}),u=yield l.request({method:"dag_accounts",params:[]});console.log("Stargazer wallet accounts: ",E,u);const p=(0,a.H9)(r.db,`users/${r.auth.user.uid}`);(0,a.BN)(p,{accounts:{ethAccounts:E,dagAccounts:u}},{merge:!0})})()}signWorkloadData(r){var t=this;return(0,g.A)(function*(){t.modalCtrl.dismiss(),t.alertCtrl.create({header:"Workload Signed Successfully",message:"We have successfully signed your workload data!"}).then(u=>u.present()).catch(u=>console.log(u)),console.log("Adding Workload to DB");const l=(0,a.rJ)(t.db,"workloads");(0,a.gS)(l,{code:r,userId:t.auth.user.uid}).then(()=>{t.alertCtrl.create({header:"Workload added successfully!",message:"Your workload is running on Stellar Network!"}).then(u=>u.present()).catch(u=>console.log(u))}).catch(u=>console.log(u))})()}signNodeData(r){var t=this;return(0,g.A)(function*(){t.modalCtrl.dismiss(),t.alertCtrl.create({header:"Node Signed Successfully",message:"We have successfully signed your node data!"}).then(u=>u.present()).catch(u=>console.log(u)),console.log("Adding Node to DB");const l=(0,a.rJ)(t.db,"nodes");(0,a.gS)(l,{nodeInfo:r,userId:t.auth.user.uid}).then(()=>{t.alertCtrl.create({header:"Node added successfully!",message:"Your node has been added to Stellar Network!"}).then(u=>u.present()).catch(u=>console.log(u))}).catch(u=>console.log(u))})()}}return(e=n).\u0275fac=function(r){return new(r||e)(d.KVO(c.u),d.KVO(o.hG),d.KVO(o.W3))},e.\u0275prov=d.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),n})()}}]);