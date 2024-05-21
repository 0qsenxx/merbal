async function e(e){try{let t=await fetch(e);return await t.json()}catch(e){console.log("err",e)}}const t=document.querySelector(".exercises__list"),s=document.querySelector(".exercises-cards__pagination");function a(){let a=null,r=s=>{e(s).then(e=>{t.innerHTML="",e.results.forEach(e=>{t.insertAdjacentHTML("afterbegin",function({name:e,filter:t}){return`<li class="exercises__item">
    <div class="exercises__wrap">
        <h3 class="exercises-card__title">${e[0].toUpperCase()+e.slice(1)}</h3>
        <p class="exercises-card__category">${t}</p>
    </div>
   </li>`}(e));let s=document.querySelector(".exercises__item");s&&(s.style.backgroundImage=`linear-gradient(
            0deg,
            rgba(16, 16, 16, 0.7) 0%,
            rgba(16, 16, 16, 0.7) 100%
          ), url(${e.imgUrl})`)})})},i=e=>{s.innerHTML="";for(let t=0;t<e;t++)s.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${t+1}</button>
        </li>`);(a=s.querySelector("button"))&&a.classList.add("exercises-active-page")};e("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12").then(e=>{i(e.totalPages),r("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12"),s.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;a&&a.classList.remove("exercises-active-page"),(a=e.target).classList.add("exercises-active-page");let t=e.target.textContent;r(`https://energyflow.b.goit.study/api/filters?filter=Muscles&page=${t}&limit=12`)})})}const r=document.querySelector(".exercises__list"),i=document.querySelector(".exercises-cards__pagination"),o=document.querySelector(".exercises__list"),n=document.querySelector(".exercises-btns__list"),l=document.querySelector(".exercises-cards__pagination");a(),n.addEventListener("click",t=>{"UL"!==t.target.nodeName&&"LI"!==t.target.nodeName&&(o.innerHTML="",l.innerHTML="",t.target.hasAttribute("data-muscles")&&a(),t.target.hasAttribute("data-body-parts")&&function(){let t=null,s=t=>{e(t).then(e=>{r.innerHTML="",e.results.forEach(e=>{r.insertAdjacentHTML("beforeend",function({rating:e,name:t,burnedCalories:s,time:a,bodyPart:r,target:i}){return`<li class="body-parts__item">
    <div class="body-parts-header-box">
      <div class="body-parts-header-train-box">
        <p class="body-parts-workout__text">WORKOUT</p>
        <p class="body-parts-raiting__text">
          ${e}<span class="body-parts-raiting__span">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 14 13" fill="none">
            <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
          </svg>
        </span>
        </p>
      </div>
      <div class="body-parts-header-start-box">
        <p class="body-parts-start__text">
          Start
          <span class="body-parts-start__span">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        </p>
      </div>
    </div>
    <h2 class="body-parts__title">
      <span class="body-parts-title__span">
        <svg width="14" height="16">
          <use href="../images/symbol-defs.svg#icon-running"></use>
        </svg>
      </span>
      ${t[0].toUpperCase()+t.slice(1)}
    </h2>
    <div class="body-parts-about-box">
      <p class="body-parts-about__title">
        Burned calories:
        <span class="body-parts-about__span">${s} / ${a} min</span>
      </p>
      <p class="body-parts-about__title">
        Body part: <span class="body-parts-about__span">${r[0].toUpperCase()+r.slice(1)}</span>
      </p>
      <p class="body-parts-about__title">
        Target: <span class="body-parts-about__span">${i[0].toUpperCase()+i.slice(1)}</span>
      </p>
    </div>
  </li>`}(e))})})},a=e=>{i.innerHTML="";for(let t=0;t<e;t++)i.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${t+1}</button>
        </li>`);(t=i.querySelector("button"))&&t.classList.add("exercises-active-page")};e("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9").then(e=>{a(e.totalPages),s("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9"),i.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;t&&t.classList.remove("exercises-active-page"),(t=e.target).classList.add("exercises-active-page");let a=e.target.textContent;s(`https://energyflow.b.goit.study/api/exercises?page=${a}&bodypart=waist&limit=9`)})})}())}),document.querySelector(".footer__form").addEventListener("submit",e=>{e.preventDefault();let t={email:e.currentTarget.elements.email.value};console.log(t),fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.log(e)),e.currentTarget.reset()});const c=document.querySelector(".favorites-exercises__list");if(localStorage.setItem("favorites",JSON.stringify([{name:"ga"}])),localStorage.getItem("favorites")){let e=JSON.parse(localStorage.getItem("favorites"));e.length?function(e){let t=e.map(e=>`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${e.name}</h3>
            <p class="exercises-card__category">${e.filter}</p>
        </div>
       </li>`);c.innerHTML=t.join("")}(e):c.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="../../images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`}else c.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="./images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`;exercises,js,main;
//# sourceMappingURL=fovorites.22d40bd7.js.map
