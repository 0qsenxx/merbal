export { showLoader, hideLoader };

const loaderMakRef = document.querySelector('.mask');

function showLoader() {
  loaderMakRef.classList.remove('is-show-loader');
}

function hideLoader() {
  loaderMakRef.classList.add('is-show-loader');
}
