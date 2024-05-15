const exercisesListRef = document.querySelector('.exercises__list');

async function getMusculeExercises() {
  try {
    const res = await fetch(
      `https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log('err', err);
  }
}

getMusculeExercises().then(data => {
  console.log(data);
//   console.log(data.results.sort((a, b) => a.name.localeCompare(b.name)));
  data.results.forEach(exercise => {
    exercisesListRef.insertAdjacentHTML(
      'afterbegin',
      `<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${exercise.name}</h3>
            <p class="exercises-card__category">${exercise.filter}</p>
        </div>
       </li>`
    );
  });
});
