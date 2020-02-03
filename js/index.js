
//gnb버튼
$('.gnb_list li:nth-child(1)').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$('header').offset().top-80},500);
});
$('.gnb_list li:nth-child(2)').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$('#wrap').offset().top-80},500);
});
$('.gnb_list li:nth-child(3)').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$('.skills').offset().top-80},500);
});
$('.gnb_list li:nth-child(4)').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$('.portfolio').offset().top-80},500);
});
$('.gnb_list li:nth-child(5)').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$('.contact').offset().top-80},500);
});
//탑버튼
 $('.top').click(function(e){
     e.preventDefault();
     $('html,body').stop().animate({scrollTop:0},1000,'swing');
});


/*탭버튼*/
/*슬라이드바 바둑판 구분*/
$('.transform_icon .trn_i_1').click(function(e){
   e.preventDefault();
    $('.grid_portfolio, .tab_menu').stop().show();
    $('.slide_portfolio').stop().hide();
});
$('.transform_icon .trn_i_2').click(function(e){
   e.preventDefault();
    $('.slide_portfolio').stop().show();
    $('.grid_portfolio, .tab_menu').stop().hide();
});


//바둑판형식 필터
$(window).on('load',function(){
    $obj=$('.grid_portfolio').isotope();
});
        
$('.tab_menu a').on('click',function(e){
    $(this).addClass('on').siblings().removeClass('on');
    var filterName = $(this).data('filter');
    $obj.isotope({
    filter:filterName
    });
    e.preventDefault();
});