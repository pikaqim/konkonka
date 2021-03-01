
// banner swiper 
var mySwiper = new Swiper('.swiper-container', {

    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

//在swiper初始化后才决定使用clickable
mySwiper.params.pagination.clickable = true;
//此外还需要重新初始化pagination
mySwiper.pagination.destroy()
mySwiper.pagination.init()
mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');


// anchor和the-top显示
//获取当前滚动距离
var top1;
var sum = 0;
var backTop = $('#the-top')
var cateTop = $('.cateTop')

//给window对象绑定滚动事件
$(window).scroll(function () {

    //获取当前滚动距离
    top1 = document.documentElement.scrollTop
    var homeStarTop = $('.home-start').offset().top - 54 //因为top1>40时nav不占位,它的高为50，阴影为4

    // 楼层导航滚动设置
    //判断当滚动距离大于homeStarTop时，anchor和the-top显示
    if (top1 > homeStarTop) {
        $('.anchor').show()
        if ($(document.body).outerWidth(true) < '1140') {
            $('.anchor').css('left', '-293px')
        } else {
            $('.anchor').css('left', '89.5px')
        }
        backTop.show()
        $($('.anchor li')[0]).css('background', '#ed1c24').siblings().css('background-color', '#888');
    } else {
        $('.anchor').hide()
        backTop.hide()
    }

    cateTop.each(function (index, domEle) {
        // domEle == this 是一个js的div
        // console.log(domEle, this);
        var top2 = $(domEle).offset().top - 54 - 30
        if (top1 > top2) {
            $($('.anchor li')[0]).css('background', '#888');
            $($('.anchor li')[index + 1]).css('background', '#ed1c24').siblings().css('background-color', '#888');
        }
    });
})

// 锚点滚动
// 用li则会被隐藏一部分内容，而a则不会
$('.anchor ul li a[href^="#"]').click(function (e) {
    e.preventDefault();
    // document.documentElement.scrollTop = $($(this).attr('href')).offset().top - 54 // 方法1
    // 方法2
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 54 }, 400);
});
var sideNav = $(".side-nav")
var bannerSwiper = $(".banner-swiper")
var homeFistRow = $(".home>.container>.row")
console.log(homeFistRow);
var star = $("#star")
var category = $(".category")
var konka = $(".konka")
var anchor = $(".anchor")

// side nav 
$(async function () {
    var cartType1 = ['电视', '冰箱', '洗衣机', '生活电器', '厨房电器', '智能硬件', 'K迷优品']

    for (var i = 0; i < cartType1.length; i++) {
        var listItems2 = await $.get('./php/indexlist1.php', { "cartId": cartType1[i] }, function (res) {
            return res
        }, "json")
        console.log(listItems2);
        var str = ''
        listItems2.forEach(item1 => {
            str += `
            <li>
                <a href="./pages/detail.html?id=${item1.goods_id}">
                    <img src="${item1.goods_small_img1}"
                        style="display: inline;">
                    <span>${item1.cat_one_id}</span>
                </a>
            </li>
            `
        });
        var yy = $('.children-list').eq(i).html(str)
        console.log(yy);
    }
})


var str1 = ''
var str2 = ''
var str3 = ''
var str4 = ''
var str5 = ''

var ar1 = ["https://www.konka.com/kxhx/", "https://www.konka.com/item-1272.html", "https://www.konka.com/list.html?cat_id=14", "https://www.konka.com/item-index-g950.html", "https://www.konka.com/BCD-450WEGX4SP.html"]
var ar2 = ["https://www.konka.com/integralmall.html", "https://www.konka.com/adjustprices.html", "https://www.konka.com/couponactivity-1.html", "https://www.konka.com/news.html", "https://www.konka.com/purchase.html", "http://sc.hotjob.cn/wt/konka/web/index/CompkonkaPageindex"]
var ar3 = ['积分商城', '限时抢购', '领券中心', '康佳新闻', '大宗采购', '加入康佳']
var ar4 = ['https://www.konka.com/item-1297.html', 'https://www.konka.com/item-1214.html', 'https://www.konka.com/item-1260.html']
var ar5 = ['https://www.konka.com/public/images/c4/59/d4/84b6a3fd955f0c4ed0f6fcdbc73f80e3616d40ab.jpg?47532_OW280_OH180', 'https://www.konka.com/public/images/7f/11/80/96a48def619344e4b2e49d9fdfd6c52cf5655292.jpg?92922_OW280_OH180']

