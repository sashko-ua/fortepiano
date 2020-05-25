$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }
    });
    
    $('a[href^="#"]').bind("click", function(e){
        const anchor = $(this);
        $('html, body').stop().animate({
         scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
});

