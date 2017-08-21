$(function() {
	$('.burgers__btn--next').on('click', function(e) {
		e.preventDefault();

		var $this = $(this);
		var container = $this.closest('.burgers__list-wrap');
		var items = container.find('.burgers__item');
		var activeSlide = items.filter('active');
		var reqItem = activeSlide.next();
		var reqIndex = reqItem.index();
		var list = container.find('.burgers__list');
		var duration = 500;

		list.animate({
			'left' : -(reqIndex) * 100 + '%'
		}, duration);

	});

});