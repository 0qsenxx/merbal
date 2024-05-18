!function(){let e=document.querySelector(".exercises__list");(async function(){try{let e=await fetch("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12");return await e.json()}catch(e){console.log("err",e)}})().then(t=>{console.log(t),t.results.forEach(t=>{e.insertAdjacentHTML("afterbegin",`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${t.name}</h3>
            <p class="exercises-card__category">${t.filter}</p>
        </div>
       </li>`)})}),document.querySelector(".footer__form").addEventListener("submit",e=>{e.preventDefault();let t={email:e.currentTarget.elements.email.value};console.log(t),fetch("https://energyflow.b.goit.study/api/subscription",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.log(e)),e.currentTarget.reset()})}();
//# sourceMappingURL=fovorites.7a4750c1.js.map
