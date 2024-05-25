import getExercise from './exercisesAPI.js';
const body = document.querySelector('body');
const openBtn = document.querySelectorAll('.show-more');
openBtn.forEach(el => el.addEventListener('click', onOpenModal));

async function onOpenModal(e) {
    let isFavorite = false;
    const exerciseId = e.currentTarget.dataset.id;
    const currentExercise = await getExercise(exerciseId);
    if (localStorage.getItem('favorites')) {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites.map(el => el._id).includes(currentExercise._id)) {
            isFavorite = true;
        }
    }
    renderExerciseModal(currentExercise, isFavorite);
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', onClose);
    renderFavoriteBtb(isFavorite);

    const addRatingBtn = document.querySelector('.modal-add-rating-btn');

    function renderFavoriteBtb(isFavorite) {
        const favoriteWrap = document.querySelector('.favorite-wrap');
        if (isFavorite) {
            favoriteWrap.innerHTML = `<button type="button" class="modal-remove-favorite-btn modal-btn">Remove from 
          <svg class="modal-btn-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>`;
            const removeFavoriteBtn = document.querySelector(
                '.modal-remove-favorite-btn'
            );
            removeFavoriteBtn.addEventListener('click', onRemoveFavorite);
        } else {
            favoriteWrap.innerHTML = `<button type="button" class="modal-add-favorite-btn modal-btn">Add to favorite<svg class="modal-btn-heart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166Z" stroke="#F6F6F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></button>`;
            const addToFavoriteBtn = document.querySelector(
                '.modal-add-favorite-btn'
            );
            addToFavoriteBtn.addEventListener('click', onAddFavorite);
        }
    }

    function onAddFavorite() {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        isFavorite = true;
        favorites.push(currentExercise);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavoriteBtb(isFavorite);
    }
    function onRemoveFavorite() {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        isFavorite = false;
        const newFavorites = favorites.filter(el => el._id !== currentExercise._id);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        renderFavoriteBtb(isFavorite);
    }
}

function onClose() {
    const backdrop = document.querySelector('.backdrop');
    backdrop.remove();
}

function renderExerciseModal(
    {
        name,
        equipment,
        burnedCalories,
        bodyPart,
        popularity,
        _id,
        time,
        target,
        rating,
        gifUrl,
    },
    isFavorite
) {
    const markUp = `
    <div class="backdrop">
<div class="modal">
<div class="modal-content">
<button class="close-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8332 1.16666L1.1665 12.8333M1.1665 1.16666L12.8332 12.8333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
<div class="modal-img-wrap">
    <img class="modal-img" src="${gifUrl}" alt="exercise">
</div>
<div class="modal-content-wrap">
<div >
    <h2 class="modal-title">${name}</h2>
    <div class="modal-rating">
        <p class="modal-rating-amount">${Math.round(rating)}.0</p>
        <ul class="modal-rating-list">
            ${[1, 2, 3, 4, 5]
            .map((el, i) =>
                i < Math.round(rating)
                    ? `<li class="modal-rating-item"><svg class="modal-rating-stars gold-star"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
                  </svg></li>`
                    : `<li class="modal-rating-item"><svg class="modal-rating-stars grey-star"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#1B1B1B20"/>
                    </svg></li>`
            )
            .join('')}
        </ul>
    </div>
    <ul class="modal-details-list">
        <li class="modal-details-item">
            <p class="modal-details-item-title">Target</p>
            <p class="modal-details-item-text">${target}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Body Part</p>
            <p class="modal-details-item-text">${bodyPart}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Equipment</p>
            <p class="modal-details-item-text">${equipment}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Popular</p>
            <p class="modal-details-item-text">${popularity}</p>
        </li>
        <li class="modal-details-item">
            <p class="modal-details-item-title">Burned calories</p>
            <p class="modal-details-item-text">${burnedCalories}/${time} min</p>
        </li>
    </ul>
    <p class="modal-info">This refers to your core muscles, which include the rectus abdominis, obliques, and
        transverse abdominis.
        They're essential for maintaining posture, stability, and generating force in many movements. Exercises
        that target the abs include crunches, leg raises, and planks.</p>
    </div >
    <div class="modal-btn-wrap">
    <div class="favorite-wrap"></div>
<button type="button" class="modal-add-rating-btn modal-btn">Give a rating</button>
    </div >
</div >
</div >
</div >
</div >
    `;
    body.insertAdjacentHTML('afterbegin', markUp);
}
