const e=document.querySelector(".exercises__list");(async function(){try{let e=await fetch("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12");return await e.json()}catch(e){console.log("err",e)}})().then(t=>{console.log(t),t.results.forEach(t=>{e.insertAdjacentHTML("afterbegin",`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${t.name}</h3>
            <p class="exercises-card__category">${t.filter}</p>
        </div>
       </li>`)})}),document.querySelector(".footer__form").addEventListener("submit",e=>{e.preventDefault();let t={email:e.currentTarget.elements.email.value};console.log(t),fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.log(e)),e.currentTarget.reset()});const t=document.querySelector(".favorites-exercises__list");if(localStorage.setItem("favorites",JSON.stringify([{name:"ga"}])),localStorage.getItem("favorites")){let e=JSON.parse(localStorage.getItem("favorites"));e.length?function(e){let s=e.map(e=>`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${e.name}</h3>
            <p class="exercises-card__category">${e.filter}</p>
        </div>
       </li>`);t.innerHTML=s.join("")}(e):t.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="../../images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`}else t.innerHTML=`<div class="favorites-info">
        <img class="favorites-info-img" src="./images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future\u{1F60A}</p>
    </div>`;
//# sourceMappingURL=fovorites.8df13972.js.map
