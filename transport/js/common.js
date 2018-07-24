


$(document).ready(function(){
  $(".owl-1").owlCarousel({
  	items:1,
  	nav:true,
  	dots:false,
  	loop:true
  });
    $(".owl-2").owlCarousel({
  	items:1,
  	nav:true,
  	dots:false,
  	loop:true
  });
   $('.spoiler-title').click(function(){
  	$(this).parent().children('.spoiler-body').slideToggle();
  	return false;
 	});
});

