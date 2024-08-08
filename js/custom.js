
// Функция для анимации полосы прогресса
// function animateProgressBar(slider) {
//     var $progressBar = $(slider).find('.progress-hero-bar');
//     $progressBar.stop(true, true).css('width', '0');
//     $progressBar.animate({
//         width: '100%'
//     }, slider.vars.slideshowSpeed, 'linear');
// }

// Функция для сброса полосы прогресса
// function resetProgressBar(slider) {
//     var $progressBar = $(slider).find('.progress-hero-bar');
//     $progressBar.stop(true, true).css('width', '0');
// }


$(document).ready(function () {
    $('.item-cat-dgu').each(function () {
        var $itemList = $(this).find('.item-list');
        var $items = $itemList.find('li');
        var $btnDown = $(this).find('.item-btn-down');
        var $itemBody = $(this).find('.item-body');

        // Всегда показываем первые два элемента
        $items.slice(0, 2).addClass('visible');

        if ($items.length > 2) {
            $btnDown.show();

            $btnDown.on('click', function () {
                var isExpanded = $items.slice(2).hasClass('visible');

                if (isExpanded) {
                    $items.slice(2).removeClass('visible');
                    $itemBody.removeClass('expanded');
                    $(this).removeClass('rotate');
                } else {
                    $items.slice(2).addClass('visible');
                    $itemBody.addClass('expanded');
                    $(this).addClass('rotate');
                }
            });
        }
    });
});

$(document).ready(function() {
	$('.frontpage-seo-row .show-text-link').on('click', function(e) {
		e.preventDefault();
		$('.frontpage-seo-row .section-text').toggleClass('expanded');
		$('.frontpage-seo-row .show-text-link').toggleClass('rotated');
	});
});