$(document).ready(function() {
$(function(){
    
    var $burger = $('.burger');

    var $menu = $('.menu');

    $burger.click(function(){

        if($menu.hasClass('active')){
        
            $menu.slideDown('normal').removeClass('active');
        }
        else{
            
            $menu.slideUp('normal').addClass('active');
        }
    });

});
 $(function(){
    $("a[href*=#]").on("click", function(e){
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

    var $menu = $('.menu');

    $close.click(function(){

        if($menu.hasClass('active')){
        
            $menu.slideDown('normal').removeClass('active');
        }
        else{
            
            $menu.slideUp('normal').addClass('active');
        }
    });

});
$(function(){
    
    var $close2 = $('.nav-item');

    var $menu = $('.menu');

    $close2.click(function(){

        if($menu.hasClass('active')){
        
            $menu.slideDown('normal').removeClass('active');
        }
        else{
            
            $menu.slideUp('normal').addClass('active');
        }
    });

});
$(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
            $('.navbar').addClass('fixed slideInDown animated');
        }
        else {
            $('.navbar').removeClass('fixed slideInDown animated');
        }
    });
$(window).scroll(function(){
        if ($(window).scrollTop() > 200) {
            $('.menu').removeClass('bag');
        }
        else{
            $('.menu').removeClass('bag');
        }
    });
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
$(function() {
	$(".meter > span").each(function() {
		$(this)
			.data("origWidth", $(this).width())
			.width(0)
			.animate({
				width: $(this).data("origWidth")
			}, 25000);
	});
});
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".owl-carousel-first");
	owl.owlCarousel({
		items : 1,
		loop:true,
		nav:true,
		dots:true,
		navText: ["<img src='img/arrow-left-hover.png'>","<img src='img/arrow-right-hover.png'>"],
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
var owl = $(".owl-carousel-second");
	owl.owlCarousel({
		items : 1,
		loop:true,
		nav:true,
		center: true,
		dots:true,
		navText: ["<img src='img/arrow_left_red.png'>","<img src='img/arrow_right_red.png'>"],
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});
$(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});
$(function(){
		var $close3 = $('a#modal, a#modal1, a#modal2, a#modal3');
    $close3.click(function(){
    		$('.navbar').removeClass('fixed');
    });
});

$(function(){
		var $close6 = $('#modal_close, #overlay');
    $close6.click(function(){
    		$('.navbar').addClass('fixed');
    });
});
$(function(){
		var $close10 = $('a#modal_send_open, a#modal_send_open1');
    $close10.click(function(){
    		$('.navbar').removeClass('fixed');
    });
});

$(function(){
		var $close7 = $('#modal_close_2, #overlay');
    $close7.click(function(){
    		$('.navbar').addClass('fixed');
    });
});
// 4. Пишем скрипт который создаст и отобразит карту Google Maps на странице.

// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 55.760186, lng: 37.618711},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 18,

        // Добавляем свои стили для отображения карты
        styles: [
        {
        	"featureType": "administrative",
        	"elementType": "all",
        	"stylers": [
        	{
        		"saturation": "-100"
        	}
        	]
        },
        {
        	"featureType": "administrative.province",
        	"elementType": "all",
        	"stylers": [
        	{
        		"visibility": "off"
        	}
        	]
        },
        {
        	"featureType": "landscape",
        	"elementType": "all",
        	"stylers": [
        	{
        		"saturation": -100
        	},
        	{
        		"lightness": 65
        	},
        	{
        		"visibility": "on"
        	}
        	]
        },
        {
        	"featureType": "poi",
        	"elementType": "all",
        	"stylers": [
        	{
        		"saturation": -100
        	},
        	{
        		"lightness": "50"
        	},
        	{
        		"visibility": "simplified"
        	}
        	]
        },
        {
        	"featureType": "road",
        	"elementType": "all",
        	"stylers": [
        	{
        		"saturation": "-100"
        	}
        	]
        },
        {
        	"featureType": "road.highway",
        	"elementType": "all",
        	"stylers": [
        	{
        		"visibility": "simplified"
        	}
        	]
        },
        {
        	"featureType": "road.arterial",
        	"elementType": "all",
        	"stylers": [
        	{
        		"lightness": "30"
        	}
        	]
        },
        {
        	"featureType": "road.local",
        	"elementType": "all",
        	"stylers": [
        	{
        		"lightness": "40"
        	}
        	]
        },
        {
        	"featureType": "transit",
        	"elementType": "all",
        	"stylers": [
        	{
        		"saturation": -100
        	},
        	{
        		"visibility": "simplified"
        	}
        	]
        },
        {
        	"featureType": "water",
        	"elementType": "geometry",
        	"stylers": [
        	{
        		"hue": "#ffff00"
        	},
        	{
        		"lightness": -25
        	},
        	{
        		"saturation": -97
        	}
        	]
        },
        {
        	"featureType": "water",
        	"elementType": "labels",
        	"stylers": [
        	{
        		"lightness": -25
        	},
        	{
        		"saturation": -100
        	}
        	]
        }
        ]
      });

    // Создаем маркер на карте
    var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 55.760018, lng: 37.618712},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'Наш маркер: Большой театр',

        // Укажем свою иконку для маркера
        icon: 'img/marker.png'
      });

    // Создаем наполнение для информационного окна
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Большой театр</h1>'+
    '<div id="bodyContent">'+
    '<p>Госуда́рственный академи́ческий Большо́й теа́тр Росси́и, или просто Большой театр — один из крупнейших' +
    'в России и один из самых значительных в мире театров оперы и балета.</p>'+
    '<p><b>Веб-сайт:</b> <a href="http://www.bolshoi.ru/" target="_blank">bolshoi.ru</a>'+
    '</p>'+
    '</div>'+
    '</div>';

    // Создаем информационное окно
    var infowindow = new google.maps.InfoWindow({
    	content: contentString,
    	maxWidth: 400
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    marker.addListener('click', function() {
    	infowindow.open(map, marker);
    });

  }
