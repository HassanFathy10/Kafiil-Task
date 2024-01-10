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
    const userToggle = document.querySelector('.profile');
    userToggle.classList.toggle('activeUser');
}
// Add a click event listener to remove class active user when i clicked in any location 
document.addEventListener('click', (event) => {
    const userToggle = document.querySelector('.profile');
    if (!userToggle.contains(event.target)) {
        // Remove the 'activeUser' class
        userToggle.classList.remove('activeUser')
    }
});
// toggale button
const toggleButton = () => {
    var button = document.getElementById('toggleButton');
    button.classList.toggle('activeButton');
}
// wishlist
const toggleWishlist = (event) => {
    const icon = event.currentTarget;
    icon.classList.toggle('active');
    if (icon.classList.contains('active')) {
        icon.classList.remove('uil', 'uil-heart-alt');
        icon.classList.add('fa-solid', 'fa-heart');
    } else {
        icon.classList.remove('fa-solid', 'fa-heart');
        icon.classList.add('uil', 'uil-heart-alt');
    }
};

// swiper 
