import getExercisesByUrl from './getExercisesByUrl';
import bodyPartsExercisesMarkup from './exercises-marup/bodyPartsExercisesMarkup';
import onOpenModal from '../exerciseModal';
import { showLoader, hideLoader } from './exercises-loader';

const exercisesListRef = document.querySelector('.exercises__list');
const exercisesBtnsRef = document.querySelectorAll('.exercises__button');
const exercisesPaginationRef = document.querySelector(
  '.exercises-cards__pagination'
);
const exercisesItemsRef = document.querySelectorAll('.exercises__item');

export default function selectMuscles() {
  let activeButton = null;

  const loadExercises = url => {
    showLoader();
    getExercisesByUrl(url).then(data => {
      hideLoader();
      exercisesListRef.innerHTML = ``;
      data.results.forEach(exercise => {
        exercisesListRef.insertAdjacentHTML(
          'afterbegin',
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
  exercisesListRef.addEventListener('click', evt => {
    const selectedMuscle = evt.target;
    if (selectedMuscle.nodeName !== 'H3') {
      return;
    }
    getExercisesByUrl(
      `https://energyflow.b.goit.study/api/exercises?muscles=${selectedMuscle.textContent.toLowerCase()}&page=1&limit=9`
    ).then(data => {
      setupPagination(data.totalPages);
      loadExercises(
        `https://energyflow.b.goit.study/api/exercises?muscles=${selectedMuscle.textContent.toLowerCase()}&page=1&limit=9`
      );
      exercisesBtnsRef.forEach(btn => {
        if (btn.classList.contains('exercises-active-button')) {
          btn.classList.remove('exercises-active-button');
        }
        if (btn.hasAttribute('data-body-parts')) {
          btn.classList.add('exercises-active-button');
        }
      });
      exercisesPaginationRef.addEventListener('click', event => {
        if (event.target.nodeName !== 'BUTTON') {
          return;
        }
        if (activeButton) {
          activeButton.classList.remove('exercises-active-page');
        }
        activeButton = event.target;
        activeButton.classList.add('exercises-active-page');
        const page = event.target.textContent;
        // console.log(page);
        loadExercises(
          `https://energyflow.b.goit.study/api/exercises?muscles=${selectedMuscle.textContent.toLowerCase()}&page=${page}&limit=9`
        );
      });
    });
  });
}
