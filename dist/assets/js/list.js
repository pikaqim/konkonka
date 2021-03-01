$(window).scroll(function(){var i=$("#the-top"),t=document.documentElement.scrollTop;$(".goods-list").offset().top-54<t?i.show():i.hide()});var dt,dt2,cat_id,goodsListBox=$(".goods-list"),pagination1=document.querySelector(".pagination"),search=location.search,orderName="";function getCatId(){cat_id=search?search.split("=")[1].trim():"";var i="";i+=`
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="../index.html">首页</a></li>
        <li class="breadcrumb-item" id="cid">电视</li>
    </ol>
    <div class="gfilter hr-20">
        <dl class="gfilter-list gf-l1 border border-bottom-0 clearfix">
            <dt>分类</dt>
            <dd>
                <ul class="list-inline">
                    <li>
                        <a href="./list.html?cat_id=电视">电视</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=冰箱">冰箱</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=洗衣机">洗衣机</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=生活电器">生活电器</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=厨房电器">厨房电器</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=智能硬件">智能硬件</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=智能家居">智能家居</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=K迷优品">K迷优品</a>
                    </li>
                    <li>
                        <a href="./list.html?cat_id=周边配件">周边配件</a>
                    </li>
                </ul>
            </dd>
        </dl>
        `,i+=`
        <dl class="gfilter-list gf-l3 border border-bottom-0 clearfix">
            <dt>分类</dt>
            <dd>
                <ul class="list-inline">
            `;var t=[];dt.forEach(i=>{t.push(i.cat_one_id)});var e=new Set(t);console.log(e);var a=[];if(11<e.size){for(item2 of e)a.push(item2);e=a.splice(1,11)}for(item2 of e)console.log(item2),i+=`
                            <li><a href="./list.html?cat_id=${item2}">${item2}</a></li>
                        `;i+=`
                </ul>
            </dd>
            <dt>品牌</dt>
            <dd>
                <ul>
                    <li><a href="#" class="nolimit">不限</a></li>
                    <li><a href="#">康佳(KONKA)</a></li>
                    <li><a href="#">KKTV</a></li>
                </ul>
            </dd>
            <dt>价格</dt>
            <dd>
                <ul>
                    <li><a href="#" class="nolimit">不限</a></li>
                    <li><a href="#">599-999</a></li>
                    <li><a href="#">1000-2999</a></li>
                    <li><a href="#">3000-4999</a></li>
                    <li><a href="#">5000-6999</a></li>
                    <li><a href="#">7000-8999</a></li>
                    <li><a href="#">9000-9999</a></li>
                </ul>
            </dd>
            <dt>观看距离</dt>
            <dd>
                <ul>
                    <li><a href="#" class="nolimit">不限</a></li>
                    <li><a href="#">2米以内</a></li>
                    <li><a href="#">1.5-2.4米</a></li>
                    <li><a href="#">1.6-3.1米</a></li>
                    <li><a href="#">1.8-3.4米</a></li>
                    <li><a href="#">2.4-4.2米</a></li>
                </ul>
            </dd>
            <dt>屏幕尺寸</dt>
            <dd>
                <ul>
                    <li><a href="#" class="nolimit">不限</a></li>
                    <li><a href="#">19-32英尺</a></li>
                    <li><a href="#">39-43英尺</a></li>
                    <li><a href="#">48-50英尺</a></li>
                    <li><a href="#">55-58英尺</a></li>
                    <li><a href="#">60-65英尺</a></li>
                    <li><a href="#">70-75英尺</a></li>
                    <li><a href="#">75英尺以上</a></li>
                </ul>
            </dd>
        </dl>

    </div>
    `,$(".main-container").prepend(i),search?($(".breadcrumb").show(),$(".gf-l3").show(),$(".gf-l1").hide()):($(".breadcrumb").hide(),$(".gf-l3").hide(),$(".gf-l1").show()),$("#cid").text(decodeURI(cat_id)),hideMore()}function getGoodsList(i,t,e="../php/list.php"){$(async function(){dt=search?(i=search.split("=")[1].trim(),await $.get(e,{cat_id:i,orderName:t},function(i){return i},"json")):(i="",await $.get(e,{cat_id:i,orderName:t},function(i){return i},"json")),showPaginations()})}function showPaginations(){return new Pagination(pagination1,{pageInfo:{pagenum:1,pagesize:20,totalsize:dt.length,totalpage:Math.ceil(dt.length/20)},textInfo:{first:"首页",prev:"<<",next:">>",last:"尾页"},cb:function(i){i=dt.slice(20*(i-1),20*i);console.log(i);var t="";getCatId(),i.forEach(i=>{t+=`
                    <div class="card text-center col-3">
                        <div class="card-body">
                            <div class="figure">
                                <a href="./detail.html?id=${i.goods_id}"><img src="${i.goods_small_img1}" class="card-img-top" alt="${i.goods_name}"></a>
                            </div>
                            <h4 class="figure-title text-uppercase">${i.goods_name}</h4>
                            <div class="figure-text more-ellipsis">${i.goods_title}</div>
                            <p class="price">${i.special_price}</p>
                            <div class="goods-list-hover">
                                <a href="./cart.html" class="btn btn-default" data-id=${i.goods_id} type="button">加入购物车</a>
                                <a href="./other-pages/checkout-fastbuy.html" class="btn btn-danger" type="button">立即购买</a>
                            </div>
                        </div>
                    </div>
                `}),goodsListBox.html(t)}})}function hideMore(){$(".breadcrumb").not($(".breadcrumb").eq(0)).hide(),$(".gfilter").not($(".gfilter").eq(0)).hide()}getGoodsList(cat_id,orderName),$(".order-default").on("click",function(){$(this).addClass("active-order").siblings().removeClass("active-order"),getGoodsList(cat_id,orderName="")}),$(".order-price").on("dblclick",function(){$(this).addClass("active-order").siblings().removeClass("active-order"),orderName="special_price",console.log(orderName),getGoodsList(cat_id,orderName,url="../php/list2.php")}),$(".order-price").on("click",function(){$(this).addClass("active-order").siblings().removeClass("active-order"),orderName="special_price",console.log(orderName),getGoodsList(cat_id,orderName)}),$(".high-sales").on("click",function(){$(this).addClass("active-order").siblings().removeClass("active-order"),getGoodsList(cat_id,orderName="high_sales")}),$(".high-opinion").on("click",function(){$(this).addClass("active-order").siblings().removeClass("active-order"),getGoodsList(cat_id,orderName="high_opinion")}),$(".new-current").on("click",function(){$(this).addClass("active-order").siblings().removeClass("active-order"),getGoodsList(cat_id,orderName="current_time")});var cartList=localStorage.getItem("cartList6");goodsListBox.on("click",function(i){var t,e,i=(i=i||window.event).target;"加入购物车"==i.innerHTML&&(t=i.getAttribute("data-id"),i=dt[t],cartList?(cartList=JSON.parse(cartList),e=0,cartList.forEach(i=>{i.goods_id==t&&(e++,i.cart_number++)}),0==e&&(console.log(555555),i.cart_number=1,cartList.push(i)),localStorage.setItem("cartList6",JSON.stringify(cartList))):(console.log(dt[t]),i.cart_number=1,localStorage.setItem("cartList6",JSON.stringify([i]))))});