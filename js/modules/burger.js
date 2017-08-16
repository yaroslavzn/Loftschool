$(document).ready(function() {

	var burgerBtn = $('.burger');
	var navMenu = $('.nav');
	var logo = $('.logo');

	burgerBtn.on('click', function() {
		navMenu.toggleClass('nav--active');
		burgerBtn.toggleClass('burger--active');
		logo.toggleClass('logo--active');
	});

});