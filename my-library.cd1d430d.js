const e={openTeamModal:document.querySelector("[data-team-modal-open]"),closeTeamModal:document.querySelector("[data-team-modal-close]"),teamModal:document.querySelector("[data-team-modal]"),teamBackdrop:document.querySelector(".team-backdrop"),body:document.querySelector("body")};function o(e){"Escape"===e.code&&a()}function a(){e.teamModal.classList.add("is-hidden"),window.removeEventListener("keydown",o),e.body.classList.remove("show-modal-team"),e.closeTeamModal.removeEventListener("click",a)}function t(t){window.addEventListener("keydown",o),e.body.classList.add("show-modal-team"),e.teamModal.classList.remove("is-hidden"),e.closeTeamModal.addEventListener("click",a)}e.openTeamModal.addEventListener("click",t),e.closeTeamModal.addEventListener("click",a),e.teamBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&a()}));const d={cardHolderLibrary:document.querySelector(".card-holder"),footerLink:document.querySelector(".footer__link"),stickyHeaderMyLibrary:document.querySelector(".js-my-library-header__sticky")};window.onscroll=function(){window.pageYOffset>200?d.stickyHeaderMyLibrary.classList.add("my-library-header__sticky"):d.stickyHeaderMyLibrary.classList.remove("my-library-header__sticky")};d.footerLink.addEventListener("click",t);
//# sourceMappingURL=my-library.cd1d430d.js.map
