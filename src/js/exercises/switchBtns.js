const exercisesBtnsListRef = document.querySelector('.exercises-btns__list');
const exercisesBtnsRef = document.querySelectorAll('exercises__button');

export default function switchexercisesBtns(evt) {
  // exercisesBtnsRef.forEach(btn => {
  //   if (btn.classList.contains('exercises-active-button')) {
  //     btn.classList.remove('exercises-active-button');
  //   }
  // })
  let activeButton = null;
  activeButton = exercisesBtnsListRef.querySelector('button');
  if (activeButton) {
    activeButton.classList.add('exercises-active-button');
  }
}
