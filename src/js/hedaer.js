const openBtn = document.querySelector(".btn-open-modal");
const closeBtn = document.querySelector(".btn-close-modal");
const modal = document.querySelector(".header-modal");


openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
