const e=document.querySelector(".exercises__list");(async function(){try{let e=await fetch("https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12");return await e.json()}catch(e){console.log("err",e)}})().then(s=>{console.log(s),s.results.forEach(s=>{e.insertAdjacentHTML("afterbegin",`<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${s.name}</h3>
            <p class="exercises-card__category">${s.filter}</p>
        </div>
       </li>`)})});
//# sourceMappingURL=fovorites.fa24367b.js.map
