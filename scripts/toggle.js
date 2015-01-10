$(document).ready(function() {

	$('#menu-trigger').click(function() {

		$('#nav').slideToggle();

	});

	$('.not-clicked').click(function() {

		$(this).toggleClass('clicked');

	});

	$('#nav li').click(function() {

		$('#nav li').removeClass('clicked');
		$(this).addClass('clicked');

	});

});