var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i=n("cTOKP"),a=n("baGT8");n("1iCTa"),n("9OeKo");var o=n("iVxrX");function c(e){f.cardHolderLibrary.innerHTML=e.map((({id:e,poster_path:t,name:r,title:n,release_date:i,genres:a,original_language:c})=>`<li class="film__item" id="${e}"><a class="film__item__link">\n                ${(0,o.getMarkupImgPoster)(c,t,r,n)}\n                <h2>${(0,o.getShortName)(n||r)}</h2>\n                <p> ${(0,o.getGenresByID)(a)} | ${(0,o.getYear)(i)}</p>\n                <button class="film__trailer-btn" type="button">Trailer <span class="film__trailer-btn">&#9654;</span></button>\n              </a>\n            </li>`)).join("")}var s=n("2Dfe2"),d=n("2nhTy");const l=document.querySelector(".empty__page"),u=document.querySelector(".empty__page-text");let y=1;function m(e=0){e&&(y=e),l.classList.add("is-hidden"),u.classList.add("is-hidden"),(0,s.spiner)();const t=JSON.parse(localStorage.getItem("movies-watched"));t?.length?g(t):(l.classList.remove("is-hidden"),u.classList.remove("is-hidden"),(0,s.spinerRemove)())}function _(e=0){e&&(y=e),l.classList.add("is-hidden"),u.classList.add("is-hidden"),(0,s.spiner)();const t=JSON.parse(localStorage.getItem("movies-queue"));t?.length?g(t):(l.classList.remove("is-hidden"),u.classList.remove("is-hidden"),(0,s.spinerRemove)())}function g(e){let t=null;e.length<=18&&(c(e),(0,s.spinerRemove)()),t=e.length%18?Math.floor(e.length/18)+1:e.length/18,y===t?(c(e.slice(18*y-18,e.length)),(0,s.spinerRemove)()):(c(e.slice(18*y-18,18*y)),(0,s.spinerRemove)()),(0,d.getPagination)(y,t,!0)}s=n("2Dfe2");var b=n("eAoKO"),h=n("422V3"),L=n("ka9Wh");const f={body:document.querySelector("body"),cardHolderLibrary:document.querySelector(".card-holder"),footerLink:document.querySelector(".footer__link"),stickyHeaderMyLibrary:document.querySelector(".js-my-library-header__sticky"),watchedBtn:document.querySelector(".js-watched"),queuedBtn:document.querySelector(".js-queue"),watchedBtnSticky:document.querySelector(".js-watched__sticky"),queuedBtnSticky:document.querySelector(".js-queue__sticky"),movieModal:document.querySelector(".js-movie-modal"),pagination:document.querySelector(".pagination__container")},p=(window.onscroll=function(){window.pageYOffset>200?f.stickyHeaderMyLibrary.classList.add("my-library-header__sticky"):f.stickyHeaderMyLibrary.classList.remove("my-library-header__sticky")},new(0,i.default));function v(e){e.target.classList.contains("my-library-header__button--current")||(f.watchedBtn.classList.add("my-library-header__button--current"),f.queuedBtn.classList.remove("my-library-header__button--current"),f.watchedBtnSticky.classList.add("my-library-header__button--current"),f.queuedBtnSticky.classList.remove("my-library-header__button--current"),f.cardHolderLibrary.innerHTML="",f.pagination.innerHTML="",(0,L.onSubmitScroll)(),m(1))}function S(e){e.target.classList.contains("my-library-header__button--current")||(f.queuedBtn.classList.add("my-library-header__button--current"),f.watchedBtn.classList.remove("my-library-header__button--current"),f.queuedBtnSticky.classList.add("my-library-header__button--current"),f.watchedBtnSticky.classList.remove("my-library-header__button--current"),f.cardHolderLibrary.innerHTML="",f.pagination.innerHTML="",(0,L.onSubmitScroll)(),_(1))}f.footerLink.addEventListener("click",a.onOpenTeamModal),f.cardHolderLibrary.addEventListener("click",(function(e){if(e.target===e.currentTarget)return;if(e.target.classList.contains("film__trailer-btn"))return b.default.showTrailer(e.target.closest("li").id);p.movieId=e.target.closest("li").id,(0,s.spiner)(),p.fetchById().then((e=>{(0,h.showModal)(e.data),(0,s.spinerRemove)()}))})),f.watchedBtn.addEventListener("click",v),f.queuedBtn.addEventListener("click",S),f.movieModal.addEventListener("click",(function(e){if(e.target.classList.contains("add-watched")&&f.watchedBtn.classList.contains("my-library-header__button--current")){const e=f.cardHolderLibrary.children.length;f.cardHolderLibrary.innerHTML="",m(Number(document.querySelector(".pagination__item--current")&&1===e?document.querySelector(".pagination__item--current").id-1:0))}if(e.target.classList.contains("add-queue")&&f.queuedBtn.classList.contains("my-library-header__button--current")){const e=f.cardHolderLibrary.children.length;f.cardHolderLibrary.innerHTML="",_(Number(document.querySelector(".pagination__item--current")&&1===e?document.querySelector(".pagination__item--current").id-1:0))}})),f.watchedBtnSticky.addEventListener("click",v),f.queuedBtnSticky.addEventListener("click",S),f.pagination.addEventListener("click",(function(e){if(e.target===e.currentTarget||"UL"===e.target.nodeName)return;let t=null;if("svg"===e.target.nodeName||"BUTTON"===e.target.nodeName||"path"===e.target.nodeName)if(e.target.closest("button").classList.contains("pagination__left-btn")&&e.target.closest("button").classList.contains("on"))t=Number(document.querySelector(".pagination__item--current").id)-1;else{if(!e.target.closest("button").classList.contains("pagination__right-btn")||!e.target.closest("button").classList.contains("on"))return;t=Number(document.querySelector(".pagination__item--current").id)+1}else{if(isNaN(e.target.closest("li").id))return"..."===e.target.closest("li").id?(0,s.successPages)():void 0;t=Number(e.target.closest("li").id)}f.watchedBtn.classList.contains("my-library-header__button--current")?((0,L.onSubmitScroll)(),m(t)):((0,L.onSubmitScroll)(),_(t))})),m();
//# sourceMappingURL=my-library.da05787f.js.map
