var top1,mySwiper=new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});mySwiper.params.pagination.clickable=!0,mySwiper.pagination.destroy(),mySwiper.pagination.init(),mySwiper.pagination.bullets.eq(0).addClass("swiper-pagination-bullet-active");var sum=0,backTop=$("#the-top"),cateTop=$(".cateTop");$(window).scroll(function(){top1=document.documentElement.scrollTop,$(".home-start").offset().top-54<top1?($(".anchor").show(),$(document.body).outerWidth(!0)<"1140"?$(".anchor").css("left","-293px"):$(".anchor").css("left","89.5px"),backTop.show(),$($(".anchor li")[0]).css("background","#ed1c24").siblings().css("background-color","#888")):($(".anchor").hide(),backTop.hide()),cateTop.each(function(t,a){$(a).offset().top-54-30<top1&&($($(".anchor li")[0]).css("background","#888"),$($(".anchor li")[t+1]).css("background","#ed1c24").siblings().css("background-color","#888"))})}),$('.anchor ul li a[href^="#"]').click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-54},400)});var sideNav=$(".side-nav"),bannerSwiper=$(".banner-swiper"),homeFistRow=$(".home>.container>.row");console.log(homeFistRow);var star=$("#star"),category=$(".category"),konka=$(".konka"),anchor=$(".anchor");$(async function(){for(var t=["电视","冰箱","洗衣机","生活电器","厨房电器","智能硬件","K迷优品"],a=0;a<t.length;a++){var o=await $.get("./php/indexlist1.php",{cartId:t[a]},function(t){return t},"json");console.log(o);var i="";o.forEach(t=>{i+=`
            <li>
                <a href="./pages/detail.html?id=${t.goods_id}">
                    <img src="${t.goods_small_img1}"
                        style="display: inline;">
                    <span>${t.cat_one_id}</span>
                </a>
            </li>
            `});o=$(".children-list").eq(a).html(i);console.log(o)}});for(var str1="",str2="",str3="",str4="",str5="",ar1=["https://www.konka.com/kxhx/","https://www.konka.com/item-1272.html","https://www.konka.com/list.html?cat_id=14","https://www.konka.com/item-index-g950.html","https://www.konka.com/BCD-450WEGX4SP.html"],ar2=["https://www.konka.com/integralmall.html","https://www.konka.com/adjustprices.html","https://www.konka.com/couponactivity-1.html","https://www.konka.com/news.html","https://www.konka.com/purchase.html","http://sc.hotjob.cn/wt/konka/web/index/CompkonkaPageindex"],ar3=["积分商城","限时抢购","领券中心","康佳新闻","大宗采购","加入康佳"],ar4=["https://www.konka.com/item-1297.html","https://www.konka.com/item-1214.html","https://www.konka.com/item-1260.html"],ar5=["https://www.konka.com/public/images/c4/59/d4/84b6a3fd955f0c4ed0f6fcdbc73f80e3616d40ab.jpg?47532_OW280_OH180","https://www.konka.com/public/images/7f/11/80/96a48def619344e4b2e49d9fdfd6c52cf5655292.jpg?92922_OW280_OH180"],i=0;i<=ar1.length+1;i++)$($(".swiper-slide")[i]).find("a").attr("href",ar1[i-1]);for(i=0;i<ar2.length;i++)str3+=`
            <div class="col-2">
                <a href="${ar2[i]}">
                    <img src="./assets/images/home-icon${i+1}.png" alt="">
                    <p>${ar3[i]}</p>
                </a>
            </div>
        `;$(".home-first-left").append(str3);for(i=0;i<ar4.length;i++)str4+=`
            <div class="col-3">
                <a href="${ar4[i]}">
                    <img src="./assets/images/homeFR_0${i+1}.jpg">
                </a>
            </div>
        `;console.log(str4),homeFistRow.append(str4),console.log(homeFistRow),$(async function(){for(var t=["电视","冰箱","洗衣机","生活电器","厨房电器","厨房电器","周边配件","智能硬件","K迷优品"],a=0;a<t.length;a++){var o=await $.get("./php/list3.php",{cartId:t[a]},function(t){return t},"json"),i="",e=0;for(item5 of o){if(e++,i+=`
            <li>
                <a href="./pages/list.html?cat_id=${item5.cat_one_id.split(`${t[a]}`)[0]}">${item5.cat_one_id.split(t[a])[0]}</a>
                <span>/</span>
            </li>
            `,3<=a&&2<e){i+=`
                <a href="./pages/list.html?cat_id=${t[a]}" style="color: rgb(255, 91, 87);">更多&gt;&gt;</a>
                `;break}if(e>Math.ceil(o.length/2)){if(5<e){i+=`
                    <a href="./pages/list.html?cat_id=${t[a]}" style="color: rgb(255, 91, 87);">更多&gt;&gt;</a>
                    `;break}i+=`
                <a href="./pages/list.html?cat_id=${t[a]}" style="color: rgb(255, 91, 87);">更多&gt;&gt;</a>
                `;break}console.log(item5.cat_one_id),console.log(item5.cat_one_id.split("cartType[i]")[0])}console.log($(".more-list").eq(a)),$(".more-list").eq(a).html(i);var s=await $.get("./php/indexlist1.php",{cartId:t[a]},function(t){return t},"json");console.log(s);var n="";s.forEach(t=>{n+=`

            <div class="col-3">
                <div class="figure">
                    <a href="./pages/detail.html?id=${t.goods_id}">
                        <img src="${t.goods_small_img1}"
                                            style="display: inline;">
                    </a>
                </div>
                <h4 class="text-uppercase ellipsis">${t.goods_name}</h4>
                <div class="figure-title ellipsis">${t.goods_title}</div>
                <p class="price">￥${t.special_price}<span class="del">￥${t.original_price}</span></p>
            </div>
        `}),$(".cateTop .container-fluid .row").eq(a).html(n)}});