// slide

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  // from here
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // till here
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
