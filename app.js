window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});


const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");




open.addEventListener("click", () => {
    open.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.classList.toggle("fade-in");
})

close.addEventListener("click", () => {
    open.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    close.classList.toggle("hidden");
    menu.classList.toggle("fade-in");
})


