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

$('.frontpage-seo-row .show-text-link').on('click', function (e) {
    e.preventDefault();
    $('.frontpage-seo-row .section-text').toggleClass('expanded');
    $('.frontpage-seo-row .show-text-link').toggleClass('rotated');
});

$('#tabs-frontpage a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});