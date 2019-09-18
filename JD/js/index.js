$(function(){
    // 导航左边
    $(".left-ul li").eq(1).hover(function(){
        $(this).children(".leftul").stop().slideToggle(1);
    })

    // 导航右边
    $(".right-ul li").eq(3).hover(function(){
        $(this).children(".rightul").stop().slideToggle(1);
    })
    $(".right-ul>.sy").hover(function(){
        $(this).children(".rightul2").stop().slideToggle(1);
    })
    $(".right-ul>.sy1").hover(function(){
        $(this).children(".rightul3").stop().slideToggle(1);
    })

    $(".ber .picture").click(function(){
        console.log("--------");
        // 清空这个标签
        $(".ber").empty();
    })

    // logo ---------------
    $(".list")
})
