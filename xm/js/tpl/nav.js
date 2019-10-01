$(() => {
    $(".left-r").hover(function () {
        $(this).children(".w").stop().slideToggle(1);
    })
    $(".for").eq(3).hover(function () {
        $(this).children(".dt-cw").stop().slideToggle(1);
    })
})


