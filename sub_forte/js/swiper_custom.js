$(document).ready(function() {
  var swiper = new Swiper(".swiper-container", {
    loop: true, // 무한 루프 슬라이드, 반복이 되며 슬라이드가 끝이 없다.
    speed: 500, // 슬라이드 속도 설정--> 지정하지 않을시 기본값은 300
    autoheight: true,
    autoplay: true,
    pagination: {
      // 페이징 설정
      el: ".swiper-pagination",
      clickable: true // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, // 슬라이드간 간격
    slidesPerGroup: 3 // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  });
});
