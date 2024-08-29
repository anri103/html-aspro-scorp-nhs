$('.item-cat-dgu').each(function () {
    var $itemList = $(this).find('.item-list');
    var $items = $itemList.find('li');
    var $btnDown = $(this).find('.item-btn-down');
    var $itemBody = $(this).find('.item-body');

    // Всегда показываем первые два элемента
    $items.slice(0, 2).addClass('visible');

    if ($items.length > 2) {
        $btnDown.show();

        $btnDown.click(function () {
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

// frontpage collapsing seo text
$('.frontpage-seo-row .show-text-link').click(function (e) {
    e.preventDefault();
    $('.frontpage-seo-row .section-text').toggleClass('expanded');
    $('.frontpage-seo-row .show-text-link').toggleClass('rotated');
});

// collapsing area
$('.collapsing-area').each(function() {
    const areaHeight = $(this).data('max-height');
    $(this).css('max-height', areaHeight);
});
$('.collapsing-link').on('click', function(e) {
    e.preventDefault();
    
    const $collapsingArea = $(this).closest('.collapsing-area');
    const $collapsingLink = $(this);
    const maxHeight = $collapsingArea.data('max-height');

    if ($collapsingArea.hasClass('js-expanded')) {
        // Убираем класс js-expanded для плавного закрытия
        $collapsingArea.removeClass('js-expanded').css('max-height', maxHeight);

        // Убираем класс js-rotate у кнопки
        $collapsingLink.removeClass('js-rotate');

        // Плавная прокрутка к началу блока, выше на 150px
        // $('html, body').animate({
        //     scrollTop: $collapsingArea.offset().top - 150
        // }, 500);
    } else {
        // Установка max-height в 'none' перед добавлением класса js-expanded
        $collapsingArea.css('max-height', $collapsingArea.prop('scrollHeight') + 'px');

        // Добавляем класс js-expanded для плавного раскрытия
        $collapsingArea.addClass('js-expanded');

        // Добавляем класс js-rotate к кнопке
        $collapsingLink.addClass('js-rotate');
    }
});