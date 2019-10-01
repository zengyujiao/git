$(() => {
    getCatInfo()
    function getCatInfo() {
        $.ajax({
            type: "get",
            url: "../sever/addCartData.php",
            dataType: "json",
            success: function (data) {
                console.log(data);
                targetData = data;

                let res = data.map(function (ele) {
                    let html = `
                    <div class="item-list" data-index=${ele.id}>
                        <div class="item-form">
                            <div class="pcolumn">
                                <input class="checkbox-class" type="checkbox"}>
                            </div>
                            <div class="pgoods">
                                <div class="pimg"><img src=${ele.src} alt=""></div>
                                <div class="pname">${ele.name}</div>
                            </div>
                            <div class="pprice">${ele.price}</div>
                            <div class="pquantity">
                                <button class="btnA">-</button>
                                <input type="text" class="num" value=${ele.num}>
                                <button class="btnB">+</button>
                            </div>
                            <div class="psum">${ele.total}</div>
                            <div class="pops">删除</div>
                        </div>
                    </div>
                       `;
                    return html;
                }).join("");
                $(".message-footer").html(res);
            }
        });
    }
    // 删除商品
    $(".message-footer").on("click", ".pops", function () {
        let ok = confirm("你确定要删除吗");
        if (ok) {
            $.ajax({
                type:"get",
                url: "../sever/removeData.php",
                data: "id=" + 21,
                success: function (response) { }
            });
        }
        allNum();
    })
    // 加
    $(".message-footer").on("click", ".btnB", function () {
        let num = $(this).prev().val();
        $(this).prev().val(++num);
        // 计算,拿到父元素的上一个标签
        let price = $(this).parent().prev().text().slice(1) * 1;
        let all = (num * price).toFixed(2);
        $(this).parent().next().html("￥" + all);
        allNum();

    })
    // 减
    $(".message-footer").on("click", ".btnA", function () {
        let num = $(this).next().val();
        $(this).next().val(--num);
         // 计算,拿到父元素的上一个标签
         let price = $(this).parent().prev().text().slice(1) * 1;
         let all = (num * price).toFixed(2);
        $(this).parent().next().html("￥" + all);
        allNum();
    })
    // 复选框设置总价   item-form
    function checkedArr() {
        let arr = [];
       
        $(".checkbox-class").each(function (index, item) {
            if ($(item).prop("checked")) {
                arr.push(index);
            }
            
        });
        return arr;
    }
    function allNum() {
        let checkall = checkedArr();
        let total = 0;
        checkall.forEach(function (index) {
            total += $(".message-footer .psum").eq(checkall[index]).text().slice(1) * 1;
        });
        $(".cart-txt").html(`总价:￥${total.toFixed(2)}`);

         // 控制全选
         let len = $(".checkbox-class").length;  // 复选框的个数
         let ach = $(".checkbox-class:checked").length;
        if (len == ach) {
            $(".cart-box input").prop("checked", true);
        }
        else {
            $(".cart-box input").prop("checked", false);
        }
    }
    $(".message-footer").on("click", ".checkbox-class", function () {
        allNum();
    })

    // 全选
    $(".cart-box input").click(function () {
        let isok = $(".cart-box input").prop("checked");
        $(".checkbox-class").prop("checked",isok);
        allNum();
    })

    // 清空购物车
    $(".cartopt").click(function (e) {
        e.preventDefault();
        let checkall = checkedArr().reverse();
        let ko = confirm("您确定要删除全部吗？")
        if (ko) {
            checkall.forEach(function (item,index) {
                let kl = $(".message-footer .item-list").eq(checkall[index]).remove();
                $.ajax({
                    type:"get",
                    url: "../sever/rem.php",
                    data: "id=" + 22,
                    success: function (response) {}
                });
            })
        }
        allNum();

        
    })

    

})