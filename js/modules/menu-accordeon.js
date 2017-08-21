$(function() {
	$('.menu__item-title').on('click', function(e) {
		
		e.preventDefault();

		var element = $(e.target);
		var item = element.closest('.menu__item');
		var items = item.siblings();
		var itemsContent = items.find('.menu__item-text-wrap');
		var content = item.find('.menu__item-text-wrap');
		var reqWidth = content.find('.menu__item-text').outerWidth();

		

		if(!item.hasClass('menu__item--active')) {
			items.removeClass('menu__item--active');
			item.addClass('menu__item--active');

			itemsContent.css({
				'width': 0
			});

			content.css({
				'width': reqWidth
			});

		} else {

			item.removeClass('menu__item--active');

			content.css({
				'width': 0
			});
		}
	});
});