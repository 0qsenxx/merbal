import getExercisesByUrl from './getExercisesByUrl';
import bodyPartsExercisesMarkup from './exercises-marup/bodyPartsExercisesMarkup';
import onOpenModal from '../exerciseModal';
import { showLoader, hideLoader } from './exercises-loader';

const exercisesListRef = document.querySelector('.exercises__list');
const exercisesSearchInputRef = document.querySelector(
  '.search-exercises__input'
);
const exercisesSearchButton = document.querySelector(
  '.search-exercises__button'
);
const exercisesPaginationRef = document.querySelector(
  '.exercises-cards__pagination'
);

export default function searchExercises() {
  let activeButton = null;

  const loadExercises = url => {
    showLoader();
    getExercisesByUrl(url).then(data => {
      hideLoader();
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

  if (exercisesSearchButton) {
    exercisesSearchButton.addEventListener('click', evt => {
      getExercisesByUrl(
        `https://energyflow.b.goit.study/api/exercises?muscles=${exercisesSearchInputRef.value.toLowerCase()}&page=1&limit=9`
      ).then(data => {
        if (data.results.length === 0) {
          exercisesListRef.innerHTML = ``;
          exercisesPaginationRef.innerHTML = ``;
          exercisesListRef.insertAdjacentHTML(
            'beforebegin',
            `
            <h2 class="exercises-no-results__text">
              Unfortunately, <span class="exercises-no-results__span">no results</span> were found. You may want to consider other search
              options to find the exercise you are looking for. Our range is wide and you
              have the opportunity to find more options that suit your needs.
            </h2>`
          );
          return;
        } else {
          const noResultsTextRef = document.querySelector(
            '.exercises-no-results__text'
          );
          if (noResultsTextRef) {
            noResultsTextRef.remove();
          }
          setupPagination(data.totalPages);
          loadExercises(
            `https://energyflow.b.goit.study/api/exercises?muscles=${exercisesSearchInputRef.value.toLowerCase()}&page=1&limit=9`
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
              `https://energyflow.b.goit.study/api/exercises?muscles=${exercisesSearchInputRef.value.toLowerCase()}&page=${page}&limit=9`
            );
          });
        }
      });
      // exercisesListRef.innerHTML = '';
      // getExercisesByUrl(
      //   `https://energyflow.b.goit.study/api/exercises?muscles=${exercisesSearchInputRef.value}&page=1&limit=9`
      // ).then(data => {
      //   if (data.length === 0) {
      //     return;
      //   } else {
      //     data.results.forEach(exercise => {
      //       exercisesListRef.insertAdjacentHTML(
      //         'afterbegin',
      //         bodyPartsExercisesMarkup(exercise)
      //       );
      //     });
      //     setupPagination(exercise.totalPages);
      //   }
      // });
    });
  }
}
