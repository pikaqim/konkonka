var dt,id,search=location.search,productContainer=$(".product-container");function selectEare(){var a,c=[{name:"北京市",cityList:[{name:"市辖区",areaList:[{name:"东城区",lastarea:["东华门街道","景山街道","交道口街道","安定门街道","北新桥街道","东四街道","朝阳门街道","建国门街道","东直门街道","和平里街道","前门街道","崇文门外街道","东花市街道","龙潭街道","体育馆路街道","天坛街道","永定门外街道"]},{name:"西城区",lastarea:["西长安街街道","新街口街道","月坛街道","展览路街道","德胜街道","金融街街道","什刹海街道","大栅栏街道","天桥街道","椿树街道","陶然亭街道","广安门内街道","牛街街道","白纸坊街道","广安门外街道"]},{name:"朝阳区",lastarea:["建外街道","朝外街道","呼家楼街道","三里屯街道","左家庄街道","香河园街道","和平街街道","安贞街道","亚运村街道","小关街道","酒仙桥街道","麦子店街道","团结湖街道","六里屯街道","八里庄街道","双井街道","劲松街道","潘家园街道","垡头街道","南磨房地区","高碑店地区","将台地区","太阳宫地区","大屯街道","望京街道","小红门地区","十八里店地区","平房地区","东风地区","奥运村街道","来广营地区","常营地区","三间房地区","管庄地区","金盏地区","孙河地区","崔各庄地区","东坝地区","黑庄户地区","豆各庄地区","王四营地区","东湖街道","首都机场街道"]},{name:"丰台区",lastarea:["右安门街道","太平桥街道","西罗园街道","大红门街道","南苑街道","东高地街道","东铁匠营街道","卢沟桥街道","丰台街道","新村街道","长辛店街道","云岗街道","方庄地区","宛平城地区","马家堡街道","和义街道","卢沟桥地区","花乡地区","南苑地区","长辛店镇","王佐镇"]}]}]},{name:"天津市",cityList:[{name:"市辖区",areaList:[{name:"和平区",lastarea:["劝业场街道","小白楼街道","五大道街道","新兴街道","南营门街道","南市街道"]},{name:"河东区",lastarea:["大王庄街道","大直沽街道","中山门街道","富民路街道","二号桥街道","春华街道","唐家口街道","向阳楼街道","常州道街道","上杭路街道","东新街道","鲁山道街道","天津铁厂街道"]},{name:"河西区",lastarea:["大营门街道","下瓦房街道","桃园街道","挂甲寺街道","马场街道","越秀路街道","友谊路街道","天塔街道","尖山街道","陈塘庄街道","柳林街道","东海街道","梅江街道","太湖路街道"]},{name:"南开区",lastarea:["长虹街道","鼓楼街道","兴南街道","广开街道","万兴街道","学府街道","向阳路街道","嘉陵道街道","王顶堤街道","水上公园街道","体育中心街道","华苑街道"]},{name:"河北区",lastarea:["光复道街道","望海楼街道","鸿顺里街道","新开河街道","铁东路街道","建昌道街道","宁园街道","王串场街道","江都路街道","月牙河街道"]}]}]}];for(a in $(".nav-tabs li").click(function(){console.log(111);var a=$(this).index();$(".options-box ul").eq(a).show().siblings().hide()}),c){var s=c[a].name,s=`<li data-value="${s}" id="0" title="${s}">${s}</li>`;$(".select-first").append(s)}$(".select-first li").click(function(){$(this).addClass("active").siblings().removeClass("active");var a,o=$(this).attr("data-value");for(a in $(".choose-s a").text(o),$(".select-two").empty(),$(".select-three").empty(),$(".select-last").empty(),c)if(c[a].name==o)for(var s in c[a].cityList){s=c[a].cityList[s].name,s=`<li data-value="${s}" id="0" title="${s}">${s}</li>`;$(".select-two").append(s)}$(".select-two li").click(function(){$(this).addClass("active").siblings().removeClass("active");var a,l=$(this).attr("data-value");for(a in $(".choose-c a").text(l),$(".select-three").empty(),$(".select-last").empty(),c)if(c[a].name==o)for(var s in c[a].cityList)if(c[a].cityList[s].name==l)for(var t in c[a].cityList[s].areaList){t=c[a].cityList[s].areaList[t].name,t=`<li data-value="${t}" id="0" title="${t}">${t}</li>`;$(".select-three").append(t)}$(".select-three li").click(function(){$(this).addClass("active").siblings().removeClass("active");var a,s=$(this).attr("data-value");for(a in console.log(s),$(".choose-x a").text(s),$(".select-last").empty(),c)if(c[a].name==o)for(var t in c[a].cityList)if(c[a].cityList[t].name==l)for(var i in c[a].cityList[t].areaList)if(c[a].cityList[t].areaList[i].name==s)for(var e in c[a].cityList[t].areaList[i].lastarea){e=c[a].cityList[t].areaList[i].lastarea[e];console.log(e);e=`<li data-value="${e}" id="0" title="${e}">${e}</li>`;$(".select-last").append(e)}$(".select-last li").click(function(){$(this).addClass("active").siblings().removeClass("active");var a=$(this).attr("data-value");console.log(a),$(".choose-q a").text(a),$("#choose-regions").addClass("hide"),$(".address-info-name span").eq(0).text(o),$(".address-info-name span").eq(1).text(l),$(".address-info-name span").eq(2).text(s),$(".address-info-name span").eq(3).text(a)})})})})}search?(id=search.split("=")[1],$(async function(){dt=await $.get("../php/detail.php",{id:id},function(a){return a},"json"),console.log(dt);var a=`
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">${dt.cat_id}</a></li>
                            <li class="breadcrumb-item"><a href="#">${dt.cat_one_id}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">${dt.goods_name}</li>
                        </ol>
                        <div class="product-page">
                            <div class="row">
                                <div class="col-7" id="mousele">
                                    <div class="updown product-mousele-images">
                                        <i class="iconfont icon-menu-up arrowUp" style="color: rgb(96, 96, 96);"></i>
                                        <div class="box">
                                            <ul class="product-other-images list-inline">
                                                <li class="current">
                                                    <a href="${dt.goods_big_img1}"
                                                        data-middlesrc="https://www.konka.com/public/images/7a/11/8e/304fdd358163f4af44072cfc64cc1c4dd36730d8.jpg?95971_OW800_OH800"
                                                        target="_blank">
                                                        <img
                                                            src="${dt.goods_small_img1}">
                                                    </a>
                                                </li>
                                                <li class="">
                                                    <a href="${dt.goods_big_img2}"
                                                        data-middlesrc="https://www.konka.com/public/images/17/9d/56/d987a9d352658ef7206fc4199867b3da2606fd69.jpg?95974_OW800_OH800"
                                                        target="_blank">
                                                        <img
                                                            src="${dt.goods_small_img2}">
                                                    </a>
                                                </li>
                                                <li class="">
                                                    <a href="${dt.goods_big_img3}"
                                                        data-middlesrc="https://www.konka.com/public/images/bc/d0/6f/535d4b4a1420e3d865bb700998a0fff75b9eb9ac.jpg?96017_OW800_OH800"
                                                        target="_blank">
                                                        <img
                                                            src="${dt.goods_small_img3}">
                                                    </a>
                                                </li>
                                                <li class="">
                                                <a href="${dt.goods_big_img4}"
                                                        data-middlesrc="https://www.konka.com/public/images/e2/85/92/3028f2cd65f106a291e7a4645bbbe4466cca8622.jpg?95983_OW800_OH800"
                                                        target="_blank">
                                                        <img
                                                            src="${dt.goods_small_img4}">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="${dt.goods_big_img5}"
                                                        data-middlesrc="https://www.konka.com/public/images/98/df/d6/2fd41f27c6ad7f272c6539c6ca5cfd9616b79692.jpg?95996_OW800_OH800"
                                                        target="_blank">
                                                        <img
                                                            src="${dt.goods_small_img5}">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <i class="iconfont icon-menu-down arrowDown" style="color: rgb(96, 96, 96);"></i>
                                    </div>
                                    <div class="product-main-image" style="position: relative; overflow: hidden;">
                                        <a href="${dt.goods_small_img5}"
                                            class="jqzoom">
                                            <img src="${dt.goods_big_img5}" class="bigImg">
                                        </a>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="product-describe">
                                        <h3>${dt.goods_name}</h3>
                                        <div>${dt.goods_title}</div>
                                    </div>
                                    <div class="price-availability clearfix">
                                        <span class="price red">
                                            <strong>￥${dt.special_price}</strong>
                                            <span class="del" style="color:#b0b0b0;">￥${dt.original_price}</span>
                                        </span>
                                        <a href="javascript:;" class="pruchase">
                                            <span><i class="iconfont icon-qrcode" style="margin-right: 5px;"></i>手机购买</span>
                                            <img src="https://www.konka.com/openapi/qrcode/encode/size/5/margin/5?txt=https%3A%2F%2Fwww.konka.com%2Fm%2Fitem-887.html"
                                                class="x-qrcode"> </a>
                                    </div>
                                    <div class="addressWrap">
                                        <div class="address-info">
                                            <span class="distribution">配送至:</span>
                                            <div class="address-info-name">
                                                <span>北京</span>
                                                <span>北京市</span>
                                                <span>延庆县</span>
                                                <span>珍珠泉乡</span>
                                            </div>
                                            <div class="choose-regions"><span id="chooseUp" class="iconfont icon-menu-down"></span>
                                                <!-- 地址modal -->
                                                <div class="address-model hide" id="choose-regions" style="top: 30px; left: 0px;">
                                                    <div class="" role="document">
                                                        <div class="modal-body">
                                                            <div class="select-box">
                                                                <ul class="nav nav-tabs clearfix" role="tablist">
                                                                    <li role="presentation" class="choose-s active"><a
                                                                            href="javascript:;" aria-controls="home" role="tab"
                                                                            data-toggle="tab">选择省份/自治区</a></li>
                                                                    <li role="presentation" class="choose-c"><a href="javascript:;"
                                                                            aria-controls="profile" role="tab"
                                                                            data-toggle="tab">选择城市/地区</a></li>
                                                                    <li role="presentation" class="choose-x"><a href="javascript:;"
                                                                            aria-controls="messages" role="tab"
                                                                            data-toggle="tab">选择区县</a></li>
                                                                    <li role="presentation" class="choose-q"><a href="javascript:;"
                                                                            aria-controls="settings" role="tab"
                                                                            data-toggle="tab">选择配送区域</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="tab-content options-box">
                                                                <ul role="tabpanel" class="select-first tab-pane active">
                                                                    
                                                                </ul>
                                                                <ul role="tabpanel" class="select-two tab-pane"></ul>
                                                                <ul role="tabpanel" class="select-three tab-pane"></ul>
                                                                <ul role="tabpanel" class="select-last tab-pane"></ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="myStock">有货</span>
                                        </div>
                                    </div>
                                    <!--购买区-->
                                    <div class="product-page-cart">
                                        <div class="product-quantity input-group mb-3" style="width: 160px;">
                                            <dl class="dl-horizontal">
                                                <dt>数量</dt>
                                            </dl>
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-secondary" type="button" data-id="${dt.goods_id}">-</button>
                                            </div>
                                            <input type="text" class="form-control" value="1">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-secondary" type="button" data-id="${dt.goods_id}">+</button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <a class="btn btn-danger favorite btn-buy distanceRight"
                                                href="./other-pages/checkout-fastbuy.html">立即购买</a>
                                            <a class="btn btn-warning favorite distanceRight" href="./cart.html">加入购物车</a>
                                            <a class="btn btn-nostock hide disabled" href="javascript:;">已售完</a>
                                        </div>
                                    </div>
                                    <!--购买区end-->
            
                                </div>
                                <!-- </div> -->
            
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="product-page-content">
                                        <div class="" style="border: 1px solid #e6e6e6;box-sizing:border-box;">
                                            <ul id="pp_tabs" class="nav nav-tabs Roll" style="width:665px;border:0;margin:0 auto;">
                                                <li class="myDesc active"><a href="#desc">详情介绍</a></li>
                                                <li class="myParams"><a href="#params">规格参数</a></li>
                                                <li class="myComment"><a href="#comment" data-toggle="tab">晒单评价</a></li>
                                                <li class="myService"><a href="#service">售后服务</a></li>
                                                <li class="myConsultation"><a href="#Consultation">咨询服务</a></li>
                                            </ul>
                                        </div>
                                        <div class="tab-content">
                                            <div class="in active" id="desc">
                                                ${dt.goods_introduce}
                                                
                                            </div>
                                            <div class="" id="params" style="padding:0 15px">
                                                ${dt.goods_parameter}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `;function s(){$(".jqzoom").jqzoom({zoomType:"innerzoom",preloadImages:!0,title:!1})}productContainer.html(a),$("#chooseUp").click(function(){$("#choose-regions").toggleClass("hide")}),selectEare(),$(window).scroll(function(){var a=$("#the-top"),s=document.documentElement.scrollTop;$(".product-page-cart>.row").offset().top-54<s?a.show():a.hide()}),bigImgList=[dt.goods_big_img1,dt.goods_big_img2,dt.goods_big_img3,dt.goods_big_img4,dt.goods_big_img5],smallImgList=[dt.goods_small_img1,dt.goods_small_img2,dt.goods_small_img3,dt.goods_small_img4,dt.goods_small_img5],$(".product-other-images li").hover(function(){console.log(1),$(this).addClass("current").siblings().removeClass("current");var a=$(this).index();$(".jqzoom").attr("href",smallImgList[a]),$(".bigImg").attr("src",bigImgList[a]),$(".zoomWrapperImage img").attr("src",bigImgList[a]),s()}),s()})):(alert("你还没选中商品"),location="./list.html"),productContainer.on("click",function(a){var s;"加入购物车"==(a=a||window.event).target.innerHTML&&(a=localStorage.getItem("cartList6"),console.log(a),a?(a=JSON.parse(a),s=0,a.forEach(a=>{a.goods_id==dt.goods_id&&(s++,a.cart_number++)}),0==s&&(dt.cart_number=1,a.push(dt)),localStorage.setItem("cartList6",JSON.stringify(a))):(console.log(dt),dt.cart_number=1,localStorage.setItem("cartList6",JSON.stringify([dt]))))});