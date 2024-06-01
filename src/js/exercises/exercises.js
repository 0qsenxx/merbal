import getMusclesExercises from './getMuscleExercises';
import getBodyPartsExercises from './getBodyPartsExercises';
import searchExercises from './searchExercises';
import selectMuscles from './selectMuscles';

const exercisesListRef = document.querySelector('.exercises__list');
const exercisesBtnsListRef = document.querySelector('.exercises-btns__list');
const exercisesPaginationRef = document.querySelector(
  '.exercises-cards__pagination'
);
const exercisesSearchBoxRef = document.querySelector('.exercises-search-box');
const exercisesBtnsRef = document.querySelectorAll('exercises__button');

getMusclesExercises();
if (exercisesListRef) {
  exercisesBtnsListRef.addEventListener('click', evt => {
    if (evt.target.nodeName === 'UL' || evt.target.nodeName === 'LI') {
      return;
    }
    exercisesListRef.innerHTML = ``;
    exercisesPaginationRef.innerHTML = ``;
    exercisesSearchBoxRef.style.display = 'none';

    if (evt.target.hasAttribute('data-muscles')) {
      getMusclesExercises();
    }

    if (evt.target.hasAttribute('data-body-parts')) {
      getBodyPartsExercises();
      exercisesSearchBoxRef.style.display = 'block';
    }
  });
}

let activeButton = null;
activeButton = exercisesBtnsListRef.querySelector('button');
if (activeButton) {
  activeButton.classList.add('exercises-active-button');
}

exercisesBtnsListRef.addEventListener('click', evt => {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  if (activeButton) {
    activeButton.classList.remove('exercises-active-button');
  }
  activeButton = evt.target;
  activeButton.classList.add('exercises-active-button');
});

searchExercises();
selectMuscles();
// export default function switchexercisesBtns(evt) {}

// fetch(
//   `https://energyflow.b.goit.study/api/filters?filter=Muscles&page=2`
// )
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   });
