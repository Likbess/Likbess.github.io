$(function() {

$('.owl-carousel').owlCarousel({
	responsive : {
		200 : {
			items: 1,
			dots: true,
			loop: true
		},
		700 : {
			items: 2,
			dots: true, 
			loop: true
		},
		992 : {
			items: 3,
			dots: false,
			touchDrag: false,
			mouseDrag: false,
			freeDrag: false,
			pullDrag: false
		}
	}
});

});

$(function(){
    
    var $burger = $('.fa-bars');

    var $menu = $('.menu-mobile');

    $burger.click(function(){

            $menu.slideDown('normal').addClass('active');

    });

});
 $(function(){
    $("a.scroll").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
$(function(){
    
    var $close = $('.fa-times');

    var $menu = $('.menu-mobile');

    $close.click(function(){

            $menu.slideUp('normal').removeClass('active');
   
    });

});
$(function(){
    
    var $close2 = $('.nav-item');

    var $menu = $('.menu-mobile');

    $close2.click(function(){
            
            $menu.slideUp('normal').removeClass('active');
        
    });

});
