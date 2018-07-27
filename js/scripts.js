$(document).ready(function(){
	$(".s-nav-link").on("click", function(){
		var newBl = $(this).attr("href");
		if( $(newBl).hasClass("show") != true){
			$(".sub-nav.show").removeClass("show");
			$(".s-nav-link.open").removeClass("open");
		}
		$(this).toggleClass("open");
		$(newBl).toggleClass("show");
		return false;
	});
	$(".sub-nav a").on("click", function(){
		if( $(this).hasClass("active") != true )
		{
			$(this).parent().parent().parent().find(".active").removeClass("active");
			$(this).toggleClass("active");
		}
		setTimeout(function(){
			$(".sub-nav.show").removeClass("show");
			$(".s-nav-link.open").removeClass("open");
		}, 300);
		return false;
	});

	$(".mobile-sbm-filter").on("click", function(){
		$("body").toggleClass("show-filter");
		return false;
	});

	$(".selectable").selectable();

	
	// filter-price
	var filtSlider = $("#slider-price");
	var filtSliderval = $("#slider-price-val");
	$(filtSlider).html("");
	$(filtSlider).slider({
		range:true,
		min:1500,max:5000,values:[1500,5000],
		slide: function( event, ui ) {
		var filtSlider = $("#slider-price");
		$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+ui.values[0]+'</i>');
		$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+ui.values[1]+'</i>');
		}
	});
	$(filtSliderval).find(".amount").val($(filtSlider).slider("values",0)+" - "+$(filtSlider).slider("values", 1));
	$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+$(filtSlider).slider("values",0)+'</i>');
	$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+$(filtSlider).slider("values",1)+'</i>');
	
	
// filter-old
	var filtSlider = $("#slider-old");
	var filtSliderval = $("#slider-old-val");
	$(filtSlider).html("");
	$(filtSlider).slider({
		range:true,
		min:18,max:65,values:[18,65],
		slide: function( event, ui ) {
		var filtSlider = $("#slider-old");
		$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+ui.values[0]+'</i>');
		$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+ui.values[1]+'</i>');
		}
	});
	$(filtSliderval).find(".amount").val($(filtSlider).slider("values",0)+" - "+$(filtSlider).slider("values", 1));
	$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+$(filtSlider).slider("values",0)+'</i>');
	$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+$(filtSlider).slider("values",1)+'</i>');
// filter-height
	var filtSlider = $("#slider-height");
	var filtSliderval = $("#slider-height-val");
	$(filtSlider).html("");
	$(filtSlider).slider({
		range:true,
		min:140,max:200,values:[140,180],
		slide: function( event, ui ) {
		var filtSlider = $("#slider-height");
		$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+ui.values[0]+'</i>');
		$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+ui.values[1]+'</i>');
		}
	});
	$(filtSliderval).find(".amount").val($(filtSlider).slider("values",0)+" - "+$(filtSlider).slider("values", 1));
	$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+$(filtSlider).slider("values",0)+'</i>');
	$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+$(filtSlider).slider("values",1)+'</i>');
// filter-weight
	var filtSlider = $("#slider-weight");
	var filtSliderval = $("#slider-weight-val");
	$(filtSlider).html("");
	$(filtSlider).slider({
		range:true,
		min:40,max:100,values:[40,100],
		slide: function( event, ui ) {
		var filtSlider = $("#slider-weight");
		$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+ui.values[0]+'</i>');
		$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+ui.values[1]+'</i>');
		}
	});
	$(filtSliderval).find(".amount").val($(filtSlider).slider("values",0)+" - "+$(filtSlider).slider("values", 1));
	$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+$(filtSlider).slider("values",0)+'</i>');
	$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+$(filtSlider).slider("values",1)+'</i>');
// filter-size
	var filtSlider = $("#slider-size");
	var filtSliderval = $("#slider-size-val");
	$(filtSlider).html("");
	$(filtSlider).slider({
		range:true,
		min:0,max:5,values:[0,4],
		slide: function( event, ui ) {
		var filtSlider = $("#slider-size");
		$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+ui.values[0]+'</i>');
		$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+ui.values[1]+'</i>');
		}
	});
	$(filtSliderval).find(".amount").val($(filtSlider).slider("values",0)+" - "+$(filtSlider).slider("values", 1));
	$(filtSlider).find(".ui-slider-handle").eq(0).html('<i>'+$(filtSlider).slider("values",0)+'</i>');
	$(filtSlider).find(".ui-slider-handle").eq(1).html('<i>'+$(filtSlider).slider("values",1)+'</i>');
});
$(function() {
	$('#thumbs').carouFredSel({
		synchronise: ['#images', false, true],
		auto: false,
		width: 291,
		prev: '#prev',
		next: '#next',
		items: {
			visible: 4,
			start: -1
		},
		scroll: {
			onBefore: function( data ) {
				data.items.old.eq(1).removeClass('selected');
				data.items.visible.eq(1).addClass('selected');
			}
		},
	});

	$('#images').carouFredSel({
		auto: false,
		items: 1,
		scroll: {
			fx: 'fade'
		}
	});

	$('#thumbs img').click(function() {
		$('#thumbs').trigger( 'slideTo', [this, -1] );
	});
	$('#thumbs img:eq(1)').addClass('selected');
});

$('.owl-carousel').owlCarousel({
    items: 2,
    margin: 30,
    nav: true,
    loop: true
})

