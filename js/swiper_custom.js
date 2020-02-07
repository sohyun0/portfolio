$(document).ready(function() {
  var slide = new Swiper(".swiper-container", {
    // loop: true,
    slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, // 슬라이드간 간격
    centeredSlides: 0, //카드슬라이드옵션
    breakpointsInverse: true,
    breakpoints: {
      //반응형
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      980: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 2
      }
    }
  });
});
