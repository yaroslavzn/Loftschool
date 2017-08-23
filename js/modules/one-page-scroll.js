$(function() {

	var sections = $('section');
		display = $('.main-content'),
		inScroll = false;

	var performTransition = function(sectionEq) {

		if (!inScroll) {
			inScroll = true;

			var position = (sectionEq * -100) + '%'; 

			display.css({
				'transform': 'translateY('+ position +')',
				'-webkit-transform': 'translateY('+ position +')'
			});

			sections.eq(sectionEq).addClass('active-section')
				.siblings().removeClass('active-section');

			setTimeout(function() {
				inScroll = false;
				$('.points__item').eq(sectionEq).addClass('points__item--active')
					.siblings().removeClass('points__item--active');
			}, 1300);
		}

		
	}

	var defineSection = function(sections) {
		var activeSection = sections.filter('.active-section');
		return {
			activeSection: activeSection,
			nextSection: activeSection.next(),
			prevSection: activeSection.prev()
		}
	}

	$('.wrapper').on('wheel', function(e) {

		var deltaY = e.originalEvent.deltaY;
		var section = defineSection(sections);

		if (deltaY > 0 && section.nextSection.length) { // scroll up
			

			performTransition(section.nextSection.index());
		}

		if (deltaY < 0 && section.prevSection.length) { // scroll down
			
			performTransition(section.prevSection.index());
		}

	});

	$(document).on('keydown', function(e) {

		var section = defineSection(sections);

		switch (e.keyCode) {
			case 40: {
				if (section.nextSection.length) {
					performTransition(section.nextSection.index());
				}
				break;
			};

			case 38: {
				if (section.prevSection.length) {
					performTransition(section.prevSection.index());
				}
				break;
			};
		}
	});

	$('[data-scroll-to]').on('click', function(e) {
		e.preventDefault();

		var elem = $(e.target);
		var sectionNum = parseInt(elem.attr('data-scroll-to'));

		performTransition(sectionNum);
	})
});