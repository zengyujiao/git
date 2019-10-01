$(function () {
    $(".er").html(Cookie.get("username"));


    // ------第一个------
    let itemData;
    let getDatWithPage = (page) => {
        $.ajax({
            type: "get",
            url: "../sever/head.php",
            data:"page=" + page,
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="searchlog">
                            <img class="clint" src="${ele.src}">
                            <div class="price">${ele.price}</div>
                            <div class="name">${ele.name}</div>
                            <div class="des">${ele.des}</div>
                        </li>`
                }).join("");
                $(".fix1").html(html);
            }
        });
        $.ajax({
            type: "get",
            url: "../sever/head1.php",
            data:"page=" + page,
            dataType: "json",
            success: function (reaponse) {
                itemData = reaponse;
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="gl-item">
                            <img class="p-img" src="${ele.src}">
                            <div class="price">${ele.price}</div>
                            <div class="name">${ele.name}</div>
                            <div class="des">${ele.des}</div>
                            <div class="clname">${ele.clname}</div>
                            <div class="oper">
                                <a class="p-btn" href="#">${ele.oper}</a>
                                <a class="p-btn" href="#">${ele.oper1}</a>
                                <a class="p-btn" href="#">${ele.oper2}</a>
                            </div>
                        </li>`
                }).join("");
                $(".gl-wrap1").html(html);
            }
        });
    }
    $(".page").find("a").click(function () {
        let index = $(this).index();
        getDatWithPage(index);
    })
    getDatWithPage(0);

    // ---------第二个-----------
    let getWith = (page) => {
        $.ajax({
            type: "get",
            url: "../sever/head-w.php",
            data:"page="+page,
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="gl-item">
                            <img class="p-img" src="${ele.src}">
                            <div class="price">${ele.price}</div>
                            <div class="name">${ele.name}</div>
                            <div class="des">${ele.des}</div>
                            <div class="clname">${ele.clname}</div>
                            <div class="oper">
                                <a class="p-btn" href="#">${ele.oper}</a>
                                <a class="p-btn" href="#">${ele.oper1}</a>
                                <a class="p-btn" href="../html/cart.html">${ele.oper2}</a>
                            </div>
                        </li>`
                }).join("");
                $(".gl-wrap2").html(html);
            }
        });
    }
    $(".page").find("a").click(function () {
        let index = $(this).index();
        getWith(index);
    })
    getWith(0);

    // ---------第三个-------------
    let getWithpage = (page) => {
        $.ajax({
            type: "get",
            url: "../sever/head-w1.php",
            data:"page="+page,
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                let html = data.map((ele) => {
                    return `
                        <li class="gl-item">
                            <img class="p-img" src="${ele.src}">
                            <div class="price">${ele.price}</div>
                            <div class="name">${ele.name}</div>
                            <div class="des">${ele.des}</div>
                            <div class="clname">${ele.clname}</div>
                            <div class="oper">
                                <a class="p-btn" href="#">${ele.oper}</a>
                                <a class="p-btn" href="#">${ele.oper1}</a>
                                <a class="p-btn" href="../html/cart.html">${ele.oper2}</a>
                            </div>
                        </li>`
                }).join("");
                $(".gl-wrap3").html(html);
            }
        });
    }
    $(".page").find("a").click(function () {
        let index = $(this).index();
        getWithpage(index);
    })
    getWithpage(0);


    $(".filter1").on("click", ".fs-tit", function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $(".goodsList").eq(index).addClass(".goodsList cn").siblings().removeClass("cn");
    })

    $(".page").on("click", ".page-l", function () {
        $(this).addClass("pe").siblings().removeClass("pe");
    })

    // ------------购物车---------------
    $(".gl-wrap1").on("click", ".p-btn", function (e) {
        e.preventDefault();
        let index = $(this).parent().parent().index();
        let goodid = itemData.data[index].name;
        let price = itemData.data[index].price;
        
        $.ajax({
            type: "get",
            url: "../sever/addCart.php",
            data: `goodid=${goodid}&price=${price}`,
            dataType: "json",
            success: function(response) {
                console.log(response);
                var text = response["totalRow"];
                $(".catShow").html(text)
            }
        });
    })

    


})