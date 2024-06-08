const openBtn = document.querySelector(".btn-open-modal");
const closeBtn = document.querySelector(".btn-close-modal");
const modal = document.querySelector(".header-modal");

console.log(window.location.pathname);

const modalHome = document.querySelector(".modal-home");
const modalFavorites = document.querySelector(".modal-favorites");

const headerHome = document.querySelector(".header-home");
const headerFavorites = document.querySelector(".header-favorites");


function windowDocument() {
    if(window.location.pathname !== "/fovorites.html") {
        clickHome();
    } else {
        clickFavorites();
    };
};

windowDocument();

function clickHome() {
    modalHome.classList.add("is-active");
    headerHome.classList.add("is-active");

    modalFavorites.classList.remove("is-active__f");
    headerFavorites.classList.remove("is-active__f");
};

function clickFavorites() {
    modalFavorites.classList.add("is-active__f");
    headerFavorites.classList.add("is-active__f");

    modalHome.classList.remove("is-active");
    headerHome.classList.remove("is-active");
};


openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
