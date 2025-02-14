// slide

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  // from here
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
