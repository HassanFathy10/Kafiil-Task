// Build menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("navbar-link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// user