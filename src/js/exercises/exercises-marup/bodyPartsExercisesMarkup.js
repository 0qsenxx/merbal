export default function bodyPartsExercisesMarkup({
  rating,
  name,
  burnedCalories,
  time,
  bodyPart,
  target,
}) {
  return `<li class="body-parts__item">
    <div class="body-parts-header-box">
      <div class="body-parts-header-train-box">
        <p class="body-parts-workout__text">WORKOUT</p>
        <p class="body-parts-raiting__text">
          ${rating}<span class="body-parts-raiting__span">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 14 13" fill="none">
            <path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
          </svg>
        </span>
        </p>
      </div>
      <div class="body-parts-header-start-box">
        <p class="body-parts-start__text">
          Start
          <span class="body-parts-start__span">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1" stroke="#1B1B1B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        </p>
      </div>
    </div>
    <h2 class="body-parts__title">
      <span class="body-parts-title__span">
        <svg width="14" height="16">
          <use href="../images/symbol-defs.svg#icon-running"></use>
        </svg>
      </span>
      ${name[0].toUpperCase() + name.slice(1)}
    </h2>
    <div class="body-parts-about-box">
      <p class="body-parts-about__title">
        Burned calories:
        <span class="body-parts-about__span">${burnedCalories} / ${
    time
  } min</span>
      </p>
      <p class="body-parts-about__title">
        Body part: <span class="body-parts-about__span">${
          bodyPart[0].toUpperCase() + bodyPart.slice(1)
        }</span>
      </p>
      <p class="body-parts-about__title">
        Target: <span class="body-parts-about__span">${
          target[0].toUpperCase() + target.slice(1)
        }</span>
      </p>
    </div>
  </li>`;
}
