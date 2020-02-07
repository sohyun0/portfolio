$(".gnb-depth1 li")
  .mouseenter(function() {
    $(this)
      .children(".gnb-depth2")
      .stop()
      .slideDown();
  })
  .mouseleave(function() {
    $(this)
      .children(".gnb-depth2")
      .stop()
      .slideUp();
  });
