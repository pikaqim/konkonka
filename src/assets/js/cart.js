//获取账号cookie
var name1 = getCookie("user")

//获取大盒子对象
var box = $(".main-container")
console.log(box);

//获取地址栏中的地址 ==>用来在登录成功时，跳转回来的 当前url页面，即会回到购物车页面
var url = location.href

//获取localStorage中的cartList6
var cartList = localStorage.getItem("cartList6")
//把当前cartList字符串转为数组对象
cartList = JSON.parse(cartList) || []
showCart()

function showCart() {
    //判断当前localStorage中是否有内容
    if (cartList.length > 0) {
        //获取全选框是否被选中
        var all1 = cartList.every(item => {
            //判断当前商品是否被选中
            return item.is_select == 1
        })
        //获取当前被选中商品的种类和价格
        var sum = total()
        var str2 = `
        <div class="page-header">
            <h1>购物车<small>Shopping Cart</small></h1>
        </div>
        <div class="cart-container">
            <div class="alert alert-warning" style="display:none">
                您当前未登录，登录后享受会员专属折扣及优惠促销，更可长久保存购物车数据
                <a href="./login.html" class="btn btn-xs btn-danger">立即登录</a>
            </div>
            <div class="row cart-header">
                <div class="col-1 c-ch-check">
                    <label class="control-label">
                        <input type="checkbox" name="selectall" data-checkall=".cart-body input:checkbox[data-ident]" ${all1 ? "checked" : ''}> 全选
                    </label>
                </div>
                <div class="col-5 c-ch-title">商品</div>
                <div class="col-1 c-ch-price">单价</div>
                <div class="col-2 c-ch-quantity">数量</div>
                <div class="col-1 c-ch-amount">小计</div>
                <div class="col-2 c-ch-opt">操作</div>
            </div>
            <div class="cart-body myCart">
        `
        //遍历数组中所有商品
        cartList.forEach(item => {

            var oprice = item.original_price
            if (oprice > '0.00') {
                oprice = item.special_price
            } else {
                oprice = item.original_price
            }

            var str = item.goods_name
            var arr1 = str.split(' ');
            var reg = /\w{4,}/
            var spec_info = (reg.test(arr1[0])) ? arr1[0] : ''

            str2 += `
                <div data-object="goods" class="row goods_887 cart-item">
                    <div class="col-1 c-ci-check">
                        <label class="control-label">
                            <input type="checkbox" name="select" ${item.is_select == 1 ? "checked" : ''} data-id="${item.goods_id}">&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                    </div>
                    <div class="col-5 c-ci-title">
                        <div class="row">
                            <div class="col-3">
                                <a href="./detail.html?id=${item.goods_id}">
                                    <img class="img-thumbnail"
                                        src="${item.goods_small_img1}"
                                        alt="${item.goods_name}">
                                </a>
                            </div>
                            <div class="col-9">
                                <h5><a href="#">${item.goods_name} </a></h5>
                                <p class="spec-info" style="margin-bottom: 0;">
                                    ${spec_info}</p>
                                <p data-brief="690" class="brief" style="margin-bottom: 0;"> 
                                    ${item.goods_title}
                                </p>
                                <ul class="list-unstyled promotion-list plist-goods"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 c-ci-price">${oprice}</div>
                    <div class="col-2 c-ci-quantity">
                        <div class="product-quantity input-group mb3" data-minibuy="">
                            <div class="spinner-buttons input-group-btn">
                                <button type="button" class="btn btn-outline-secondary" data-id="${item.goods_id}" ${item.cart_number <= 1 ? "disabled" : ''}>-</button>
                            </div>
                            <input type="text" class="spinner-input form-control" value="${item.cart_number}" data-now="1">
                            <div class="spinner-buttons input-group-btn">
                                <button type="button" class="btn btn-outline-secondary" data-id="${item.goods_id}" ${item.goods_number <= item.cart_number ? "disabled" : ''}>+</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 c-ci-amount">
                        <strong data-bind="amount">${(parseFloat(oprice) * (item.cart_number)).toFixed(2)}</strong>
                    </div>
                    <div class="col-2 c-ci-opt">
                        <ul class="list-unstyled">
                            <li><a href="javascript:;" class="btn btn-link btn-xs" data-id="${item.goods_id}">删除</a></li>
                        </ul>
                    </div>
                </div>
            `
        })
        //给当前字符串拼接结束的标签
        str2 += `
            </div>
            <div class="row cart-footer">
                <div class="col-1 c-cf-check">
                    <label class="control-label">
                        <input type="checkbox" name="selectall" ${all1 ? "checked" : ''}> 全选
                    </label>
                </div>
                
                <div class="col-4 c-cf-opt">
                    <a href="javascript:;" class="btn btn-link btn-xs" id="selectdel">删除选中</a>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <div class="col-4 c-cf-amount text-right">
                    <ul class="list-unstyled">
                        <li>
                            已选择<span data-bind="goods_count">${sum[2]}</span>件商品,优惠后金额
                            <small class="text-danger"></small><strong class="text-danger"
                                data-bind="finally_cart_amount" style="color:#ed1c24;">${sum[1].toFixed(2)}</strong>
                        </li>
                    </ul>

                    <ul class="list-unstyled promotion-list plist-order"></ul>
                </div>
                <div class="col-3 c-cf-opt">
                    <a href="./other-pages/checkout.html" class="checkout-btn btn btn-lg btn-danger">去结算</a>
                    <a href="javascript:;" onclick="history.go(-1);" class="btn back-btn btn-lg btn-default">返回继续操作</a>
                </div>
            </div>
        </div>
        `
        //最后把拼接好的内容添加到box大盒子中
        box.html(str2)
    } else {
        var str1 = `
        <div class="jumbotron clearfix">
            <div class="ju-left fl">
                <img src="https://www.konka.com/themes/pc/konka/images/shoppingNone.png?ve5e7">
            </div>
            <div class="ju-right fl" style="margin:15px 0 0 15px;">
                <h3 style="font-weight:600;">您的购物车还是空的！</h3>
                <p>您的购物车当前并未选购任何商品。</p>
                <p><a class="btn btn-danger btn-lg shoppingRed" href="./list.html" role="button">马上去购物 »</a></p>
            </div>
        </div>
        `
        //把当前内容添加到box盒子中
        box.html(str1)
    }
}
//给box大盒子对象绑定点击事件
box.on('click', function (e) {

    //判断当前cookie是否存在 ==> 即判断是否有登录过
    if (name1) {
        $('.alert-warning').hide()
    } else {
        // 没有登录，也可以进入购物车页面，但是有购物车列表的时候会出现弹窗
        $('.alert-warning').show()
        // alert("你还没登录，请登录在进入")
        // location="./login.html?pathUrl="+url  

    }

    var e = e || window.event
    //获取点击对象
    var target = e.target

    //判断当前点击的是否为+   (target不是JQ对象)
    if (target.innerHTML == "+") {
        //获取当前对象中的id属性
        // var id = target.getAttribute("data-id")
        var id = $(target).attr("data-id")
        console.log(id);
        //遍历cartList数组对象
        cartList.forEach(item => {
            //判断遍历出来的商品是否为当前操作商品
            if (item.goods_id == id) {
                //数量++
                item.cart_number++
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        showCart()
    }
    //判断当前点击的是否为减法按钮
    if (target.innerHTML == '-') {
        //获取当前对象中的id属性
        var id = $(target).attr("data-id")
        //遍历cartList数组对象
        cartList.forEach(item => {
            //判断遍历出来的商品是否为当前操作商品
            if (item.goods_id == id) {
                item.cart_number--
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        showCart()
    }
    //删除
    if (target.innerHTML == "删除") {
        //获取当前点击对象的id
        var id = $(target).attr("data-id")
        cartList = cartList.filter(item => {
            //过滤的商品
            return item.goods_id != id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        showCart()
    }

    //删除
    if (target.innerHTML == "删除选中") {
        cartList = cartList.filter(item => {
            //过滤被选中的商品，返回没有被选中的商品，用来更新cartList
            return item.is_select == 0
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        showCart()
    }

    //全选
    if (target.name == "selectall") {
        //遍历所有商品
        cartList.forEach(item => {
            //判断当前全选框是否被选中
            if (target.checked) {
                item.is_select = 1
            } else {
                item.is_select = 0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        showCart()
    }
    //选中框
    if (target.name == "select") {
        //获取  当前商品 对应的id，即 当前  点击选中 的商品
        var id = $(target).attr("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item => {
            if (item.goods_id == id) {
                //(购物车里面的是item.goods_id默认没有被选中，id为现在target选中的商品，
                // 当它们相等时，即购物车中的那一个item.goods_id被选中)

                //   //判断当前选中框是否被选中  （即判断它曾经是否被选中过）
                //   if(item.is_select==1){  //因为数据库默认设为0，所以为1时，肯定是之前已经选中过的，现在再次选中则为反选0
                //       item.is_select=0
                //   }else{ //数据库默认设为0，当被选中name=="xuan"的时候，就手动赋值 设置为1，即可代表选中啦
                //       item.is_select=1
                //   }
                item.is_select = item.is_select == 1 ? "0" : "1"
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        showCart()
    }
    //去结算
    if (target.innerHTML == "去结算") {
        //添加确认框
        if (confirm("你确定要购买吗？")) {
            alert("你需要支付：￥" + total()[1])
            cartList = cartList.filter(item => {
                return item.is_select != 1  //filter会返回满足条件 组成的 数组，不为1，则没有被选中的商品，重新添加到数据库里面
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList6", JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            showCart()
        }
    }
    //清空购物车
    if (target.innerHTML == "清空购物车") {
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList6", JSON.stringify([]))
        //调用show方法，重新把页面再次渲染
        showCart()
    }

})
//统计所选商品种类和价格以及商品数量
function total() {
    var num = 0 //所选商品种类
    var price = 0 //所选商品总价格
    var count = 0 //所选商品总数量

    //遍历cartList数组对象
    cartList.forEach(item => {
        var oprice = item.original_price
        if (oprice > '0.00') {
            oprice = item.special_price
        } else {
            oprice = item.original_price
        }
        console.log(oprice);
        //判断当前商品是否被选中
        if (item.is_select == 1) {
            num++
            price += item.cart_number * oprice
            count += item.cart_number
        }
    })
    return [num, price, count]
}

//判断当前cookie是否存在 ==> 即判断是否有登录过
if (name1) {
    $('.alert-warning').hide()
} else {
    // 没有登录，也可以进入购物车页面，但是有购物车列表的时候会出现弹窗
    $('.alert-warning').show()
    // alert("你还没登录，请登录在进入")
    // location="./login.html?pathUrl="+url  

}