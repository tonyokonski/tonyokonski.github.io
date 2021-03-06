$(document).ready(function() {

	//caching for frequently used elements

	var $notClicked = $('.not-clicked');
	var $nav = $('#nav');


	//responsive menu accordion toggle

	$('#menu-trigger').click(function() {

		$nav.slideToggle();

	});

	//responsive menu button on/off indication

	$notClicked.click(function() {

		$(this).toggleClass('clicked');

	});

	//responsive menu list highlight function. Needs work.

	$('#nav li').click(function() {

		if ($(window).width() < 600) {

			$('#nav li').removeClass('clicked');
			$(this).addClass('clicked');
			$nav.slideToggle();
			$notClicked.toggleClass('clicked');

		};

	});

	//skill graph animation. probably a more elegant solution; needs to be DRY-er

	$('#my-graph').click(function() {

		var skillbarWidth = $('.skill-bar').first().width();
		//alert(skillbarWidth);
		
		if (skillbarWidth < 100) {
			
			$('.skill-bar').each(function(){

				$(this).animate({
					width:$(this).attr('data-percentage'),
					backgroundColor:$(this).attr('data-color')
				}, 1200 );

			});

		} else {

			$('.skill-bar').each(function(){

				$(this).animate({
					width:'5%',
					backgroundColor:'white'
				}, 1200 );

			});
			
		};
	});

	//menu hide on scroll attempt. Solution found at https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c. 

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}

});
