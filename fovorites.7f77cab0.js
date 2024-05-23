!function(){async function e(e){try{let t=await fetch(e);return await t.json()}catch(e){console.log("err",e)}}let t=document.querySelector(".exercises__list"),s=document.querySelector(".exercises-cards__pagination");function a(){let a=null,i=s=>{e(s).then(e=>{t.innerHTML="",e.results.forEach(e=>{t.insertAdjacentHTML("afterbegin",function({name:e,filter:t}){return`<li class="exercises__item">
    <div class="exercises__wrap">
        <h3 class="exercises-card__title">${e[0].toUpperCase()+e.slice(1)}</h3>
        <p class="exercises-card__category">${t}</p>
    </div>
   </li>`}(e));let s=document.querySelector(".exercises__item");s&&(s.style.backgroundImage=`linear-gradient(
            0deg,
            rgba(16, 16, 16, 0.7) 0%,
            rgba(16, 16, 16, 0.7) 100%
          ), url(${e.imgUrl})`)})})},r=e=>{s.innerHTML="";for(let t=0;t<e;t++)s.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${t+1}</button>
        </li>`);(a=s.querySelector("button"))&&a.classList.add("exercises-active-page")};e("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12").then(e=>{r(e.totalPages),i("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12"),s.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;a&&a.classList.remove("exercises-active-page"),(a=e.target).classList.add("exercises-active-page");let t=e.target.textContent;i(`https://energyflow.b.goit.study/api/filters?filter=Muscles&page=${t}&limit=12`)})})}let i=document.querySelector(".exercises__list"),r=document.querySelector(".exercises-cards__pagination"),l=document.querySelector(".exercises__list"),o=document.querySelector(".exercises-btns__list"),n=document.querySelector(".exercises-cards__pagination");async function d(e){try{let t=await fetch(`https://energyflow.b.goit.study/api/exercises/${e}`),s=await t.json();return console.log(s),s}catch(e){console.log("err",e)}}a(),o.addEventListener("click",t=>{"UL"!==t.target.nodeName&&"LI"!==t.target.nodeName&&(l.innerHTML="",n.innerHTML="",t.target.hasAttribute("data-muscles")&&a(),t.target.hasAttribute("data-body-parts")&&function(){let t=null,s=t=>{e(t).then(e=>{i.innerHTML="",e.results.forEach(e=>{i.insertAdjacentHTML("beforeend",function({rating:e,name:t,burnedCalories:s,time:a,bodyPart:i,target:r}){return`<li class="body-parts__item">
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
        Body part: <span class="body-parts-about__span">${i[0].toUpperCase()+i.slice(1)}</span>
      </p>
      <p class="body-parts-about__title">
        Target: <span class="body-parts-about__span">${r[0].toUpperCase()+r.slice(1)}</span>
      </p>
    </div>
  </li>`}(e))})})},a=e=>{r.innerHTML="";for(let t=0;t<e;t++)r.insertAdjacentHTML("beforeend",`<li class="exercises-pagination__item">
          <button class="exercises-cards__page">${t+1}</button>
        </li>`);(t=r.querySelector("button"))&&t.classList.add("exercises-active-page")};e("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9").then(e=>{a(e.totalPages),s("https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9"),r.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;t&&t.classList.remove("exercises-active-page"),(t=e.target).classList.add("exercises-active-page");let a=e.target.textContent;s(`https://energyflow.b.goit.study/api/exercises?page=${a}&bodypart=waist&limit=9`)})})}())}),document.querySelector(".footer__form").addEventListener("submit",e=>{e.preventDefault();let t={email:e.currentTarget.elements.email.value};console.log(t),fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.log(e)),e.currentTarget.reset()});let c=document.querySelector(".favorites-exercises__list");localStorage.setItem("favorites",JSON.stringify([{_id:"64f389465ae26083f39b190d",bodyPart:"shoulders",equipment:"dumbbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0415.gif",name:"dumbbell standing alternate raise",target:"delts",description:"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises.",rating:3.67,burnedCalories:325,time:3,popularity:3703},{_id:"64f389465ae26083f39b1848",bodyPart:"back",equipment:"cable",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0193.gif",name:"cable one arm straight back high row (kneeling)",target:"upper back",description:"This region includes several muscles like the rhomboids and rear deltoids, responsible for scapular retraction and shoulder external rotation. Exercises include rows and face pulls.",rating:3.13,burnedCalories:100,time:3,popularity:976},{_id:"64f389465ae26083f39b1ab2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/1316.gif",name:"barbell bent arm pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:324,time:3,popularity:959},{_id:"64f389465ae26083f39b17bf",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0034.gif",name:"barbell decline bent arm pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:329,time:3,popularity:3}]));let p=localStorage.getItem("favorites");if(console.log("test",p),p?console.log(1111111):console.log(2222222),localStorage.getItem("favorites")){let e=JSON.parse(localStorage.getItem("favorites"));e.length?function(e){let t=e.map(e=>`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${e.name}</h3>
            <p class="exercises-card__category">${e.filter}</p>
        </div>
        <button data-id=${e._id} type=button class="show-more">Show More</button>
       </li>`);c.innerHTML=t.join("")}(e):c.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="../../images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`}else c.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="./images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`;let u=document.querySelector("body");async function g(e){let t=!1,s=e.currentTarget.dataset.id,a=await d(s);function i(e){let t=document.querySelector(".favorite-wrap");e?(t.innerHTML=`<button type="button" class="modal-remove-favorite-btn modal-btn">Remove from 
          <svg class="modal-btn-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`,document.querySelector(".modal-remove-favorite-btn").addEventListener("click",l)):(t.innerHTML=`<button type="button" class="modal-add-favorite-btn modal-btn">Add to favorite<svg class="modal-btn-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>`,document.querySelector(".modal-add-favorite-btn").addEventListener("click",r))}function r(){let e=JSON.parse(localStorage.getItem("favorites"));t=!0,e.push(a),localStorage.setItem("favorites",JSON.stringify(e)),i(t)}function l(){let e=JSON.parse(localStorage.getItem("favorites"));t=!1;let s=e.filter(e=>e._id!==a._id);localStorage.setItem("favorites",JSON.stringify(s)),i(t)}localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).map(e=>e._id).includes(a._id)&&(t=!0),function({name:e,equipment:t,burnedCalories:s,bodyPart:a,popularity:i,_id:r,time:l,target:o,rating:n,gifUrl:d},c){let p=`
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
    <h2 class="modal-title">${e}</h2>
    <div class="modal-rating">
        <p class="modal-rating-amount">${Math.round(n)}.0</p>
        <ul class="modal-rating-list">
            ${[1,2,3,4,5].map((e,t)=>t<Math.round(n)?`<li class="modal-rating-item"><svg class="modal-rating-stars gold-star"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
                  </svg></li>`:`<li class="modal-rating-item"><svg class="modal-rating-stars grey-star"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#1B1B1B20"/>
                    </svg></li>`).join("")}
        </ul>
    </div>
    <ul class="modal-details-list">
        <li class="modal-details-item">
            <p class="modal-details-item-title">Target</p>
            <p class="modal-details-item-text">${o}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Body Part</p>
            <p class="modal-details-item-text">${a}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Equipment</p>
            <p class="modal-details-item-text">${t}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Popular</p>
            <p class="modal-details-item-text">${i}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Burned calories</p>
            <p class="modal-details-item-text">${s}/${l} min</p>
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
    `;u.insertAdjacentHTML("afterbegin",p)}(a,0),document.querySelector(".close-btn").addEventListener("click",m),i(t),document.querySelector(".modal-add-rating-btn")}function m(){document.querySelector(".backdrop").remove()}document.querySelectorAll(".show-more").forEach(e=>e.addEventListener("click",g))}();
//# sourceMappingURL=fovorites.7f77cab0.js.map
