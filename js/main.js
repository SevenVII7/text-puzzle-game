$(function () {
// tile mouse actions
	$('.hd-sec-alliance').on('mouseover', '.img_content', function () {
		$(this).children('.hd-photo').css({'transform': 'scale(' + $(this).attr('data-scale') + ')'});
	})
	$('.hd-sec-alliance').on('mouseout', '.img_content', function () {
		$(this).children('.hd-photo').css({'transform': 'scale(1)'});
	})
	$('.hd-sec-alliance').on('mousemove', '.img_content', function (e) {
		$(this).children('.hd-photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'});
	})

// img lazy load
	$("img.lazyLoad").unveil(100,function(){
		$(this).on('load', function() {
			this.style.opacity = 1;
		});
	});

// scroll trigger video play
	$(document).ready(function() {
		// Get media - with autoplay disabled (audio or video)
		var media = $('#videoHero');
		var tolerancePixel = 40;

		function checkMedia(){
			// Get current browser top and bottom
			var scrollTop = $(window).scrollTop() + tolerancePixel;
			var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

			media.each(function(index, el) {
				var yTopMedia = $(this).offset().top;
				var yBottomMedia = $(this).height() + yTopMedia;

				if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
					$(this).get(0).play();
				} else {
					$(this).get(0).pause();
				}
			});
		}
		$(document).on('scroll', checkMedia);
	});

// smooth scrollTo
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').stop(0, 1).animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

// vertical nav dots
	$(window).on('load scroll', function () {

		//scrollUp btn
		if ($(this).scrollTop() > 0) {
			$('#scrollUp').addClass('hd-show');
		} else {
			$('#scrollUp').removeClass('hd-show');
		}
	});

// scrollUp btn
	$('#scrollUp').on('click', function () {
		$("html, body").stop(0, 1).animate({
			scrollTop: 0
		}, 1000);
		return false;
	});


// scrollReveal
	// Changing the defaults
	window.sr = ScrollReveal({
		reset: false,
		mobile: true,
		duration: 600,
		origin: 'bottom',
		distance: '50px',
		opacity: 0,
		scale: 0.8,
		easing: 'cubic-bezier(.38,.02,.52,1.35)'
	});
	sr.reveal( ".topAnimate", { 
	    origin: 'top', 
	    distance: '50px'
	  });
	  sr.reveal( ".bottomAnimate", { 
	    origin: 'bottom', 
	    distance: '50px'
	  });
	  sr.reveal( ".leftAnimate", { 
	    origin: 'left', 
	    distance: '50px'
	  });
	  sr.reveal( ".rightAnimate", { 
	    origin: 'right', 
	    distance: '50px'
	  });
	  sr.reveal( ".opacityAnimate", {
	    origin: 'top', 
	    opacity: 0,
	    delay:250,
	    distance: '50px'
	  });
	  sr.reveal( ".scaleAnimate", {
	    scale: 0.65
	  });


	var freezeItem = $('#hd_freezeDescript li');

	sr.reveal('#hd_freeze #hd_sec_chokes .col40', {
		reset: true,
		mobile: false,
		scale: 1,
		opacity: 1,
		viewFactor: 0.7,
		duration: 400,
		origin: 'left',
		distance: '0',
		// Callbacks that fire for each triggered element reveal, and reset.
		beforeReveal: function (domEl) {
			freezeItem.eq($(domEl).data('target') - 1).addClass('on');
		},
		beforeReset: function (domEl) {
			freezeItem.eq($(domEl).data('target') - 1).removeClass('on');
		}
	})


	sr.reveal('.hd_sec_overclock .img_top', {
        reset: true,
        mobile: true,
        viewFactor: 0.8,
        duration: 1500,
        opacity:0,
        origin: 'left',
        scale: 1,
        distance: '20%'
    })

    sr.reveal('#hd #hd_optimem', {
        reset: true,
        distance: '20px',
        duration: 500,
        scale: 1,
		easing: 'ease-in',
		afterReveal: function () {
			$("#hd .rog_go").css("opacity","1");
			$("#hd .rog_go").addClass("black_go");
			setTimeout(function(){
				$("#hd .rog_go").css("opacity","0");
				$("#hd .rog_go").removeClass("black_go");
            },2250); 
		},
    })
});


// // power
// 	var M11F_filter = $('#M11F_filter li'),
// 		M11F_content = $('#M11F_content li');

// 	M11F_filter.on('click', function(){
// 		var $this = $(this),
// 			n = $this.index();
// 		if(n == 3){
			
// 		}else{
// 			$this.addClass('active')
// 				.siblings().removeClass('active');
// 		}
// 		M11F_content.eq(n).addClass('active').siblings().removeClass('active');
// 	});
