import getExercisesByUrl from './getExercisesByUrl';
import bodyPartsExercisesMarkup from './exercises-marup/bodyPartsExercisesMarkup';
import onOpenModal from '../exerciseModal';

const exercisesListRef = document.querySelector('.exercises__list');
const exercisesPaginationRef = document.querySelector(
  '.exercises-cards__pagination'
);

export default function getBodyPartsExercises() {
  let activeButton = null;
  const loadExercises = url => {
    getExercisesByUrl(url).then(data => {
      exercisesListRef.innerHTML = '';
      data.results.forEach(exercise => {
        exercisesListRef.insertAdjacentHTML(
          'beforeend',
          bodyPartsExercisesMarkup(exercise)
        );
      });
      document
        .querySelectorAll('.body-parts-start__text')
        .forEach(el => el.addEventListener('click', onOpenModal));
    });
  };

  const setupPagination = totalPages => {
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
  };

  getExercisesByUrl(
    `https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9`
  ).then(data => {
    setupPagination(data.totalPages);
    loadExercises(
      `https://energyflow.b.goit.study/api/exercises?page=1&bodypart=waist&limit=9`
    );

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
        `https://energyflow.b.goit.study/api/exercises?page=${page}&bodypart=waist&limit=9`
      );
    });
  });
}
