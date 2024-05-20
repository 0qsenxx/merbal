const favoritesList = document.querySelector(".favorites-exercises__list")
localStorage.setItem("favorites", JSON.stringify([{ 'name': 'ga' }]))
if (localStorage.getItem("favorites")) {
    const favorites = JSON.parse(localStorage.getItem("favorites"))
    if (favorites.length) {
        favoritesMarkUp(favorites)
    } else {
        favoritesList.innerHTML = `<div class="favorites-info">
        <img class="favorites-info-img" src="../../images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future😊</p>
    </div>`
    }
} else {
    favoritesList.innerHTML = `<div class="favorites-info">
        <img class="favorites-info-img" src="./images/favorites/dumbbell.png" alt="dumbbell">
        <p class="favorites-info-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future😊</p>
    </div>`
}

function favoritesMarkUp(array) {
    const markUp = array.map(item =>
        `<li class="exercises__item">
        <div class="exercises__wrap">
            <h3 class="exercises-card__title">${item.name}</h3>
            <p class="exercises-card__category">${item.filter}</p>
        </div>
       </li>`
    )
    favoritesList.innerHTML = markUp.join("")
}