import bodyPartsExercisesMarkup from "./exercises/exercises-marup/bodyPartsExercisesMarkup";
import onOpenModal from './exerciseModal';
const favoritesList = document.querySelector('.favorites-exercises__list');

export function favoritesRender() {
    if (localStorage.getItem('favorites')) {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites.length) {
            favoritesMarkUp(favorites);
        } else {
            favoritesList.innerHTML = `<div class="favorites-info">
            <img class="favorites-info-img" src="../../images/favorites/dumbbell.png" alt="dumbbell">
            <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future😊</p>
        </div>`;
        }
    } else {
        favoritesList.innerHTML = `<div class="favorites-info">
            <img class="favorites-info-img" src="./images/favorites/dumbbell.png" alt="dumbbell">
            <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future😊</p>
        </div>`;
    }
}
favoritesRender()

function favoritesMarkUp(array) {
    const markUp = array.map(
        item => bodyPartsExercisesMarkup(item)
    );
    if (favoritesList) {
        favoritesList.innerHTML = markUp.join('');
    }
    document.querySelectorAll('.body-parts-start__text').forEach(el => el.addEventListener('click', onOpenModal))
}
