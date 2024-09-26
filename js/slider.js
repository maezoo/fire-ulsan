var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  autoplay: { delay: 9000, },
  loop: true,
  // slidesPerView: 1,
});


var swiper = new Swiper(".mySwiper_2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: { delay: 3000, },

});

// =====================================

