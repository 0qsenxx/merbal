var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},r=e.parcelRequirec3b5;async function i(e){try{let t=await fetch(e);return await t.json()}catch(e){console.log("err",e)}}null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var r=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},e.parcelRequirec3b5=r),r.register,r("9F460");const a=document.querySelector(".mask");function n(){a.classList.remove("is-show-loader")}function c(){a.classList.add("is-show-loader")}const o=document.querySelector(".exercises__list"),l=document.querySelector(".exercises-cards__pagination");function u(){let e=null,t=e=>{n(),i(e).then(e=>{c(),o&&(o.innerHTML="",e.results.forEach(e=>{o.insertAdjacentHTML("afterbegin",function({name:e,filter:t}){return`<li class="exercises__item" data-name="${e}">
    <div class="exercises__wrap">
        <h3 class="exercises-card__title">${e[0].toUpperCase()+e.slice(1)}</h3>
        <p class="exercises-card__category">${t}</p>
    </div>
   </li>`}(e));let t=document.querySelector(".exercises__item");t&&(t.style.backgroundImage=`linear-gradient(
              0deg,
              rgba(16, 16, 16, 0.7) 0%,
              rgba(16, 16, 16, 0.7) 100%
            ), url(${e.imgUrl})`,t.style.backgroundSize="cover")}))})},s=t=>{if(l){l.innerHTML="";for(let e=0;e<t;e++)l.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
            <button class="exercises-cards__page">${e+1}</button>
          </li>`);(e=l.querySelector("button"))&&e.classList.add("exercises-active-page")}};i("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12").then(r=>{s(r.totalPages),t("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12"),l&&l.addEventListener("click",s=>{if("BUTTON"!==s.target.nodeName)return;e&&e.classList.remove("exercises-active-page"),(e=s.target).classList.add("exercises-active-page");let r=s.target.textContent;t(`https://energyflow.b.goit.study/api/filters?filter=Muscles&page=${r}&limit=12`)})})}var d=r("2proE"),g=r("dr7Ef");const p=document.querySelector(".exercises__list"),f=document.querySelector(".exercises-cards__pagination");var d=r("2proE"),g=r("dr7Ef");const m=document.querySelector(".exercises__list"),y=document.querySelector(".search-exercises__input"),x=document.querySelector(".search-exercises__button"),b=document.querySelector(".exercises-cards__pagination");var d=r("2proE"),g=r("dr7Ef");const _=document.querySelector(".exercises__list"),L=document.querySelectorAll(".exercises__button"),h=document.querySelector(".exercises-cards__pagination");document.querySelectorAll(".exercises__item");const v=document.querySelector(".exercises__list"),T=document.querySelector(".exercises-btns__list"),w=document.querySelector(".exercises-cards__pagination"),S=document.querySelector(".exercises-search-box"),q=document.querySelectorAll(".exercises__button");let E=null;u(),function(){let e=null,t=e=>{n(),i(e).then(e=>{c(),_.innerHTML="",e.results.forEach(e=>{_.insertAdjacentHTML("afterbegin",(0,d.default)(e))}),document.querySelectorAll(".body-parts-start__text").forEach(e=>e.addEventListener("click",g.default))})},s=t=>{h.innerHTML="";for(let e=0;e<t;e++)h.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${e+1}</button>
        </li>`);(e=h.querySelector("button"))&&e.classList.add("exercises-active-page")};_.addEventListener("click",r=>{let a=r.target;"H3"===a.nodeName&&i(`https://energyflow.b.goit.study/api/exercises?muscles=${a.textContent.toLowerCase()}&page=1&limit=9`).then(r=>{s(r.totalPages),t(`https://energyflow.b.goit.study/api/exercises?muscles=${a.textContent.toLowerCase()}&page=1&limit=9`),L.forEach(e=>{e.classList.contains("exercises-active-button")&&e.classList.remove("exercises-active-button"),e.hasAttribute("data-body-parts")&&e.classList.add("exercises-active-button")}),h.addEventListener("click",s=>{if("BUTTON"!==s.target.nodeName)return;e&&e.classList.remove("exercises-active-page"),(e=s.target).classList.add("exercises-active-page");let r=s.target.textContent;t(`https://energyflow.b.goit.study/api/exercises?muscles=${a.textContent.toLowerCase()}&page=${r}&limit=9`)})})})}(),(E=T.querySelector("button"))&&E.classList.add("exercises-active-button"),v&&T.addEventListener("click",e=>{"UL"!==e.target.nodeName&&"LI"!==e.target.nodeName&&(v.innerHTML="",w.innerHTML="",S.style.display="none",q.forEach(e=>{e.classList.contains("exercises-active-button")&&e.classList.remove("exercises-active-button")}),E&&E.classList.remove("exercises-active-button"),(E=e.target).classList.add("exercises-active-button"),e.target.hasAttribute("data-muscles")&&u(),e.target.hasAttribute("data-body-parts")&&(function(){let e=null,t=e=>{n(),i(e).then(e=>{c(),p.innerHTML="",e.results.forEach(e=>{p.insertAdjacentHTML("beforeend",(0,d.default)(e))}),document.querySelectorAll(".body-parts-start__text").forEach(e=>e.addEventListener("click",g.default))})},s=t=>{f.innerHTML="";for(let e=0;e<t;e++)f.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${e+1}</button>
        </li>`);(e=f.querySelector("button"))&&e.classList.add("exercises-active-page")};i("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9").then(r=>{s(r.totalPages),t("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9"),f.addEventListener("click",s=>{if("BUTTON"!==s.target.nodeName)return;e&&e.classList.remove("exercises-active-page"),(e=s.target).classList.add("exercises-active-page");let r=s.target.textContent;t(`https://energyflow.b.goit.study/api/exercises?page=${r}&bodypart=waist&limit=9`)})})}(),S.style.display="block"))}),function(){let e=null,t=e=>{n(),i(e).then(e=>{c(),m.innerHTML="",e.results.forEach(e=>{m.insertAdjacentHTML("beforeend",(0,d.default)(e))}),document.querySelectorAll(".body-parts-start__text").forEach(e=>e.addEventListener("click",g.default))})},s=t=>{if(b){b.innerHTML="";for(let e=0;e<t;e++)b.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
            <button class="exercises-cards__page">${e+1}</button>
          </li>`);(e=b.querySelector("button"))&&e.classList.add("exercises-active-page")}};x&&x.addEventListener("click",r=>{i(`https://energyflow.b.goit.study/api/exercises?muscles=${y.value.toLowerCase()}&page=1&limit=9`).then(r=>{if(0===r.results.length){m.innerHTML="",b.innerHTML="",m.insertAdjacentHTML("beforebegin",`
            <h2 class="exercises-no-results__text">
              Unfortunately, <span class="exercises-no-results__span">no results</span> were found. You may want to consider other search
              options to find the exercise you are looking for. Our range is wide and you
              have the opportunity to find more options that suit your needs.
            </h2>`);return}{let i=document.querySelector(".exercises-no-results__text");i&&i.remove(),s(r.totalPages),t(`https://energyflow.b.goit.study/api/exercises?muscles=${y.value.toLowerCase()}&page=1&limit=9`),b.addEventListener("click",s=>{if("BUTTON"!==s.target.nodeName)return;e&&e.classList.remove("exercises-active-page"),(e=s.target).classList.add("exercises-active-page");let r=s.target.textContent;t(`https://energyflow.b.goit.study/api/exercises?muscles=${y.value.toLowerCase()}&page=${r}&limit=9`)})}})})}(),r("bWzo1"),r("dr7Ef"),r("8shZv");var M=r("lCWzf"),H=r("gSUis");(0,M.defaultModules).set(H,{}),document.querySelector(".footer__form").addEventListener("submit",e=>{if(e.preventDefault(),!1===e.target.elements.email.value.includes("@")||!1===e.target.elements.email.value.includes(".")||"."===e.target.elements.email.value[e.target.elements.email.value.length-1]){e.target.elements.email.classList.add("rating-error-input");return}e.target.elements.email.classList.remove("rating-error-input");let t={email:e.currentTarget.elements.email.value};console.log(t),fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>{(0,M.success)({title:"Success!",text:e.message}),console.log(e)}).catch(e=>console.log(e)),e.currentTarget.reset()}),r("70p4W");
//# sourceMappingURL=index.8e3fedfe.js.map