$(document).ready(function() {
  $(".other-slide").slick({
    infinite: true /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */,
    slidesToShow: 3 /* 화면에 보여질 이미지 갯수*/,
    slidesToScroll: 1 /* 스크롤시 이동할 이미지 갯수 */,
    arrows: true /* 화살표 */,
    dots: true /* 아래점 */,
    autoplay: true /* 자동으로 다음이미지 보여주기 */,
    autoplaySpeed: 2000 /* 자동으로 다음이미지 넘기는 시간 */,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
