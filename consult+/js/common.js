$(document).ready(function() {

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
	$(".na").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
$(document).ready(function(){
    $('.scroll').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
$(".owl-carousel-first").owlCarousel({
		items : 4,
		dots:true,
		loop: true,
		margin: 30,
		autoplay: true
	});
$(".owl-carousel-second").owlCarousel({
		items : 5,
		dots:false,
		loop: true,
		margin: 0,
		nav: true,
		navText: ["<img src='img/arrow_left.png'>","<img src='img/arrow_right.png'>"]
	});
$(".owl-carousel-third").owlCarousel({
		items : 1,
		dots:true,
		autoplay: true,
		autoplayTimeout: 7000
	});
$(".owl-carousel-fourth").owlCarousel({
		items : 1,
		dots:true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000
	});
$(".owl-carousel-fiveth").owlCarousel({
		items : 1,
		dots:true,
		loop: true
	});
$(".owl-carousel-sixth").owlCarousel({
		items : 1,
		dots:true,
		loop: true
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