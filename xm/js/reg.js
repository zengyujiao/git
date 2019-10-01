$(function(){
    let phone = $(".form-phone");
    let phone1 = $(".form-phone1");
    let phone2 = $(".form-phone2");
    let phone3 = $(".form-phone3");
    let phone4 = $(".form-phone4");
    let msgCodeBtn = $("#msgCodeBtn")
    let btn = $(".form-button");
    let num;
    let passwordVal = "";

    let phoneReg = /^1[3-9]\d{9}$/;
    let name = /^[a-zA-Z]{6,8}$/;
    let paddss = /^[a-zA-Z0-9]{6,16}$/;

    // (new Captcha({ lineNum: 10, dotNum: 20, length: 6, fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
    //     console.log(r, '验证++++');
    //     imageCodeVal = r;
    // });

    /* 监听发送短信验证码 */
    msgCodeBtn.click(function () {
        console.log(this);
        /* 001-先获取手机号码 */
        phone.trigger("blur"); /* 自动触发失去焦点的事件 */
        // 接收返回值
        let flag = phone.parents(".form-item4").hasClass("con");
        if (flag) {
            alert("手机号码不正确！请重新输入");
            return;
        }
        else {
            /* 开启倒计时 */
            let timeCount = 60;
            let timer = setInterval(function() {
                timeCount--;
                msgCodeBtn.text(`${timeCount} 秒`);
                if (timeCount == 0) {
                    clearInterval(timer);
                    msgCodeBtn.text(`发送短信验证码`);
                }
            }, 1000);
            function getRandom(min, max) {
                return parseInt(Math.random() * (max - min + 1)) + min
            }

            function formatterDateTime() {
                var date = new Date()
                var month = date.getMonth() + 1
                var datetime = date.getFullYear() +
                    "" // "年"
                    +
                    (month >= 10 ? month : "0" + month) +
                    "" // "月"
                    +
                    (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate()) +
                    "" +
                    (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours()) +
                    "" +
                    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes()) +
                    "" +
                    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
                return datetime;
            }

            // num = getRandom(1000, 9999);
            num = 999;
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/28-1',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '105009', //这里需要改成自己的appid
                    "showapi_sign": '51084e3ee1f34d5c86af6e0e3506a8fa', //这里需要改成自己的应用的密钥secret
                    "mobile": phone.val().trim(),
                    "content": `{\"name\":\"运气\",\"code\":\"${num}\",\"minute\":\"3\",\"comName\":\"国庆节快乐\"}`,
                    "tNum": "T150606060601",
                    "big_msg": ""
                },
                error: function(XmlHttpRequest, textStatus, errorThrown) {
                    alert("操作失败!");
                },
                success: function(result) {
                    console.log(result) //console变量在ie低版本下不能用
                    alert(result.showapi_res_code)
                }
            });
        }

    });
    phone4.blur(function() {
        var val = $(this).val().trim();
        if (val.length == 0) {
            $(this).siblings(".text-san4").text("短信验证不能为空");
            $(this).addClass("con");
        } else {
            if (num != val) {
                $(this).siblings(".text-san4").text("短信验证不确认");
                $(this).addClass("con");
            } else {
                $(this).siblings(".text-san4").css("display","none");
                $(this).removeClass("con");
            }
        }
    })

    phone.blur(function(e){
        e.preventDefault();
        let val = $(this).val().trim();
        if(val.length == 0){
            $(this).siblings(".text-san").text("手机号码不能为空");
            $(this).addClass("con");
        }
        else{
            if(!phoneReg.test(val)){
                $(this).siblings(".text-san").text("手机号码格式不正确");
                $(this).addClass("con");
            }
            else{
                $(this).siblings(".text-san").css("display","none");
                $(this).removeClass("con");
            }
        }
    })
    btn.click(function (e) {
        console.log(this);
        e.preventDefault();
        $(this).siblings(".imgbox").stop().slideToggle(1);
    })

    phone1.blur(function(e){
        e.preventDefault();
        let val = $(this).val().trim();
        if(val.length == 0){
            $(this).siblings(".text-san1").text("用户名不能为空");
            $(this).addClass("con");
        }
        else{
            if(!name.test(val)){
                $(this).siblings(".text-san1").text("用户名格式不正确");
                $(this).addClass("con");
            }
            else{
                $(this).siblings(".text-san1").css("display","none");
                $(this).removeClass("con");
            }
        }
    })
    phone2.blur(function(e){
        e.preventDefault();
        let val = $(this).val().trim();
        if(val.length == 0){
            $(this).siblings(".text-san2").text("密码不能为空");
            $(this).addClass("con");
        }
        else{
            if(!paddss.test(val)){
                $(this).siblings(".text-san2").text("密码格式不正确");
                $(this).addClass("con");
            }
            else{
                $(this).siblings(".text-san2").css("display","none");
                $(this).removeClass("con");
                passwordVal = val;
            }
        }
    })
    phone3.blur(function (e) {
        e.preventDefault();
            var val = $(this).val().trim();
            if (val.length == 0) {
                $(this).siblings(".text-san3").text("确认密码不能为空");
                $(this).addClass("con");
            }
            else {
                if (passwordVal != val) {
                    $(this).siblings(".text-san3").text("两次输入的密码不一至");
                    $(this).addClass("con");
                }
                else {
                    $(this).siblings(".text-san3").css("display","none");
                    $(this).removeClass("con");
                }
            }
    })

    // 点击注册
    let sub = $(".form-submit")
    sub.click(function (e) {
        e.preventDefault();
        let userText = phone1.val();
        let phoneText = phone.val();
        // let mas = phone4.val();
        let passwordAText = phone2.val();
        let passwordBText = phone3.val();

        let isSuccess = $(".con").length == 0 && userText && phoneText && passwordAText && passwordBText;
        console.log(isSuccess);
        if (!isSuccess) {
            alert("请完善信息");
        }
        else {
            $.ajax({
                type: "post",
                url: "../sever/reg.php",
                data: `username=${userText}&phone=${phoneText}&password=${passwordAText}`,
                dataType: "json",
                success: function (response) {
                    if (response.status == "success") {
                        alert(response.data.msg);
                        window.location.href = "./home.html";
                    }
                    else {
                        alert(response.data.msg);
                    }
                }
            });
        }
    })


})