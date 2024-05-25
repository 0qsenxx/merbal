!function(){async function t(t){try{let e=await fetch(t);return await e.json()}catch(t){console.log("err",t)}}let e=document.querySelector(".exercises__list"),s=document.querySelector(".exercises-cards__pagination");function a(){let a=null,i=s=>{t(s).then(t=>{e.innerHTML="",t.results.forEach(t=>{e.insertAdjacentHTML("afterbegin",function({name:t,filter:e}){return`<li class="exercises__item">
    <div class="exercises__wrap">
        <h3 class="exercises-card__title">${t[0].toUpperCase()+t.slice(1)}</h3>
        <p class="exercises-card__category">${e}</p>
    </div>
   </li>`}(t));let s=document.querySelector(".exercises__item");s&&(s.style.backgroundImage=`linear-gradient(
            0deg,
            rgba(16, 16, 16, 0.7) 0%,
            rgba(16, 16, 16, 0.7) 100%
          ), url(${t.imgUrl})`,s.style.backgroundSize="cover")})})},r=t=>{s.innerHTML="";for(let e=0;e<t;e++)s.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${e+1}</button>
        </li>`);(a=s.querySelector("button"))&&a.classList.add("exercises-active-page")};t("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12").then(t=>{r(t.totalPages),i("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12"),s.addEventListener("click",t=>{if("BUTTON"!==t.target.nodeName)return;a&&a.classList.remove("exercises-active-page"),(a=t.target).classList.add("exercises-active-page");let e=t.target.textContent;i(`https://energyflow.b.goit.study/api/filters?filter=Muscles&page=${e}&limit=12`)})})}let i=document.querySelector(".exercises__list"),r=document.querySelector(".exercises-cards__pagination"),o=document.querySelector(".exercises__list"),l=document.querySelector(".exercises-btns__list"),n=document.querySelector(".exercises-cards__pagination");async function d(t){try{let e=await fetch(`https://energyflow.b.goit.study/api/exercises/${t}`),s=await e.json();return console.log(s),s}catch(t){console.log("err",t)}}a(),l.addEventListener("click",e=>{"UL"!==e.target.nodeName&&"LI"!==e.target.nodeName&&(o.innerHTML="",n.innerHTML="",e.target.hasAttribute("data-muscles")&&a(),e.target.hasAttribute("data-body-parts")&&function(){let e=null,s=e=>{t(e).then(t=>{i.innerHTML="",t.results.forEach(t=>{i.insertAdjacentHTML("beforeend",function({rating:t,name:e,burnedCalories:s,time:a,bodyPart:i,target:r}){return e.length>29&&window.screen.width>=1440?`<li class="body-parts__item">
    <div class="body-parts-header-box">
      <div class="body-parts-header-train-box">
        <p class="body-parts-workout__text">WORKOUT</p>
        <p class="body-parts-raiting__text">
          ${t}<span class="body-parts-raiting__span">
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
      ${(e[0].toUpperCase()+e.slice(1)).slice(0,29)+"..."}
    </h2>
    <div class="body-parts-about-box">
      <p class="body-parts-about__title body-parts-about__title1">
        Burned calories:
        <span class="body-parts-about__span">${s} / ${a} min</span>
      </p>
      <p class="body-parts-about__title">
        Body part: <span class="body-parts-about__span">${i[0].toUpperCase()+i.slice(1)}</span>
      </p>
      <p class="body-parts-about__title">
        Target: <span class="body-parts-about__span">${r[0].toUpperCase()+r.slice(1)}</span>
      </p>
    </div>
  </li>`:e.length>14&&window.screen.width>=768&&window.screen.width<1440?`<li class="body-parts__item">
    <div class="body-parts-header-box">
      <div class="body-parts-header-train-box">
        <p class="body-parts-workout__text">WORKOUT</p>
        <p class="body-parts-raiting__text">
          ${t}<span class="body-parts-raiting__span">
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
      ${e.length>14&&window.screen.width>=768?(e[0].toUpperCase()+e.slice(1)).slice(0,14)+"...":e[0].toUpperCase()+e.slice(1)}
    </h2>
    <div class="body-parts-about-box">
      <p class="body-parts-about__title body-parts-about__title1">
        Burned calories:
        <span class="body-parts-about__span">${s} / ${a} min</span>
      </p>
      <p class="body-parts-about__title">
        Body part: <span class="body-parts-about__span">${i[0].toUpperCase()+i.slice(1)}</span>
      </p>
      <p class="body-parts-about__title">
        Target: <span class="body-parts-about__span">${r[0].toUpperCase()+r.slice(1)}</span>
      </p>
    </div>
  </li>`:e.length>20&&window.screen.width>=375&&window.screen.width<768?`<li class="body-parts__item">
      <div class="body-parts-header-box">
        <div class="body-parts-header-train-box">
          <p class="body-parts-workout__text">WORKOUT</p>
          <p class="body-parts-raiting__text">
            ${t}<span class="body-parts-raiting__span">
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
        ${(e[0].toUpperCase()+e.slice(1)).slice(0,16)+"..."}
      </h2>
      <div class="body-parts-about-box">
        <p class="body-parts-about__title body-parts-about__title1">
          Burned calories:
          <span class="body-parts-about__span">${s} / ${a} min</span>
        </p>
        <p class="body-parts-about__title">
          Body part: <span class="body-parts-about__span">${i[0].toUpperCase()+i.slice(1)}</span>
        </p>
        <p class="body-parts-about__title">
          Target: <span class="body-parts-about__span">${r[0].toUpperCase()+r.slice(1)}</span>
        </p>
      </div>
    </li>`:`<li class="body-parts__item">
      <div class="body-parts-header-box">
        <div class="body-parts-header-train-box">
          <p class="body-parts-workout__text">WORKOUT</p>
          <p class="body-parts-raiting__text">
            ${t}<span class="body-parts-raiting__span">
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
        ${e[0].toUpperCase()+e.slice(1)}
      </h2>
      <div class="body-parts-about-box">
        <p class="body-parts-about__title body-parts-about__title1">
          Burned calories:
          <span class="body-parts-about__span">${s} / ${a} min</span>
        </p>
        <p class="body-parts-about__title">
          Body part: <span class="body-parts-about__span">${i[0].toUpperCase()+i.slice(1)}</span>
        </p>
        <p class="body-parts-about__title">
          Target: <span class="body-parts-about__span">${r[0].toUpperCase()+r.slice(1)}</span>
        </p>
      </div>
    </li>`}(t))})})},a=t=>{r.innerHTML="";for(let e=0;e<t;e++)r.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${e+1}</button>
        </li>`);(e=r.querySelector("button"))&&e.classList.add("exercises-active-page")};t("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9").then(t=>{a(t.totalPages),s("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9"),r.addEventListener("click",t=>{if("BUTTON"!==t.target.nodeName)return;e&&e.classList.remove("exercises-active-page"),(e=t.target).classList.add("exercises-active-page");let a=t.target.textContent;s(`https://energyflow.b.goit.study/api/exercises?page=${a}&bodypart=waist&limit=9`)})})}())});let p=document.querySelector(".favorites-exercises__list");localStorage.setItem("favorites",JSON.stringify([{_id:"64f389465ae26083f39b190d",bodyPart:"shoulders",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0415.gif",name:"dumbbell standing alternate raise",target:"delts",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises.",rating:3.67,burnedCalories:325,time:3,popularity:3703},{_id:"64f389465ae26083f39b1848",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0193.gif",name:"cable one arm straight back high row (kneeling)",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:3.13,burnedCalories:100,time:3,popularity:976},{_id:"64f389465ae26083f39b1ab2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1316.gif",name:"barbell bent arm pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:324,time:3,popularity:959},{_id:"64f389465ae26083f39b17bf",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0034.gif",name:"barbell decline bent arm pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:329,time:3,popularity:3}]));let c=localStorage.getItem("favorites");if(console.log("test",c),c?console.log(1111111):console.log(2222222),localStorage.getItem("favorites")){let t=JSON.parse(localStorage.getItem("favorites"));t.length?function(t){let e=t.map(t=>`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${t.name}</h3>
            <p class="exercises-card__category">${t.filter}</p>
        </div>
        <button data-id=${t._id} type=button class="show-more">Show More</button>
       </li>`);p.innerHTML=e.join("")}(t):p.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="../../images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`}else p.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="./images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`;let g=document.querySelector("body");async function u(t){let e=!1,s=t.currentTarget.dataset.id,a=await d(s);function i(t){let e=document.querySelector(".favorite-wrap");t?(e.innerHTML=`<button type="button" class="modal-remove-favorite-btn modal-btn">Remove from 
          <svg class="modal-btn-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`,document.querySelector(".modal-remove-favorite-btn").addEventListener("click",o)):(e.innerHTML=`<button type="button" class="modal-add-favorite-btn modal-btn">Add to favorite<svg class="modal-btn-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>`,document.querySelector(".modal-add-favorite-btn").addEventListener("click",r))}function r(){let t=JSON.parse(localStorage.getItem("favorites"));e=!0,t.push(a),localStorage.setItem("favorites",JSON.stringify(t)),i(e)}function o(){let t=JSON.parse(localStorage.getItem("favorites"));e=!1;let s=t.filter(t=>t._id!==a._id);localStorage.setItem("favorites",JSON.stringify(s)),i(e)}localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).map(t=>t._id).includes(a._id)&&(e=!0),function({name:t,equipment:e,burnedCalories:s,bodyPart:a,popularity:i,_id:r,time:o,target:l,rating:n,gifUrl:d},p){let c=`
    <div class="backdrop">
<div class="modal">
<div class="modal-content">
<button class="close-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
<div class="modal-img-wrap">
    <img class="modal-img" src="${d}" alt="exercise">
</div>
<div class="modal-content-wrap">
<div >
    <h2 class="modal-title">${t}</h2>
    <div class="modal-rating">
        <p class="modal-rating-amount">${Math.round(n)}.0</p>
        <ul class="modal-rating-list">
            ${[1,2,3,4,5].map((t,e)=>e<Math.round(n)?`<li class="modal-rating-item"><svg class="modal-rating-stars gold-star"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
                  </svg></li>`:`<li class="modal-rating-item"><svg class="modal-rating-stars grey-star"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#1B1B1B20"/>
                    </svg></li>`).join("")}
        </ul>
    </div>
    <ul class="modal-details-list">
        <li class="modal-details-item">
            <p class="modal-details-item-title">Target</p>
            <p class="modal-details-item-text">${l}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Body Part</p>
            <p class="modal-details-item-text">${a}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Equipment</p>
            <p class="modal-details-item-text">${e}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Popular</p>
            <p class="modal-details-item-text">${i}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Burned calories</p>
            <p class="modal-details-item-text">${s}/${o} min</p>
        </li>
    </ul>
    <p class="modal-info">This refers to your core muscles, which include the rectus abdominis, obliques, and
        transverse abdominis.
        They're essential for maintaining posture, stability, and generating force in many movements. Exercises
        that target the abs include crunches, leg raises, and planks.</p>
    </div >
    <div class="modal-btn-wrap">
    <div class="favorite-wrap"></div>
<button type="button" class="modal-add-rating-btn modal-btn">Give a rating</button>
    </div >
</div >
</div >
</div >
</div >
    `;g.insertAdjacentHTML("afterbegin",c)}(a,0),document.querySelector(".close-btn").addEventListener("click",b),i(e),document.querySelector(".modal-add-rating-btn")}function b(){document.querySelector(".backdrop").remove()}document.querySelectorAll(".show-more").forEach(t=>t.addEventListener("click",u)),document.querySelector(".footer__form").addEventListener("submit",t=>{t.preventDefault();let e={email:t.currentTarget.elements.email.value};console.log(e),fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(t=>console.log(t)).catch(t=>console.log(t)),t.currentTarget.reset()})}();
//# sourceMappingURL=fovorites.f07eb10b.js.map
