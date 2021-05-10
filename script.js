let toggler = document.querySelector(".nav-bar");
const btnClose = document.querySelector(".btn-close");
let navBlack = document.querySelector(".nav-black");
let navRed = document.querySelector(".nav-red");
let navWhite = document.querySelector(".nav-white");

toggler.addEventListener("click", (e) => {
    navBlack.classList.add("active");
    navRed.classList.add("active");
    navWhite.classList.add("active");
});

btnClose.addEventListener("click", (e) => {
    navBlack.classList.remove("active");
    navRed.classList.remove("active");
    navWhite.classList.remove("active");
});

