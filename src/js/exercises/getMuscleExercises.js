import getExercisesByUrl from './getExercisesByUrl';
import muscleExercisesMarkup from './exercises-marup/muscleExercisesMarkup';
import { showLoader, hideLoader } from './exercises-loader';

const exercisesListRef = document.querySelector('.exercises__list');
const exercisesPaginationRef = document.querySelector(
  '.exercises-cards__pagination'
);

export default function getMusclesExercises() {
  let activeButton = null;

  const loadExercises = url => {
    showLoader();
    getExercisesByUrl(url).then(data => {
      hideLoader();
      if (exercisesListRef) {
        exercisesListRef.innerHTML = '';
        data.results.forEach(exercise => {
          exercisesListRef.insertAdjacentHTML(
            'afterbegin',
            muscleExercisesMarkup(exercise)
          );
          const exerciseItem = document.querySelector('.exercises__item');
          if (exerciseItem) {
            exerciseItem.style.backgroundImage = `linear-gradient(
              0deg,
              rgba(16, 16, 16, 0.7) 0%,
              rgba(16, 16, 16, 0.7) 100%
            ), url(${exercise.imgUrl})`;
            exerciseItem.style.backgroundSize = 'cover';
          }
        });
      }
    });
  };

  const setupPagination = totalPages => {
    if (exercisesPaginationRef) {
      exercisesPaginationRef.innerHTML = '';
      for (let i = 0; i < totalPages; i++) {
        exercisesPaginationRef.insertAdjacentHTML(
          'beforeend',
          `<li class="exercises-pagination__item">
            <button class="exercises-cards__page">${i + 1}</button>
          </li>`
        );
      }
      activeButton = exercisesPaginationRef.querySelector('button');
      if (activeButton) {
        activeButton.classList.add('exercises-active-page');
      }
    }
  };

  getExercisesByUrl(
    `https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12`
  ).then(data => {
    setupPagination(data.totalPages);
    loadExercises(
      `https://energyflow.b.goit.study/api/filters?filter=Muscles&page=1&limit=12`
    );
    if (exercisesPaginationRef) {
      exercisesPaginationRef.addEventListener('click', evt => {
        if (evt.target.nodeName !== 'BUTTON') {
          return;
        }
        if (activeButton) {
          activeButton.classList.remove('exercises-active-page');
        }
        activeButton = evt.target;
        activeButton.classList.add('exercises-active-page');
        const page = evt.target.textContent;
        loadExercises(
          `https://energyflow.b.goit.study/api/filters?filter=Muscles&page=${page}&limit=12`
        );
      });
    }
  });
}
