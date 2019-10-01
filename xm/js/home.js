$(function () {
   
    $(".login-tabl li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        let index = $(this).index();
        $(".login-box").eq(index).addClass("active").siblings().removeClass("active");
    })

    $(".login-img").mouseenter(function(){
        $(this).children(".in").animate({
            "left":"30px",
        },800);
        setTimeout(function(){
            $(".login-img").children(".imglog").stop().fadeIn(1);
        },800)
    })

    $(".login-img").mouseleave(function(){
        $(this).children(".in").animate({
            "left":"100px",
        },800);
        $(this).children(".imglog").stop().fadeOut(1);
    })

    let name = $(".nameInput");
    let password = $(".passwordInput");
    let oCheckbox = $(".ck");

    let nameReg =  /^[a-zA-Z]{6,8}$/;
    let passwordReg = /^\d{6}$/;

    name.blur(function(e){
        e.preventDefault();
        let val = $(this).val().trim();
        if(val.length == 0){
            $(this).next().text("用户名不能为空!");
            $(this).addClass("err");
        }
        else{
            if(!nameReg.test(val)){
                $(this).next().text("用户名不符合规范！");
                $(this).addClass("err");
            }
            else{
                $(this).siblings(".spaninput").css("display","none");
                $(this).removeClass("err");
            }
        }
    })

    password.blur(function(){
        let val = $(this).val().trim();
        if(val.length == 0){
            $(this).next().text("密码不能为空!");
            $(this).addClass("err");
        }
        else{
            if(!passwordReg.test(val)){
                $(this).next().text("密码不正确！");
                $(this).addClass("err");
            }
            else{
                $(this).siblings(".spaninput1").css("display","none");
                $(this).removeClass("err");
            }
        }
    })

    $(".submitInput").click(function () {
        
        
        $.ajax({
            type: "post",
            url: "../sever/01.php",
            data: `username=${name.val()}&password=${password.val()}`,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    let ck = $(".ck").prop("checked", true);
                    let date = new Date();
                        date.setDate(date.getDate() + 7);
                    // if (ck) {
                        document.cookie = `username=${name.val()};expires=` + date;
                    // }
                    alert(response.data.msg);
                    window.location.href = "./index.html";
                } else {
                    alert(response.data.msg);
                }

            }
        });
    })
    
    


})