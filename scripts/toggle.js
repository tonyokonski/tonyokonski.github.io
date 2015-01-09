$(document).ready(function() {

	$('#menu-trigger').click(function() {

		$('#nav').slideToggle();

	});

	$('.not-clicked').click(function() {

		$(this).toggleClass('clicked');

	});

});