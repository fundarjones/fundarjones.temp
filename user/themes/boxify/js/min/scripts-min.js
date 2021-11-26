

    $(".nav-toggle").click(function () {
        $(this).toggleClass("active"), $(".overlay-boxify").toggleClass("open");
    }),
    $(".overlay").click(function () {
        $(".nav-toggle").removeClass("active"), $(".overlay-boxify").removeClass("open");
    });

    $('.overlay ul li a').click(function(){
        $('overlay-boxify').removeClass('open'), $('.nav-toggle').removeClass('active')
    })

