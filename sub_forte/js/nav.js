$(".gnb-depth1 li").on("click", function() {
  $(this)
    .children(".gnb-depth2")
    .stop()
    .slideToggle();
});
