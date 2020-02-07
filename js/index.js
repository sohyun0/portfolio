//gnb버튼
$(".gnb_list li:nth-child(1)").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $("header").offset().top - 80 }, 500);
});
$(".gnb_list li:nth-child(2)").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $("#wrap").offset().top - 80 }, 500);
});
$(".gnb_list li:nth-child(3)").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $(".portfolio").offset().top - 80 }, 500);
});
$(".gnb_list li:nth-child(4)").click(function(e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: $(".contact").offset().top - 80 }, 500);
});

//탑버튼
$(".top").click(function(e) {
  e.preventDefault();
  $("html,body")
    .stop()
    .animate({ scrollTop: 0 }, 1000, "swing");
});
