var href1=location.href,url="",url2="",url3="";function autoFlash(o,n,r){$(async function(){var e=["电视","冰箱","洗衣机","生活电器","厨房电器","智能硬件","K迷优品"];console.log(o);for(var a=0;a<e.length;a++){var l=await $.get(o,{cartId:e[a]},function(e){return e},"json"),i="",i=`
        <div class="col-1">
            <a href="${n}list.html?cat_id=${e[a]}">${e[a]}</a>
        <div class="item">
            <div class="item-children item-show">
                <div class="container-fluid" style="display: flex;">
        `;l.forEach(e=>{i+=`
                    <div class="col-2">
                        <div class="figure">
                            <a href="${n}detail.html?id=${e.goods_id}" title="">
                                <img src="${e.goods_small_img1}">
                            </a>
                        </div>
                        <h4 class="text-uppercase ellipsis">${e.goods_name}</h4>
                        <div class="figure-title ellipsis">${e.goods_title}</div>
                        <p>￥${e.special_price}</p>
                    </div>  
            `}),i+=`
                        </div>
                    </div>
                </div>
            </div>
        `,$(".header .row").append(i)}var s=`
            <div class="col-1">
                <a href="https://www.konka.com/prucahse.html">大宗采购</a>
            </div>
            <div class="col-1">
                <a href="https://www.konka.com/service.html">服务</a>
            </div>
            <div class="col-1">
                <a href="#"><img src="${r}assets/images/header-scrae.png" alt=""></a>
            </div>
        `;$(".header .row").append(s)})}url3="-1"!=href1.indexOf("pages")?(url="../php/common.php",url2="./","../"):(url="./php/common.php",url2="./pages/","./"),autoFlash(url,url2,url3);var newEle,newEle2,uname=getCookie("user");console.log(uname),uname?(newEle=`<a href="javascript:;" class="member-btn" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="">${uname}</a>`,newEle2=`
        <ul class="dropdown-menu" aria-labelledby="dLabel">
            <li><a href="/my.html">个人中心</a></li>
            <li><a href="/my-orders.html">我的订单</a></li>
            <li><a href="../index.html" class="logout">退出登录</a></li>
        </ul>
    `,$(".topbar-info").prepend(newEle),$(".signin-btn").hide(),$(".signup-btn").hide(),$(".topbar-info").append($(newEle2)),$(".dropdown-menu").hide(),$(".member-btn").click(function(){$(".dropdown-menu").toggle()}),$(".logout").on("click",function(){$(".signin-btn").show(),$(".signup-btn").show(),$(".member-btn").hide(),$(".dropdown-menu").hide(),setCookie("user","")})):($(".signin-btn").show(),$(".signup-btn").show());