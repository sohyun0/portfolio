//isotope
$(window).on("load", function() {
  $obj = $(".grid_portfolio").isotope();
});

$(".tab_menu a").on("click", function(e) {
  $(this)
    .addClass("on")
    .siblings()
    .removeClass("on");
  var filterName = $(this).data("filter");
  $obj.isotope({
    filter: filterName
  });
  e.preventDefault();
});
