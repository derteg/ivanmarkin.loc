$(document).ready(function() {
	document.getElementById("elements-placeholder_01").innerHTML = icon1;
	document.getElementById("elements-placeholder_02").innerHTML = icon2;
});

$(function(){
	$('.js-centr').fullScreenH();
	$('.js-mainpromo_slider').promoSlider();
	$('.js-mainpromo_slider').imgBGcover();
});


(function($){
	$.fn.fullScreenH = function(){
		var block = this,
			childBlock = $('.js-centr_cont', block);

			$(window).on('load resize', heightChange);

			function heightChange(){
				var wH = $(window).height();

				block.height(wH - 80);
				childBlock.height(wH - 40);
				$('.slick-slide').height(wH);
				
			}
	}
})(jQuery);


(function($){
	$.fn.promoSlider = function(){
		var slider = this;

		slider.slick({
			arrows: false,
			adaptiveHeight: true,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
			speed: 500
		});
	}
})(jQuery);


(function($){
	$.fn.imgBGcover = function(){
		var imgBox = $('.b-slide_wrap');
		
		$(window).on('load resize', function(){
			imgBox.each(function() {
			    //set size
			    var th = $(this).height(),//box height
			        tw = $(this).width(),//box width
			        im = $(this).children('img'),//image
			        ih = im.height(),//inital image height
			        iw = im.width();//initial image width
			    if (ih>iw) {//if portrait
			        im.addClass('ww').removeClass('wh');//set width 100%
			    } else {//if landscape
			        im.addClass('wh').removeClass('ww');//set height 100%
			    }
			    //set offset
			    var nh = im.height(),//new image height
			        nw = im.width(),//new image width
			        hd = (nh-th)/2,//half dif img/box height
			        wd = (nw-tw)/2;//half dif img/box width
			    if (nh<nw) {//if portrait
			        im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
			    } else {//if landscape
			        im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
			    }
			});
		});
	}
})(jQuery);