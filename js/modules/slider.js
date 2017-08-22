$(function() {

	var moveSlide = function(container, slideNum) {
		var items = container.find('.burgers__item'),
			activeSlide = items.filter('.active'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index();
			list = container.find('.burgers__list'),
			duration = 500;

			if (reqItem.length) {
				list.animate({
					'left' : -reqIndex * 100 + '%'
				}, duration, function() {
					activeSlide.removeClass('active');
					reqItem.addClass('active');
				});
			}
	}

	$('.slider__btn').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			container = $this.closest('.burgers__slider'),
			items = $('.burgers__item', container),
			activeItem = items.filter('.active'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();

		if ($this.hasClass('slider__btn--next')) { // next slide

			if (nextItem.length) {

				moveSlide(container, nextItem.index());

			} else {

				moveSlide(container, items.first().index());

			}

			

		} else { // prev slide

			if (prevItem.length) {

				moveSlide(container, prevItem.index());

			} else {

				moveSlide(container, items.last().index());

			}

			

		}

		

	});


});