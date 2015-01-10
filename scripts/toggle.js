$(document).ready(function() {

	$('#menu-trigger').click(function() {

		$('#nav').slideToggle();

	});

	$('.not-clicked').click(function() {

		$(this).toggleClass('clicked');

	});

	$('#nav li').click(function() { //close, not there yet; maybe add an 'and' for an active state

		if ( $("#nav li").hasClass('clicked') ) {

  			$("#nav li").removeClass('clicked');

  		}

  		else {

  			$(this).addClass('clicked');

  		};

	});

});