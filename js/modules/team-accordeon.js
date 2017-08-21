$(document).ready(function() {
	
	$('.team__title-text').on('click', function(e) {
		e.preventDefault();

		var element = $(e.target);
		var item = element.closest('.team__acco-item');
		var items = item.siblings();
		var itemsContent = items.find('.team__user-content-wrap');
		var content = item.find('.team__user-content-wrap');
		var reqHeight = content.find('.team__user-content').outerHeight();


		if (!item.hasClass('team__acco-item--active')) {
			items.removeClass('team__acco-item--active');
			item.addClass('team__acco-item--active');
			
			itemsContent.css({
				'height': 0
			});

			content.css({
				'height': reqHeight
			});

		} else {

			item.removeClass('team__acco-item--active');

			content.css({
				'height': 0
			});

		}

		console.log(reqHeight);
	});
});