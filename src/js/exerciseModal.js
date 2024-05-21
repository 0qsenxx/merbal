import getExercise from "./exercisesAPI.js"
const body = document.querySelector("body")
const openBtn = document.querySelectorAll(".show-more")
openBtn.forEach(el => el.addEventListener("click", onOpenModal))
async function onOpenModal(e) {
    const exerciseId = e.currentTarget.dataset.id
    const currentExercise = await getExercise(exerciseId)
    renderExerciseModal(currentExercise)
    const closeBtn = document.querySelector(".close-btn")
    closeBtn.addEventListener("click", onClose)
}
function onClose() {
    const backdrop = document.querySelector(".backdrop")
    backdrop.remove()
}

function renderExerciseModal({ name, equipment, burnedCalories, bodyPart, popularity, _id, time, target, rating, gifUrl }) {
    const markUp = `
    <div class="backdrop">
<div class="modal">
<div class="modal-content">
<button class="close-btn">X</button>
<div class="modal-img-wrap">
    <img class="modal-img" src="${gifUrl}" alt="exercise">
</div>
<div class="modal-content-wrap">
    <h2 class="modal-title">${name}</h2>
    <div class="modal-rating">
        <p class="modal-rating-amount">${rating}.0</p>
        <ul class="modal-rating-list">
            <li class="modal-rating-item"><svg class="modal-rating-stars gold-star">
                    <use href="./images/symbol-defs.svg#icon-star"></use>
                </svg></li>
            <li class="modal-rating-item"><svg class="modal-rating-stars grey-star">
                    <use href="./images/symbol-defs.svg#icon-star"></use>
                </svg></li>
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
    <div class="modal-btn-wrap">
        <button type="button" class="modal-add-favorite-btn modal-btn">Add to favorite<svg
                class="modal-btn-heart">
                <use href="./images/symbol-defs.svg#icon-heart"></use>
            </svg></button>
        <button type="button" class="modal-add-rating-btn modal-btn">Give a rating</button>
    </div>
</div>
</div>
</div>
</div>
    `
    body.insertAdjacentHTML("afterbegin", markUp)
}