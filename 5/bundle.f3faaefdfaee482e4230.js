(()=>{var e={362:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var i=n(354),r=n.n(i),s=n(314),a=n.n(s)()(r());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},354:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(r," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},353:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",r="minute",s="hour",a="day",o="week",c="month",l="quarter",d="year",f="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,c),s=n-r<0,a=t.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:o,d:a,D:f,h:s,m:r,s:i,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=v;var g="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[g])},w=function e(t,n,i){var r;if(!t)return _;if("string"==typeof t){var s=t.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,r=o}return!i&&r&&(_=r),r||!i&&_},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},T=m;T.l=w,T.i=$,T.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function v(e){this.$L=w(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var h=v.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return T},h.isValid=function(){return!(this.$d.toString()===u)},h.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,l=!!T.u(t)||t,u=T.p(e),p=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return l?i:i.endOf(a)},b=function(e,t){return T.w(n.toDate()[e].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,h=this.$M,m=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case d:return l?p(1,0):p(31,11);case c:return l?p(1,h):p(0,h+1);case o:var y=this.$locale().weekStart||0,g=(v<y?v+7:v)-y;return p(l?m-g:m+(6-g),h);case a:case f:return b(_+"Hours",0);case s:return b(_+"Minutes",1);case r:return b(_+"Seconds",2);case i:return b(_+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var o,l=T.p(e),u="set"+(this.$u?"UTC":""),p=(o={},o[a]=u+"Date",o[f]=u+"Date",o[c]=u+"Month",o[d]=u+"FullYear",o[s]=u+"Hours",o[r]=u+"Minutes",o[i]=u+"Seconds",o[n]=u+"Milliseconds",o)[l],b=l===a?this.$D+(t-this.$W):t;if(l===c||l===d){var v=this.clone().set(f,1);v.$d[p](b),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](b);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[T.p(e)]()},h.add=function(n,l){var f,u=this;n=Number(n);var p=T.p(l),b=function(e){var t=M(u);return T.w(t.date(t.date()+Math.round(e*n)),u)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===a)return b(1);if(p===o)return b(7);var v=(f={},f[r]=e,f[s]=t,f[i]=1e3,f)[p]||1,h=this.$d.getTime()+n*v;return T.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=T.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,d=n.meridiem,f=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},p=function(e){return T.s(s%12||12,e,"0")},v=d||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(b,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return T.s(t.$y,4,"0");case"M":return o+1;case"MM":return T.s(o+1,2,"0");case"MMM":return f(n.monthsShort,o,l,3);case"MMMM":return f(l,o);case"D":return t.$D;case"DD":return T.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return f(n.weekdaysMin,t.$W,c,2);case"ddd":return f(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return T.s(s,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return v(s,a,!0);case"A":return v(s,a,!1);case"m":return String(a);case"mm":return T.s(a,2,"0");case"s":return String(t.$s);case"ss":return T.s(t.$s,2,"0");case"SSS":return T.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,f,u){var p,b=this,v=T.p(f),h=M(n),m=(h.utcOffset()-this.utcOffset())*e,_=this-h,y=function(){return T.m(b,h)};switch(v){case d:p=y()/12;break;case c:p=y();break;case l:p=y()/3;break;case o:p=(_-m)/6048e5;break;case a:p=(_-m)/864e5;break;case s:p=_/t;break;case r:p=_/e;break;case i:p=_/1e3;break;default:p=_}return u?p:T.a(p)},h.daysInMonth=function(){return this.endOf(c).$D},h.$locale=function(){return y[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=w(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return T.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},v}(),x=k.prototype;return M.prototype=x,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",a],["$M",c],["$y",d],["$D",f]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,k,M),e.$i=!0),M},M.locale=w,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=y[_],M.Ls=y,M.p={},M}()},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},a=[],o=0;o<e.length;o++){var c=e[o],l=i.base?c[0]+i.base:c[0],d=s[l]||0,f="".concat(l," ").concat(d);s[l]=d+1;var u=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var b=r(p,i);i.byIndex=o,t.splice(o,0,{identifier:f,updater:b,references:1})}a.push(f)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var o=n(s[a]);t[o].references--}for(var c=i(e,r),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={id:i,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof _))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof _&&t instanceof _))throw new Error("Can replace only components");const n=e.element,i=t.element,r=i.parentElement;if(null===r)throw new Error("Parent element doesn't exist");r.replaceChild(n,i)}var i=n(72),r=n.n(i),s=n(825),a=n.n(s),o=n(659),c=n.n(o),l=n(56),d=n.n(l),f=n(540),u=n.n(f),p=n(113),b=n.n(p),v=n(362),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),r()(v.A,h),v.A&&v.A.locals&&v.A.locals;const m="shake";class _{#e=null;constructor(){if(new.target===_)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),e?.()}),600)}}var y=n(353),g=n.n(y);class $ extends _{#t=null;#n=null;#i=null;#r=null;constructor({trip:e,destinations:t,offers:n,onEditClick:i}){super(),this.#t=e,this.#n=t,this.#i=n,this.#r=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s)}get template(){return((e,t,n)=>{const{basePrice:i,dateFrom:r,dateTo:s,destination:a,isFavorite:o,offers:c,type:l}=e,d=n.flatMap((e=>e.offers)).filter((e=>c.includes(e.id))),f=t.find((e=>e.id===a)),u=g()(r),p=g()(s),b=d.map((e=>`\n  <li class="event__offer">\n    <span class="event__offer-title">${e.title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${e.price}</span>\n  </li>\n  `)).join(""),v=d.reduce(((e,t)=>e+t.price),0);return`\n  <li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${u.format("YYYY-MM-DD")}">${u.format("MMM DD")}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${l}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${l.charAt(0).toUpperCase()+l.slice(1)} ${f.name}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="${u.format("YYYY-MM-DDTHH:mm")}">${u.format("HH:mm")}</time>\n        &mdash;\n        <time class="event__end-time" datetime="${p.format("YYYY-MM-DDTHH:mm")}">${p.format("HH:mm")}</time>\n      </p>\n      <p class="event__duration">${function(e,t){let n="";const i=t.diff(e,"day"),r=t.diff(e,"hour")%24,s=t.diff(e,"minute")%60;return i>0&&(n+=`${i}D `),r>0&&(n+=`${r}H `),s>0&&(n+=`${s}M`),n.trim()}(u,p)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${i+v}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">${b}</ul>\n    <button class="event__favorite-btn ${o?"event__favorite-btn--active":""}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n  </li>`})(this.#t,this.#n,this.#i)}removeElement(){super.removeElement(),this.element.querySelector(".event__rollup-btn").removeEventListener("click",this.#s)}#s=e=>{e.preventDefault(),this.#r()}}class w extends _{get template(){return'\n<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n<div class="trip-sort__item  trip-sort__item--day">\n  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n  <label class="trip-sort__btn" for="sort-day">Day</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--event">\n  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n  <label class="trip-sort__btn" for="sort-event">Event</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--time">\n  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n  <label class="trip-sort__btn" for="sort-time">Time</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--price">\n  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n  <label class="trip-sort__btn" for="sort-price">Price</label>\n</div>\n\n<div class="trip-sort__item  trip-sort__item--offer">\n  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n</div>\n</form>'}}class M extends _{get template(){return'\n  <ul class="trip-events__list">\n  \n  </ul> '}}class T extends _{#t=null;#n=null;#i=null;#a=null;#o=null;constructor({trip:e,destinations:t,offers:n,onFormSubmit:i,onFormReset:r}){super(),this.#t=e,this.#n=t,this.#i=n,this.#a=i,this.#o=r,this.element.querySelector(".event--edit").addEventListener("submit",this.#a),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o),this.element.querySelector(".event__reset-btn").addEventListener("click",this.#o)}get template(){return((e,t,n)=>{const{destination:i,type:r,offers:s,isFavorite:a}=e,o=t.find((e=>e.id===i)),c=o.pictures.map((e=>`\n    <img class="event__photo" src="${e.src}" alt="${e.description}">\n  `)).join(""),l=t.map((e=>`\n    <option value="${e.name}" "${o.name===e.name?"selected":""}"></option>\n  `)).join(""),d=n.find((e=>e.type===r)).offers.map(((e,t)=>`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox visually-hidden" id="event-offer-${r}-${t+1}" type="checkbox" name="event-offer-${r}" ${s.includes(e.id)?"checked":""}>\n      <label class="event__offer-label" for="event-offer-${r}-${t+1}">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>\n  `)).join(""),f=n.map(((e,t)=>`\n  <div class="event__type-item">\n   <input id="event-type-${e.type}-${t+1}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.type}" ${r.includes(e.type)?"checked":""}>\n    <label class="event__type-label  event__type-label--${e.type}" for="event-type-${e.type}-${t+1}">${r.charAt(0).toUpperCase()+e.type.slice(1)}</label>\n  </div>\n  `)).join("");return`\n  <li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${r}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${f}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${r}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${o.name}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${l}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${g()("2019-03-19").format("DD/MM/YY HH:mm")}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${g()("2019-03-19").format("DD/MM/YY HH:mm")}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n        <button class="event__favorite-btn ${a?"event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n          <div class="event__available-offers">\n          ${d}\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${o.description}.</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              ${c}\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>\n    </li>`})(this.#t,this.#n,this.#i)}removeElement(){super.removeElement(),this.element.querySelector(".event--edit").removeEventListener("click",this.#c),this.element.querySelector(".event__rollup-btn").removeEventListener("click",this.#l),this.element.querySelector(".event__reset-btn").removeEventListener("click",this.#l)}#c=e=>{e.preventDefault(),this.#a()};#l=e=>{e.preventDefault(),this.#o()}}class k extends AbortController{#d=null;#f=null;constructor({container:e,tripModel:t}){super(),this.#d=e,this.#f=t}init(){const t=[...this.#f.getTrips()],n=[...this.#f.getDestinations()],i=[...this.#f.getOffers()],r=new M;e(r,this.#d),e(new w,this.#d),t.forEach((e=>{this.#u(r,e,n,i)}))}#u(n,i,r,s){const a=e=>{(e=>"Escape"===e.key)(e)&&(e.preventDefault(),l())},o=new $({trip:i,destinations:r,offers:s,onEditClick:()=>(t(c,o),void document.addEventListener("keydown",a))}),c=new T({trip:i,destinations:r,offers:s,onFormSubmit:()=>l(),onFormReset:()=>l()});function l(){t(o,c),document.removeEventListener("keydown",a)}e(o,n.element)}}const x=[{basePrice:1050,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!1,offers:[],type:"flight"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:1100,dateFrom:"2024-05-01T08:30:00.000Z",dateTo:"2024-05-01T09:15:00.000Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"taxi"},{id:"6b7668e0e-07e2-460b-9d33-5c59e075256b",basePrice:980,dateFrom:"2024-05-02T10:00:00.000Z",dateTo:"2024-05-15T15:30:00.000Z",destination:"6b7668e0e-07e2-460b-9d33-5c59e075256b",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31","d2453c57-0886-4c7e-bc12-70b897905759","b93b6bda-86f8-4b54-a113-c8439b5a6f29","af6b8812-08de-4e2d-9792-86c8f781bf66","b4c3e4e6-9053-42ce-b325-e281314baa42"],type:"flight"},{id:"6a2f41a3-ca54-49da-9b23-8a6b932bf418",basePrice:980,dateFrom:"2024-05-07T12:00:00.000Z",dateTo:"2024-05-12T18:25:00.000Z",destination:"7cc0b103-d3c1-44f3-aafb-a947b6ad944b",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31","d2453c57-0886-4c7e-bc12-70b897905759","b93b6bda-86f8-4b54-a113-c8439b5a6f29","af6b8812-08de-4e2d-9792-86c8f781bf66","b4c3e4e6-9053-42ce-b325-e281314baa42"],type:"flight"},{id:"6d54900b-b5d6-4869-8d8b-af3918da0723",basePrice:1230,dateFrom:"2024-05-10T14:30:00.000Z",dateTo:"2024-05-18T20:45:00.000Z",destination:"6a2f41a3-ca54-49da-9b23-8a6b932bf418",isFavorite:!1,offers:["3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a","af6b8812-08de-4e2d-9792-86c8f781bf66","d2453c57-0886-4c7e-bc12-70b897905759"],type:"ship"},{id:"e3f82d52-2c03-41ed-8b30-f2508c72b5d7",basePrice:1460,dateFrom:"2024-05-06T07:45:00.000Z",dateTo:"2024-05-06T10:10:00.000Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!0,offers:[],type:"drive"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",basePrice:1500,dateFrom:"2024-05-02T09:00:00.000Z",dateTo:"2024-05-02T11:30:00.000Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b325-e281314baa42","af6b8812-08de-4e2d-9792-86c8f781bf66"],type:"taxi"},{id:"a3775a18-76f1-46d4-a658-9d028db590a9",basePrice:900,dateFrom:"2024-05-04T14:00:00.000Z",dateTo:"2024-05-04T20:00:00.000Z",destination:"6a2f41a3-ca54-49da-9b23-8a6b932bf418",isFavorite:!1,offers:["3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a","b93b6bda-86f8-4b54-a113-c8439b5a6f29"],type:"check-in"},{id:"62f684b6-a819-4baa-a3d6-cc3d5846c71f",basePrice:1200,dateFrom:"2024-05-05T10:15:00.000Z",dateTo:"2024-05-05T18:45:00.000Z",destination:"6b7668e0e-07e2-460b-9d33-5c59e075256b",isFavorite:!0,offers:["d2453c57-0886-4c7e-bc12-70b897905759","984fd4d8-8d8f-4cef-93bd-001676ad2237"],type:"train"},{id:"e3f82d52-2c03-41ed-8b30-f2508c72b5d7",basePrice:700,dateFrom:"2024-05-06T12:30:00.000Z",dateTo:"2024-05-06T15:00:00.000Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",isFavorite:!1,offers:[],type:"bus"},{id:"fc158cd8-9f73-4fae-9ebc-a507962c67eb",basePrice:1100,dateFrom:"2024-05-07T16:45:00.000Z",dateTo:"2024-05-07T19:00:00.000Z",destination:"7cc0b103-d3c1-44f3-aafb-a947b6ad944b",isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31","b4c3e4e6-9053-42ce-b325-e281314baa42","3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a"],type:"drive"},{id:"7cc0b103-d3c1-44f3-aafb-a947b6ad944b",basePrice:1300,dateFrom:"2024-05-08T08:00:00.000Z",dateTo:"2024-05-08T12:00:00.000Z",destination:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",isFavorite:!1,offers:["57fc2461-435c-43ba-8b8a-e2b0d9e50770","2a8f1cde-9c3f-4c25-a30f-c2625a9b925f","f0b77b49-568c-43d8-b273-634bffec4a15"],type:"ship"},{id:"984fd4d8-8d8f-4cef-93bd-001676ad2237",basePrice:800,dateFrom:"2024-05-09T13:00:00.000Z",dateTo:"2024-05-09T18:00:00.000Z",destination:"6a2f41a3-ca54-49da-9b23-8a6b932bf418",isFavorite:!0,offers:["ca53d02c-249f-434b-8635-8b00788f7af6","af6b8812-08de-4e2d-9792-86c8f781bf66"],type:"sightseeing"}],A=[{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"https://frenchmoments.eu/wp-content/uploads/2012/11/Chamonix-Mont-Blanc-Featured-Image-web-copyright-French-Moments.jpg",description:"Chamonix parliament building"}]},{id:"6a2f41a3-ca54-49da-9b23-8a6b932bf418",description:"Bali is a true traveler’s paradise where you’ll never run out of things to see and do.",name:"Bali",pictures:[{src:"https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Featured-photo-1200x350-Balinese-temple.jpg",description:"Bali building"},{src:"https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Streets-in-Bali-with-traditional-Balinese-penjors.jpg",description:"Bali fest"},{src:"https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Nusa-Dua-beach.jpg",description:"Bali beach"},{src:"https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Waterblow-in-Nusa-Dua.jpg",description:"Nusa Dua"}]},{id:"6b7668e0e-07e2-460b-9d33-5c59e075256b",description:"Tokyo is Japan’s capital and the world’s most populous metropolis",name:"Tokyo",pictures:[{src:"https://media.cntraveler.com/photos/63482b255e7943ad4006df0b/1:1/w_1280,h_1280,c_limit/tokyoGettyImages-1031467664.jpeg",description:"Tokyo street"},{src:"https://media.cntraveler.com/photos/632c8c7f9ae3f06709fbe0a5/16:9/w_640,h_432,c_limit/Fujiyoshida-shi,%20Japan_manuel-cosentino-n--CMLApjfI-unsplash.jpg",description:"Fuji"}]},{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",description:"Seoul is riding a wave of creativity. From fashion to food, architecture to art, the city has become a creative haven for those looking to make their mark",name:"Seoul",pictures:[{src:"https://a.storyblok.com/f/112937/567x464/b521a9ee4b/visit_seoul_web.jpg/m/620x0/filters:quality(70)/",description:"Seoul SkyTower"},{src:"https://static.wixstatic.com/media/0505b9_b332ff9eaf614b5e81e047f305d8cff6~mv2.jpg/v1/fill/w_870,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0505b9_b332ff9eaf614b5e81e047f305d8cff6~mv2.jpg",description:"Korean food"},{src:"https://static.wixstatic.com/media/0505b9_ec32c8a2a7094dcf8854f3ad5283c716~mv2.jpg/v1/fill/w_1218,h_769,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0505b9_ec32c8a2a7094dcf8854f3ad5283c716~mv2.jpg",description:"Gyeongbokgung Palace"}]},{id:"7cc0b103-d3c1-44f3-aafb-a947b6ad944b",description:"Kuala Lumpur is well known as a melting pot of Southeast Asia where many different races and cultures make the city of Kuala Lumpur a vibrant place to visit",name:"Kuala Lumpur",pictures:[{src:"https://i.natgeofe.com/n/9da24954-6d9e-4706-ba30-e2bb28f020b8/caves-kualalumpur-malaysia_3x2.jpg?w=718&h=479",description:"Temple"},{src:"https://i.natgeofe.com/n/5f9cfb59-baa3-4a51-a59b-42a991edde6c/eat_GettyImages-1458151650_ukHR_3x2.jpg?w=718&h=479",description:"Batu Caves"},{src:"https://i.natgeofe.com/n/c42cc644-c2a1-4d41-b26f-d4503d33a748/kualalumpur_3x2.jpeg?w=718&h=479",description:"Beautiful view from the hotel’s roof"}]}],S=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120}]},{type:"bus",offers:[{id:"5a1c2b4c-9045-4d2c-b512-c3fb78cf6d76",title:"Reserved seating",price:50},{id:"9a3c2b4c-4567-4d2c-b512-c3fb78cf6abc",title:"On-board Wi-Fi",price:15}]},{type:"train",offers:[{id:"57fc2461-435c-43ba-8b8a-e2b0d9e50770",title:"Buy out a compartment",price:180},{id:"2a8f1cde-9c3f-4c25-a30f-c2625a9b925f",title:"Transport an animal",price:95},{id:"f0b77b49-568c-43d8-b273-634bffec4a15",title:"Call luggage porters",price:95},{id:"984fd4d8-8d8f-4cef-93bd-001676ad2237",title:"Add train shower",price:15}]},{type:"ship",offers:[{id:"b8f78e4a-339c-4d2f-bf8c-2d6f3469c947",title:"Cabin upgrade",price:250}]},{type:"drive",offers:[{id:"df56s4e8-9e4b-47b3-a11b-83b1d898b021",title:"Full tank pre-purchase",price:60},{id:"af43298c-700b-4732-b200-3d8b8c0f8b30",title:"GPS system",price:70}]},{type:"flight",offers:[{id:"12c3b7ed-8412-417e-8a1a-39771ec73b46",title:"Extra leg room",price:50},{id:"01ab23cd-4567-89ab-cdef-12345efdb678",title:"Window seat",price:30},{id:"23ac68f1-4b8e-4f62-8b4d-ec8e9b5f78ec",title:"Complimentary beverage",price:5}]},{type:"check-in",offers:[{id:"c3f8b7ed-8412-417e-8a1a-39771ec73b47",title:"Priority check-in",price:20}]},{type:"sightseeing",offers:[{id:"e3d8f8ed-8412-417e-8a1a-39771ec73b89",title:"Tour guide",price:150}]},{type:"restaurant",offers:[{id:"b93b6bda-86f8-4b54-a113-c8439b5a6f29",title:"Add hotel breakfast",price:120},{id:"d2453c57-0886-4c7e-bc12-70b897905759",title:"Customize your menu",price:320}]}],F=document.querySelector(".trip-main"),D=document.querySelector(".trip-events"),E=document.querySelector(".trip-controls__filters"),C=new class{constructor(){this.trips=Array.from({length:x.length},(()=>{return(e=x)[Math.floor(Math.random()*e.length)];var e})),this.destinations=A,this.offers=S}getTrips(){return this.trips}getDestinations(){return this.destinations}getOffers(){return this.offers}};e(new class extends _{get template(){return'\n<section class="trip-main__trip-info  trip-info">\n<div class="trip-info__main">\n  <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n  <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n</div>\n\n<p class="trip-info__cost">\n  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n</p>\n</section>'}},F,"afterbegin"),e(new class extends _{get template(){return'\n  <form class="trip-filters" action="#" method="get">\n    <div class="trip-filters__filter">\n      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n      <label class="trip-filters__filter-label" for="filter-future">Future</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n      <label class="trip-filters__filter-label" for="filter-present">Present</label>\n    </div>\n\n    <div class="trip-filters__filter">\n      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n      <label class="trip-filters__filter-label" for="filter-past">Past</label>\n    </div>\n\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>'}},E,"beforebegin"),new k({container:D,tripModel:C}).init()})()})();
//# sourceMappingURL=bundle.f3faaefdfaee482e4230.js.map