const favoritesList = document.querySelector(".favorites-exercises__list")
localStorage.setItem("favorites", JSON.stringify([{ "_id": "64f389465ae26083f39b1ab2", "bodyPart": "back", "equipment": "barbell", "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/1316.gif", "name": "barbell bent arm pullover", "target": "lats", "description": "These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.", "rating": 3, "burnedCalories": 324, "time": 3, "popularity": 959 }, { "_id": "64f389465ae26083f39b17bf", "bodyPart": "back", "equipment": "barbell", "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0034.gif", "name": "barbell decline bent arm pullover", "target": "lats", "description": "These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.", "rating": 3, "burnedCalories": 329, "time": 3, "popularity": 3 }]))
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
        <button data-id=${item._id} type=button class="show-more">Show More</button>
       </li>`
    )
    favoritesList.innerHTML = markUp.join("")
}