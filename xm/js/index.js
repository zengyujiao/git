$(function () {
    $(".rs").html(Cookie.get("username"));


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

    $(".head-item").on("mouseenter",function () {
        $(".itemimg").addClass(".itemimg ig");
    })
    $(".head-item").on("mouseleave", function () {
        $(".itemimg").removeClass("ig")
    })
    $(".item-children").on("mouseenter",function () {
        $(".itemimg1").addClass(".itemimg1 ig");
    })
    $(".item-children").on("mouseleave", function () {
        $(".itemimg1").removeClass("ig")
    })
    
    // ------logo------------

    $(".headercode").hover(function(){
        $(this).children(".ce").stop().slideToggle(1);
    })

    
    // ---------身/临/食/感--------------

    $(".tab-head").on("click", ".tab-item", function () {
        $(this).addClass("active3").siblings().removeClass("active3");
        let index = $(this).index();
        $(".tab-body").eq(index).addClass(".tab-body cur").siblings().removeClass("cur");
    })
    // --------------精选礼盒------------------
    let goods = (function () {
        $.ajax({
            type: "get",
            url: "../sever/wrapper.php", 
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="glist-item">
                            <div class="caitem">
                                <img class="glist-src" src="${ele.src}">
                                <div class="name">${ele.name}</div>
                                <div class="price">${ele.price}</div>
                                <div class="des">${ele.des}</div>
                            </div>
                        </li>`
                }).join("");
                $(".glist").html(html);
            }
        });
    $(".glist").on("mouseenter", ".glist-item", function () {
        let name = this.querySelector('.name');
        let src = this.querySelector(".glist-src");
        $(name).addClass("name-ca");
        $(src).css({
            "margin-top":"10px",
            "transition":"all 2s",
        });
    })
    $(".glist").on("mouseleave", ".glist-item", function () {
        let name = this.querySelector('.name');
        let src = this.querySelector(".glist-src");
        $(name).removeClass("name-ca");
        $(src).css("margin-top","");
    })
        })
    goods();
    // --------火锅诱惑--------------
    let good = (function () {
        $.ajax({
            type: "get",
            url: "../sever/wrapper1.php", 
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="glist-item">
                            <div class="caitem">
                                <img class="glist-src" src="${ele.src}">
                                <div class="name">${ele.name}</div>
                                <div class="price">${ele.price}</div>
                                <div class="des">${ele.des}</div>
                            </div>
                        </li>`
                }).join("");
                $(".go").html(html);
            }
        });
            $(".go").on("mouseenter", ".glist-item", function () {
                let name = this.querySelector('.name');
                let src = this.querySelector(".glist-src");
                $(name).addClass("name-ca");
                $(src).css({
                    "margin-top":"10px",
                    "transition":"all 1s",
                });
            })
            $(".go").on("mouseleave", ".glist-item", function () {
                let name = this.querySelector('.name');
                let src = this.querySelector(".glist-src");
                $(name).removeClass("name-ca");
                $(src).css("margin-top","");
            })
        })
    good();

    // ---------------------------
    let goo = (function () {
        $.ajax({
            type: "get",
            url: "../sever/wrapper2.php", 
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="glist-item">
                            <div class="caitem">
                                <img class="glist-src" src="${ele.src}">
                                <div class="name">${ele.name}</div>
                                <div class="price">${ele.price}</div>
                                <div class="des">${ele.des}</div>
                            </div>
                        </li>`
                }).join("");
                $(".glist1").html(html);
            }
        });
            $(".glist1").on("mouseenter", ".glist-item", function () {
                let name = this.querySelector('.name');
                let src = this.querySelector(".glist-src");
                $(name).addClass("name-ca");
                $(src).css({
                    "margin-top":"10px",
                    "transition":"all 1s",
                });
            })
            $(".glist1").on("mouseleave", ".glist-item", function () {
                let name = this.querySelector('.name');
                let src = this.querySelector(".glist-src");
                $(name).removeClass("name-ca");
                $(src).css("margin-top","");
            })
        })
    goo();

    // ----------------------------------
    let go = (function () {
        $.ajax({
            type: "get",
            url: "../sever/wrapper3.php", 
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="glist-item">
                            <div class="caitem">
                                <img class="glist-src" src="${ele.src}">
                                <div class="name">${ele.name}</div>
                                <div class="price">${ele.price}</div>
                                <div class="des">${ele.des}</div>
                            </div>
                        </li>`
                }).join("");
                $(".glist2").html(html);
            }
        });
            $(".glist2").on("mouseenter", ".glist-item", function () {
                let name = this.querySelector('.name');
                let src = this.querySelector(".glist-src");
                $(name).addClass("name-ca");
                $(src).css({
                    "margin-top":"10px",
                    "transition":"all 1s",
                });
            })
            $(".glist2").on("mouseleave", ".glist-item", function () {
                let name = this.querySelector('.name');
                let src = this.querySelector(".glist-src");
                $(name).removeClass("name-ca");
                $(src).css("margin-top","");
            })
        })
    go();
    
    // <!-- **********京/东/生/鲜************** -->
        $.ajax({
            type: "get",
            url: "../sever/03.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="ca-item">
                            <a href="../html/fdaj.html">
                            <div class="caitem">
                                <img class="ca-src" src="${ele.src}">
                                <div class="name">${ele.name}</div>
                                <div class="price">${ele.price}</div>
                            </div>
                            </a>
                        </li>`
                }).join("");
                $(".ca").html(html);
            }
        });
        $(".ca").on("mouseenter", ".ca-item", function () {
            let name = this.querySelector('.name');
            let src = this.querySelector(".ca-src");
            $(name).addClass("name-ca");
            $(src).css({
                "margin-top":"10px",
                "transition":"all 2s",
            });
        })
        $(".ca").on("mouseleave", ".ca-item", function () {
            let name = this.querySelector(".name")
            let src = this.querySelector(".ca-src")
            $(name).removeClass("name-ca");
            $(src).css("margin-top","");
        })
    
        $.ajax({
            type: "get",
            url: "../sever/02.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="ct-item">
                            <a href="../html/fdaj.html">
                                <div class="ctitem">
                                    <img class="ct-src" src="${ele.src}">
                                    <div class="name">${ele.name}</div>
                                    <div class="price">￥${ele.price}</div>
                                </div>
                            </a>
                        </li>`
                }).join("");
                $(".ct").html(html);
            }
        });
        $(".ct").on("mouseenter", ".ct-item", function () {
            let name = this.querySelector('.name');
            let src = this.querySelector(".ct-src");
            $(name).addClass("name-ca");
            $(src).css({
                "margin-top":"10px",
                "transition":"all 2s",
            });
        })
        $(".ct").on("mouseleave", ".ct-item", function () {
            let name = this.querySelector(".name")
            let src = this.querySelector(".ct-src")
            $(name).removeClass("name-ca");
            $(src).css("margin-top","");
        })
    
        $.ajax({
            type: "get",
            url: "../sever/04.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="te-item">
                            <a href="../html/fdaj.html">
                                <div class="ctitem">
                                    <img class="ct-src" src="${ele.src}">
                                    <div class="name">${ele.name}</div>
                                    <div class="price">${ele.price}</div>
                                </div>
                            </a>
                        </li>`
                }).join("");
                $(".te").html(html);
            }
        });
        $(".te").on("mouseenter", ".te-item", function () {
            let name = this.querySelector('.name');
            let src = this.querySelector(".ct-src");
            $(name).addClass("name-ca");
            $(src).css({
                "margin-top":"10px",
                "transition":"all 2s",
            });
        })
        $(".te").on("mouseleave", ".te-item", function () {
            let name = this.querySelector(".name")
            let src = this.querySelector(".ct-src")
            $(name).removeClass("name-ca");
            $(src).css("margin-top","");
        })
    
        $.ajax({
            type: "get",
            url: "../sever/05.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="cgo-item">
                            <a href="../html/fdaj.html">
                                <div class="ctitem">
                                    <img class="ct-src" src="${ele.src}">
                                    <div class="name">${ele.name}</div>
                                    <div class="price">${ele.price}</div>
                                </div>
                            </a>
                        </li>`
                }).join("");
                $(".cgo").html(html);
            }
        });
        $(".cgo").on("mouseenter", ".cgo-item", function () {
            let name = this.querySelector('.name');
            let src = this.querySelector(".ct-src");
            $(name).addClass("name-ca");
            $(src).css({
                "margin-top":"10px",
                "transition":"all 2s",
            });
        })
        $(".cgo").on("mouseleave", ".cgo-item", function () {
            let name = this.querySelector(".name")
            let src = this.querySelector(".ct-src")
            $(name).removeClass("name-ca");
            $(src).css("margin-top","");
        })
        $.ajax({
            type: "get",
            url: "../sever/07.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="gd-item">
                            <a href="../html/fdaj.html">
                                <div class="ctitem">
                                    <img class="ct-src" src="${ele.src}">
                                    <div class="name">${ele.name}</div>
                                    <div class="price">${ele.price}</div>
                                </div>
                            </a>
                        </li>`
                }).join("");
                $(".gd").html(html);
            }
        });
        $(".gd").on("mouseenter", ".gd-item", function () {
            let name = this.querySelector('.name');
            let src = this.querySelector(".ct-src");
            $(name).addClass("name-ca");
            $(src).css({
                "margin-top":"10px",
                "transition":"all 2s",
            });
        })
        $(".gd").on("mouseleave", ".gd-item", function () {
            let name = this.querySelector(".name")
            let src = this.querySelector(".ct-src")
            $(name).removeClass("name-ca");
            $(src).css("margin-top","");
        })    
    // --------------brands
    $.ajax({
        type: "get",
        url: "../sever/brands1.php",
        dataType: "json",
        success: function (reaponse) {
            let data = reaponse.data;
            let html = data.map((ele) => {
                return `
                    <li class="cd-item">
                        <img class="cd-src" src="${ele.src}">
                    </li>`
            }).join("");
            $(".cd").html(html);
        }
    });
    $(".cd").on("mouseenter", ".cd-item", function () {
        let src = this.querySelector(".cd-src");
        $(src).css({
            "margin-top":"-10px",
            "transition":"all 1s",
        });
    })
    $(".cd").on("mouseleave", ".cd-item", function () {
        let src = this.querySelector(".cd-src")
        $(src).css("margin-top","");
    })  

    $.ajax({
        type: "get",
        url: "../sever/brands2.php",
        dataType: "json",
        success: function (reaponse) {
            let data = reaponse.data;
            let html = data.map((ele) => {
                return `
                    <li class="bd-item">
                        <img class="bd-src" src="${ele.src}">
                    </li>`
            }).join("");
            $(".bd").html(html);
        }
    });
    $(".bd").on("mouseenter", ".bd-item", function () {
        let src = this.querySelector(".bd-src");
        $(src).css({
            "margin-top":"-10px",
            "transition":"all 1s",
        });
    })
    $(".bd").on("mouseleave", ".bd-item", function () {
        let src = this.querySelector(".bd-src")
        $(src).css("margin-top","");
    })   
        $.ajax({
            type: "get",
            url: "../sever/brands3.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="brn-item">
                            <img class="brn-src" src="${ele.src}">
                        </li>`
                }).join("");
                $(".brn").html(html);
            }
        });
        $(".brn").on("mouseenter", ".brn-item", function () {
            let src = this.querySelector(".brn-src");
            $(src).css({
                "margin-top":"-10px",
                "transition":"all 1s",
            });
        })
        $(".brn").on("mouseleave", ".brn-item", function () {
            let src = this.querySelector(".brn-src")
            $(src).css("margin-top","");
        })    
        $.ajax({
            type: "get",
            url: "../sever/brands4.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="bra-item">
                            <img class="bra-src" src="${ele.src}">
                        </li>`
                }).join("");
                $(".bra").html(html);
            }
        });
        $(".bra").on("mouseenter", ".bra-item", function () {
            let src = this.querySelector(".bra-src");
            $(src).css({
                "margin-top":"-10px",
                "transition":"all 1s",
            });
        })
        $(".bra").on("mouseleave", ".bra-item", function () {
            let src = this.querySelector(".bra-src")
            $(src).css("margin-top","");
        })
        
        // <!-- ***************食／鲜／者／说***************** -->
        $.ajax({
            type: "get",
            url: "../sever/06.php",
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="co-item">
                            <div class="coitem">
                                <img class="co-src" src="${ele.src}">
                                <img class="co-src1" src="${ele.src1}">
                                <div class="name">${ele.name}</div>
                                <div class="classname">${ele.classname}</div>
                                <div class="date">${ele.date}</div>
                            </div>
                        </li>
                        `
                }).join("");
                $(".co").html(html);
            }
        });
    
    // ------------------------------------------
})