for (var i = 0; i <= ar1.length + 1; i++) {
    $($('.swiper-slide')[i]).find('a').attr('href', ar1[i - 1])
}

// str3 += `
//     <div class="col-3">
//         <div class="row">
// `
for (var i = 0; i < ar2.length; i++) {
    str3 += `
            <div class="col-2">
                <a href="${ar2[i]}">
                    <img src="./assets/images/home-icon${i + 1}.png" alt="">
                    <p>${ar3[i]}</p>
                </a>
            </div>
        `
}
// str3 += `</div>`
$('.home-first-left').append(str3)

for (var i = 0; i < ar4.length; i++) {
    str4 += `
            <div class="col-3">
                <a href="${ar4[i]}">
                    <img src="./assets/images/homeFR_0${i + 1}.jpg">
                </a>
            </div>
        `
}
console.log(str4);
homeFistRow.append(str4)
console.log(homeFistRow);

// category
$(async function () {

    var cartType = ['电视', '冰箱', '洗衣机', '生活电器', '厨房电器', '厨房电器', '周边配件', '智能硬件', 'K迷优品']

    for (var i = 0; i < cartType.length; i++) {

        var dt3 = await $.get('./php/list3.php', { "cartId": cartType[i] }, function (res) {
            return res
        }, "json")

        var str5 = ''
        var a = 0
        for (item5 of dt3) {
            a++
            str5 += `
            <li>
                <a href="./pages/list.html?cat_id=${item5.cat_one_id.split(`${cartType[i]}`)[0]}">${item5.cat_one_id.split(cartType[i])[0]}</a>
                <span>/</span>
            </li>
            `
            if(i>=3 && a>2){
                str5 += `
                <a href="./pages/list.html?cat_id=${cartType[i]}" style="color: rgb(255, 91, 87);">更多&gt;&gt;</a>
                `
                break;
            }
            if (a > Math.ceil(dt3.length / 2)) {
                
                if(a>5){
                    str5 += `
                    <a href="./pages/list.html?cat_id=${cartType[i]}" style="color: rgb(255, 91, 87);">更多&gt;&gt;</a>
                    `
                    break;
                }
                str5 += `
                <a href="./pages/list.html?cat_id=${cartType[i]}" style="color: rgb(255, 91, 87);">更多&gt;&gt;</a>
                `
                break;

            } 
           
            console.log(item5.cat_one_id);
            console.log(item5.cat_one_id.split('cartType[i]')[0]);
        }
        console.log($('.more-list').eq(i));
        $('.more-list').eq(i).html(str5)
        // dt3.forEach((item5,index) => {
        //     if(index>=Math.ceil(dt3.length/2)){
        //         return;
        //     }
        //     str5 += `
        //             <li>
        //                 <a href="./pages/list.html?cat_id=${item5.cat_one_id}">${item5.cat_one_id}</a>
        //                 <span>/</span>
        //             </li>
        //     `
        //     console.log(index);
        // })

        // $('.more-list').eq(i).html(str5)

        var cateItems1 = await $.get('./php/indexlist1.php', { "cartId": cartType[i] }, function (res) {
            return res
        }, "json")
        console.log(cateItems1);

        var str2 = ''

        cateItems1.forEach(item2 => {
            str2 += `

            <div class="col-3">
                <div class="figure">
                    <a href="./pages/detail.html?id=${item2.goods_id}">
                        <img src="${item2.goods_small_img1}"
                                            style="display: inline;">
                    </a>
                </div>
                <h4 class="text-uppercase ellipsis">${item2.goods_name}</h4>
                <div class="figure-title ellipsis">${item2.goods_title}</div>
                <p class="price">￥${item2.special_price}<span class="del">￥${item2.original_price}</span></p>
            </div>
        `
        })

        $('.cateTop .container-fluid .row').eq(i).html(str2)
    }

});





