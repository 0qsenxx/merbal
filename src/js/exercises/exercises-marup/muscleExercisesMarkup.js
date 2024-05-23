export default function muscleExercisesMarkup({ name, filter }) {
  return `<li class="exercises__item">
    <div class="exercises__wrap">
        <h3 class="exercises-card__title">${
          name[0].toUpperCase() + name.slice(1)
        }</h3>
        <p class="exercises-card__category">${filter}</p>
    </div>
   </li>`;
}
