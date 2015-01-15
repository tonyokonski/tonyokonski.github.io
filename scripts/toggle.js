$(document).ready(function() {

	//responsive menu accordion toggle

	$('#menu-trigger').click(function() {

		$('#nav').slideToggle();

	});

	//responsive menu button on/off indication

	$('.not-clicked').click(function() {

		$(this).toggleClass('clicked');

	});

	//responsive menu list highlight function. Needs work.

	$('#nav li').click(function() {

		$('#nav li').removeClass('clicked');
		$(this).addClass('clicked');
		$('#nav').slideToggle();
		$('.not-clicked').toggleClass('clicked');

	});

	//skill graph animation

	$('#my-graph').click(function() {

		$('.skill-bar').each(function(){

			$(this).animate({
				width:$(this).attr('data-percentage')
			}, 3000 );

		});

	});

});