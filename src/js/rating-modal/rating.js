// const backdropRatingRef = document.querySelector('.backdrop-rating');

// // giveARatingBtnsRef.forEach(btn => {
// //   btn.addEventListener('click', evt => {
// //     backdropRatingRef.classList.toggle('is-hidden-rating');
// //   });
// // });

// if (document.querySelector('.modal-add-rating-btn')) {
//   const giveARatingBtnsRef = document.querySelector('.modal-add-rating-btn');
//   giveARatingBtnsRef.addEventListener('click', evt => {
//     backdropRatingRef.classList.remove('is-hidden-rating');
//   });
// }

const ratingModalStarsListRef = document.querySelector(
  '.rating-modal-stars__list'
);
const ratingModalTextRef = document.querySelector('.rating-modal__text');

ratingModalStarsListRef.addEventListener('click', evt => {
  if (evt.target.nodeName === 'UL') {
    return;
  }

  document
    .querySelector('[data-1="ratingModalStars"] svg')
    .classList.remove('rating-modal-active-star');
  document
    .querySelector('[data-2="ratingModalStars"] svg')
    .classList.remove('rating-modal-active-star');
  document
    .querySelector('[data-3="ratingModalStars"] svg')
    .classList.remove('rating-modal-active-star');
  document
    .querySelector('[data-4="ratingModalStars"] svg')
    .classList.remove('rating-modal-active-star');
  document
    .querySelector('[data-5="ratingModalStars"] svg')
    .classList.remove('rating-modal-active-star');

  if (evt.target.classList.contains('rating-star-color-1')) {
    document
      .querySelector('[data-1="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
      ratingModalTextRef.textContent = '1.0';
      ratingModalTextRef.setAttribute('data-rating', 1);
  }

  if (evt.target.classList.contains('rating-star-color-2')) {
    document
      .querySelector('[data-1="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-2="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
      ratingModalTextRef.textContent = '2.0';
      ratingModalTextRef.setAttribute('data-rating', 2);
  }

  if (evt.target.classList.contains('rating-star-color-3')) {
    document
      .querySelector('[data-1="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-2="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-3="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
      ratingModalTextRef.textContent = '3.0';
      ratingModalTextRef.setAttribute('data-rating', 3);
  }

  if (evt.target.classList.contains('rating-star-color-4')) {
    document
      .querySelector('[data-1="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-2="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-3="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-4="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
      ratingModalTextRef.textContent = '4.0';
      ratingModalTextRef.setAttribute('data-rating', 4);
  }

  if (evt.target.classList.contains('rating-star-color-5')) {
    document
      .querySelector('[data-1="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-2="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-3="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-4="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
    document
      .querySelector('[data-5="ratingModalStars"] svg')
      .classList.toggle('rating-modal-active-star');
      ratingModalTextRef.textContent = '5.0';
      ratingModalTextRef.setAttribute('data-rating', 5);
  }
});
