$(function () {
   
    let getDatWithPage = (page) => {
        $.ajax({
            type: "get",
            url: "../sever/mc.php",
            data: "page=" + page,
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
                $(".fix").html(html);
            }
        });
        $.ajax({
            type: "get",
            url: "../sever/operdate.php",
            data: "page=" + page,
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                console.log(data);
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
                $(".gl-wrap").html(html);
            }
        });
    }

    $(".page").find("a").click(function () {
        let index = $(this).index();
        getDatWithPage(index);
    })
    getDatWithPage(0);

    // --------第二个----------
    let getPage = (page) => {
        $.ajax({
            type: "get",
            url: "../sever/tit.php",
            data: "page=" + page,
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                console.log(data);
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
                $(".gl-wrap1").html(html);
            }
        });
    }

    $(".page").find("a").click(function () {
        let index = $(this).index();
        getPage(index);
    })
    getPage(0);

    // -----------第三个--------------
    let getDatWith = (page) => {
        $.ajax({
            type: "get",
            url: "../sever/tit1.php",
            data: "page=" + page,
            dataType: "json",
            success: function (reaponse) {
                let data = reaponse.data;
                console.log(data);
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
        getDatWith(index);
    })
    getDatWith(0);


    $(".filter").on("click", ".fs-tit", function () {
        $(this).addClass("active").siblings().removeClass("active")
        let index = $(this).index();
        $(".goodsList").eq(index).addClass(".goodsList cn").siblings().removeClass("cn");
    })

    $(".page").on("click", ".page-l", function () {
        $(this).addClass("pe").siblings().removeClass("pe");
    })
})