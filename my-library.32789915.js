!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var i=r("dNYR7"),a=r("ghnK3");function s(e){const t=e.map((e=>{return`<li class="film__item" id="${e.id}"><a class="film__item__link">\n                ${n=e.poster_path,r=e.name,i=e.title,n?`<img src=" ${a=n,`https://www.themoviedb.org/t/p/w500${a}`}" alt="${r||i}" loading="lazy" />`:""}\n                <h2>${function(e){if(e)return e.length>=32?e.substr(0,25)+"...":e}(e.title||e.name)}</h2>\n                <p> ${function(e){const t=[];if(c.map((n=>{for(const r of e)n.id===r&&t.push(n.name)})),t.length>=2){const e=t.slice(0,2);return e[2]="Other",e}return"Other"}(e.genres)} | ${t=e.release_date,t?t.split("-")[0]:"2022"}</p>\n                <button class="film__trailer-btn" type="button">Trailer <span class="film__trailer-btn">&#9654;</span></button>\n              </a>\n            </li>`;var t,n,r,i,a})).join("");p.cardHolderLibrary.innerHTML=t}r("dCfNN");const c=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var o=r("aYvV9"),d=r("jcFG7");const l=document.querySelector(".empty__page"),u=document.querySelector(".empty__page-text");let m=1;const y=18;function _(e=0){e&&(m=e),l.classList.add("is-hidden"),u.classList.add("is-hidden"),(0,o.spiner)();const t=JSON.parse(localStorage.getItem("movies-watched"));(null==t?void 0:t.length)?b(t):(l.classList.remove("is-hidden"),u.classList.remove("is-hidden"),(0,o.spinerRemove)())}function h(e=0){e&&(m=e),l.classList.add("is-hidden"),u.classList.add("is-hidden"),(0,o.spiner)();const t=JSON.parse(localStorage.getItem("movies-queue"));(null==t?void 0:t.length)?b(t):(l.classList.remove("is-hidden"),u.classList.remove("is-hidden"),(0,o.spinerRemove)())}function b(e){let t=null;e.length<=y&&(s(e),(0,o.spinerRemove)()),t=e.length%y?Math.floor(e.length/y)+1:e.length/y,m===t?(s(e.slice(m*y-y,e.length)),(0,o.spinerRemove)()):(s(e.slice(m*y-y,m*y)),(0,o.spinerRemove)()),(0,d.getPagination)(m,t,!0)}o=r("aYvV9");var g=r("3ozO0"),L=r("1Gwk9"),f=r("dWD7p");const p={body:document.querySelector("body"),cardHolderLibrary:document.querySelector(".card-holder"),footerLink:document.querySelector(".footer__link"),stickyHeaderMyLibrary:document.querySelector(".js-my-library-header__sticky"),watchedBtn:document.querySelector(".js-watched"),queuedBtn:document.querySelector(".js-queue"),watchedBtnSticky:document.querySelector(".js-watched__sticky"),queuedBtnSticky:document.querySelector(".js-queue__sticky"),movieModal:document.querySelector(".js-movie-modal"),pagination:document.querySelector(".pagination__container")},v=(window.onscroll=function(){window.pageYOffset>200?p.stickyHeaderMyLibrary.classList.add("my-library-header__sticky"):p.stickyHeaderMyLibrary.classList.remove("my-library-header__sticky")},new(0,i.default));function S(e){e.target.classList.contains("my-library-header__button--current")||(p.watchedBtn.classList.add("my-library-header__button--current"),p.queuedBtn.classList.remove("my-library-header__button--current"),p.watchedBtnSticky.classList.add("my-library-header__button--current"),p.queuedBtnSticky.classList.remove("my-library-header__button--current"),p.cardHolderLibrary.innerHTML="",_(1))}function q(e){e.target.classList.contains("my-library-header__button--current")||(p.queuedBtn.classList.add("my-library-header__button--current"),p.watchedBtn.classList.remove("my-library-header__button--current"),p.queuedBtnSticky.classList.add("my-library-header__button--current"),p.watchedBtnSticky.classList.remove("my-library-header__button--current"),p.cardHolderLibrary.innerHTML="",h(1))}p.footerLink.addEventListener("click",a.onOpenTeamModal),p.cardHolderLibrary.addEventListener("click",(function(e){if(e.target===e.currentTarget)return;if(e.target.classList.contains("film__trailer-btn"))return g.default.showTrailer(e.target.closest("li").id);v.movieId=e.target.closest("li").id,(0,o.spiner)(),v.fetchById().then((e=>{(0,L.showModal)(e.data),(0,o.spinerRemove)()}))})),p.watchedBtn.addEventListener("click",S),p.queuedBtn.addEventListener("click",q),p.movieModal.addEventListener("click",(function(e){if(e.target.classList.contains("add-watched")&&p.watchedBtn.classList.contains("my-library-header__button--current")){const e=p.cardHolderLibrary.children.length;p.cardHolderLibrary.innerHTML="",_(Number(document.querySelector(".pagination__item--current")&&1===e?document.querySelector(".pagination__item--current").id-1:0))}if(e.target.classList.contains("add-queue")&&p.queuedBtn.classList.contains("my-library-header__button--current")){const e=p.cardHolderLibrary.children.length;p.cardHolderLibrary.innerHTML="",h(Number(document.querySelector(".pagination__item--current")&&1===e?document.querySelector(".pagination__item--current").id-1:0))}})),p.watchedBtnSticky.addEventListener("click",S),p.queuedBtnSticky.addEventListener("click",q),p.pagination.addEventListener("click",(function(e){if(e.target===e.currentTarget||"UL"===e.target.nodeName)return;let t=null;if("svg"===e.target.nodeName||"BUTTON"===e.target.nodeName||"path"===e.target.nodeName)if(e.target.closest("button").classList.contains("pagination__left-btn")&&e.target.closest("button").classList.contains("on"))t=Number(document.querySelector(".pagination__item--current").id)-1;else{if(!e.target.closest("button").classList.contains("pagination__right-btn")||!e.target.closest("button").classList.contains("on"))return;t=Number(document.querySelector(".pagination__item--current").id)+1}else{if(isNaN(e.target.closest("li").id))return"..."===e.target.closest("li").id?v.query?successPages(1,1):successPages(1):void 0;t=Number(e.target.closest("li").id)}p.watchedBtn.classList.contains("my-library-header__button--current")?((0,f.onSubmitScroll)(),_(t)):((0,f.onSubmitScroll)(),h(t))})),_()}();
//# sourceMappingURL=my-library.32789915.js.map
