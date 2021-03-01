var name1=getCookie("user"),box=$(".main-container");console.log(box);var url=location.href,cartList=localStorage.getItem("cartList6");function showCart(){var t,a,i;0<cartList.length?(t=cartList.every(t=>1==t.is_select),a=total(),i=`
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
                        <input type="checkbox" name="selectall" data-checkall=".cart-body input:checkbox[data-ident]" ${t?"checked":""}> 全选
                    </label>
                </div>
                <div class="col-5 c-ch-title">商品</div>
                <div class="col-1 c-ch-price">单价</div>
                <div class="col-2 c-ch-quantity">数量</div>
                <div class="col-1 c-ch-amount">小计</div>
                <div class="col-2 c-ch-opt">操作</div>
            </div>
            <div class="cart-body myCart">
        `,cartList.forEach(t=>{var a="0.00"<(a=t.original_price)?t.special_price:t.original_price,s=t.goods_name.split(" "),s=/\w{4,}/.test(s[0])?s[0]:"";i+=`
                <div data-object="goods" class="row goods_887 cart-item">
                    <div class="col-1 c-ci-check">
                        <label class="control-label">
                            <input type="checkbox" name="select" ${1==t.is_select?"checked":""} data-id="${t.goods_id}">&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                    </div>
                    <div class="col-5 c-ci-title">
                        <div class="row">
                            <div class="col-3">
                                <a href="./detail.html?id=${t.goods_id}">
                                    <img class="img-thumbnail"
                                        src="${t.goods_small_img1}"
                                        alt="${t.goods_name}">
                                </a>
                            </div>
                            <div class="col-9">
                                <h5><a href="#">${t.goods_name} </a></h5>
                                <p class="spec-info" style="margin-bottom: 0;">
                                    ${s}</p>
                                <p data-brief="690" class="brief" style="margin-bottom: 0;"> 
                                    ${t.goods_title}
                                </p>
                                <ul class="list-unstyled promotion-list plist-goods"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 c-ci-price">${a}</div>
                    <div class="col-2 c-ci-quantity">
                        <div class="product-quantity input-group mb3" data-minibuy="">
                            <div class="spinner-buttons input-group-btn">
                                <button type="button" class="btn btn-outline-secondary" data-id="${t.goods_id}" ${t.cart_number<=1?"disabled":""}>-</button>
                            </div>
                            <input type="text" class="spinner-input form-control" value="${t.cart_number}" data-now="1">
                            <div class="spinner-buttons input-group-btn">
                                <button type="button" class="btn btn-outline-secondary" data-id="${t.goods_id}" ${t.goods_number<=t.cart_number?"disabled":""}>+</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 c-ci-amount">
                        <strong data-bind="amount">${(parseFloat(a)*t.cart_number).toFixed(2)}</strong>
                    </div>
                    <div class="col-2 c-ci-opt">
                        <ul class="list-unstyled">
                            <li><a href="javascript:;" class="btn btn-link btn-xs" data-id="${t.goods_id}">删除</a></li>
                        </ul>
                    </div>
                </div>
            `}),i+=`
            </div>
            <div class="row cart-footer">
                <div class="col-1 c-cf-check">
                    <label class="control-label">
                        <input type="checkbox" name="selectall" ${t?"checked":""}> 全选
                    </label>
                </div>
                
                <div class="col-4 c-cf-opt">
                    <a href="javascript:;" class="btn btn-link btn-xs" id="selectdel">删除选中</a>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <div class="col-4 c-cf-amount text-right">
                    <ul class="list-unstyled">
                        <li>
                            已选择<span data-bind="goods_count">${a[2]}</span>件商品,优惠后金额
                            <small class="text-danger"></small><strong class="text-danger"
                                data-bind="finally_cart_amount" style="color:#ed1c24;">${a[1].toFixed(2)}</strong>
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
        `,box.html(i)):box.html(`
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
        `)}function total(){var s=0,i=0,c=0;return cartList.forEach(t=>{var a="0.00"<(a=t.original_price)?t.special_price:t.original_price;console.log(a),1==t.is_select&&(s++,i+=t.cart_number*a,c+=t.cart_number)}),[s,i,c]}cartList=JSON.parse(cartList)||[],showCart(),box.on("click",function(t){name1?$(".alert-warning").hide():$(".alert-warning").show();var a,s=(t=t||window.event).target;"+"==s.innerHTML&&(a=$(s).attr("data-id"),console.log(a),cartList.forEach(t=>{t.goods_id==a&&t.cart_number++}),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"-"==s.innerHTML&&(a=$(s).attr("data-id"),cartList.forEach(t=>{t.goods_id==a&&t.cart_number--}),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"删除"==s.innerHTML&&(a=$(s).attr("data-id"),cartList=cartList.filter(t=>t.goods_id!=a),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"删除选中"==s.innerHTML&&(cartList=cartList.filter(t=>0==t.is_select),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"selectall"==s.name&&(cartList.forEach(t=>{s.checked?t.is_select=1:t.is_select=0}),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"select"==s.name&&(a=$(s).attr("data-id"),cartList.forEach(t=>{t.goods_id==a&&(t.is_select=1==t.is_select?"0":"1")}),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"去结算"==s.innerHTML&&confirm("你确定要购买吗？")&&(alert("你需要支付：￥"+total()[1]),cartList=cartList.filter(t=>1!=t.is_select),localStorage.setItem("cartList6",JSON.stringify(cartList)),showCart()),"清空购物车"==s.innerHTML&&(localStorage.setItem("cartList6",JSON.stringify([])),showCart())}),name1?$(".alert-warning").hide():$(".alert-warning").show();