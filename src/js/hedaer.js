const openBtn = document.querySelector(".btn-open-modal");
const closeBtn = document.querySelector(".btn-close-modal");
const modal = document.querySelector(".header-modal");



const modalHome = document.querySelector("[data-modalHome]");
const modalFavorites = document.querySelector("[data-modalFavorites]");

const headerHome = document.querySelector("[data-headerHome]");
const headerFavorites = document.querySelector("[data-headerFavorites]");


function windowDocument() {
    if(window.location.pathname !== "/fovorites.html") {
        clickHome()
    } else {
        clickFavorites()
    }
}

windowDocument();

function clickHome() {
    modalHome.classList.add("is-active");
    headerHome.classList.add("is-active");

    modalFavorites.classList.remove("is-active");
    headerFavorites.classList.remove("is-active");
};

function clickFavorites() {
    modalFavorites.classList.add("is-active");
    headerFavorites.classList.add("is-active");

    modalHome.classList.remove("is-active");
    headerHome.classList.remove("is-active");
};


openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
