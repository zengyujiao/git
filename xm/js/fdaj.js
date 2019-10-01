$(() => {
    $(".menulist .ls1").hover(function () {
        console.log("-------------");
        $(this).children(".men").stop().slideDown(1);
    })
    // 调用
    $("#exzoom").exzoom({
        autoPlay: false,
    });

    // ----------购物车-----------
    // $(".p-text1").click(function () {
    //     $("prod_123").animate_from_to("#cart");
    // })

    $(".stock2").mouseenter(function () {
        $(this).addClass("cn1");
        $(this).children(".tg1").stop().slideDown(1);
    })
    $(".stock2").mouseleave(function () {
        $(this).removeClass("cn1");
        $(this).children(".tg1").stop().slideUp(1);
    })
    $(".p-item").on("mouseenter", ".item-p", function () {
        $(this).children(".mp").stop().slideDown(1);
        $(this).children(".mp1").stop().slideDown(1);
    })
    $(".p-item").on("mouseleave", ".item-p", function () {
        $(this).children(".mp").stop().slideUp(1);
        $(this).children(".mp1").stop().slideUp(1);
    })

})