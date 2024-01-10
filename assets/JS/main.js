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
const userDropdown = () => {
    const userToggle = document.querySelector('.profile')
    userToggle.classList.toggle('activeUser')
}
// toggale button
const toggleButton = () => {
    var button = document.getElementById('toggleButton');
    button.classList.toggle('activeButton');
}