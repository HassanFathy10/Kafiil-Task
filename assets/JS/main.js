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
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
// checkbox logic
// Button click event to toggle the state of checkboxes
let selectAllBtn = document.getElementById('selectAllBtn');
selectAllBtn.addEventListener('click', function () {
    let checkboxes = document.getElementsByClassName('checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
});
// Counter
let counter = 3;
let counterMoney = 300;
let updateCounter = () => {
    document.getElementById('counter').innerHTML = counter;
};
let updatePrice = () => {
    document.getElementById('price').innerHTML = counterMoney;
};

let increment = () => {
    counter++;
    updateCounter();
};
let decrement = () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
};
let incrementMoney = () => {
    counterMoney += 100;
    updatePrice();
}
let decrementMoney = () => {
    if (counterMoney >= 100) {
        counterMoney -= 100;
        updatePrice();
    }
};

// user post or comment 
function postReview() {
    // Get the value from the textarea
    let userReviewText = document.getElementById('userReview').value;
    let userRating = parseInt(document.getElementById('userRating').value);
    // Create elements for the new review
    let newReviewContainer = document.createElement('article');
    newReviewContainer.classList.add('head-review');
    // Create user image
    let userImage = document.createElement('img');
    userImage.src = './assets/img/user.jpg';
    userImage.alt = 'Person';
    userImage.classList.add('user-image');

    // Create container for userName, reviewTime, and reviewPost
    let userInfoContainer = document.createElement('article');
    userInfoContainer.classList.add('user-info-container');

    // Create username element
    let userName = document.createElement('span');
    // user name what i need
    userName.innerText = 'Ahmed Ali';

    // Create review time element
    let reviewTime = document.createElement('span');
    reviewTime.classList.add('review-time');
    reviewTime.innerText = 'Just now'; 

    // Create review post element
    let reviewPost = document.createElement('article');
    reviewPost.classList.add('review-post');

    // Create review paragraph element
    let reviewParagraph = document.createElement('p');
    reviewParagraph.innerText = userReviewText;

    // Create rating container
    let ratingContainer = document.createElement('article');
    ratingContainer.classList.add('rating-container');

    // Create rating element with stars based on user input
    let rating = document.createElement('article');
    rating.classList.add('rating-s');

    for (let i = 1; i <= 5; i++) {
        let starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star', i <= userRating ? 'filled' : 'empty');
        rating.appendChild(starIcon);
    }

    // Append the elements
    reviewPost.appendChild(reviewParagraph);
    userInfoContainer.appendChild(userName);
    userInfoContainer.appendChild(reviewTime);
    userInfoContainer.appendChild(reviewPost);
    userInfoContainer.appendChild(ratingContainer);
    newReviewContainer.appendChild(userImage);
    newReviewContainer.appendChild(userInfoContainer);

    // Find the parent dynamically
    var userReviewSection = document.querySelector('.user-review');
    var parentElement = userReviewSection.parentElement;

    // Insert the new review before the user review section
    parentElement.insertBefore(newReviewContainer, userReviewSection);
  }
