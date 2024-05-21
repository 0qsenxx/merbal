import getMusclesExercises from './getMuscleExercises';
import getBodyPartsExercises from './getBodyPartsExercises';

const exercisesListRef = document.querySelector('.exercises__list');
const exercisesBtnsListRef = document.querySelector('.exercises-btns__list');
const exercisesPaginationRef = document.querySelector(
  '.exercises-cards__pagination'
);

getMusclesExercises();

exercisesBtnsListRef.addEventListener('click', evt => {
  if (evt.target.nodeName === 'UL' || evt.target.nodeName === 'LI') {
    return;
  }
  exercisesListRef.innerHTML = ``;
  exercisesPaginationRef.innerHTML = ``;

  if (evt.target.hasAttribute('data-muscles')) {
    getMusclesExercises();
  }

  if (evt.target.hasAttribute('data-body-parts')) {
    getBodyPartsExercises();
  }
});

// fetch(
//   `https://energyflow.b.goit.study/api/filters?filter=Muscles&page=2`
// )
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   });
