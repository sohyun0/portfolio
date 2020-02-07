// design-tab영역

var tabList = $(".design-mini-slide>li");

var tabCon = $(".design-tab>img");
tabList.on("click", function(e) {
  e.preventDefault();
  var i = $(this).index();
  console.log(i);
  //tab-list
  tabList.removeClass("on");
  tabList.eq(i).addClass("on");
  //tab-content
  tabCon.removeClass("on");
  tabCon.eq(i).addClass("on");
});
