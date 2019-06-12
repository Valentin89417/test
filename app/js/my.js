// Пракрутка вверх
$("#back-top").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 800);
    return false;
});

/* gallery */
$(".filter-button").click(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    }
    else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

    }
});

if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
}
$(this).addClass("active");

// Скрипт для Палитры цветов натяжных потолков
$('.color-palette__btn ').click(function() {
    $('.color-palette__img').attr("src", $(this).attr('img-color-src'))
});
