//顶部
var href1 = location.href
var url = ''
var url2 = ''
var url3 = ''
if(href1.indexOf('pages') != '-1') {
    url = '../php/common.php'
    url2 = './'
    url3 = '../'
}else{
    url = './php/common.php'
    url2 = './pages/'
    url3 = './'
    // (href1.indexOf('index'))
}

autoFlash(url,url2,url3)

function autoFlash(url,url2,url3){

$(async function () {

    var cartType = ['电视', '冰箱', '洗衣机', '生活电器', '厨房电器', '智能硬件', 'K迷优品']
    console.log(url);

    for (var i = 0; i < cartType.length; i++) {
        var listItems1 = await $.get(url, { "cartId": cartType[i] }, function (res) {
            return res
        }, "json")

        var str1 = ''
        str1 = `
        <div class="col-1">
            <a href="${url2}list.html?cat_id=${cartType[i]}">${cartType[i]}</a>
        <div class="item">
            <div class="item-children item-show">
                <div class="container-fluid" style="display: flex;">
        `
        listItems1.forEach(item1 => {
            str1 += `
                    <div class="col-2">
                        <div class="figure">
                            <a href="${url2}detail.html?id=${item1.goods_id}" title="">
                                <img src="${item1.goods_small_img1}">
                            </a>
                        </div>
                        <h4 class="text-uppercase ellipsis">${item1.goods_name}</h4>
                        <div class="figure-title ellipsis">${item1.goods_title}</div>
                        <p>￥${item1.special_price}</p>
                    </div>  
            `
        });

        str1 += `
                        </div>
                    </div>
                </div>
            </div>
        `
        // $('.item .container-fluid').eq(i).html(str1)
        $('.header .row').append(str1)
    }
    var str012 = `
            <div class="col-1">
                <a href="https://www.konka.com/prucahse.html">大宗采购</a>
            </div>
            <div class="col-1">
                <a href="https://www.konka.com/service.html">服务</a>
            </div>
            <div class="col-1">
                <a href="#"><img src="${url3}assets/images/header-scrae.png" alt=""></a>
            </div>
        `
        $('.header .row').append(str012)
});

// $(async function () {

//     var cartType = ['电视','冰箱','洗衣机','生活电器','厨房电器','智能周边','K迷优品']

//     for(var i = 0;i<cartType.length; i++){

//         var listItems1 = await $.get('../php/common.php', { "cartId": cartType[i] }, function (res) {
//             return res
//         }, "json")

//         var str1 = ''
//         listItems1.forEach(item1 => {
//             // $cid1 = $(".header .col-1").has('.item')
//             // var cid = $(".header .col-1").eq(i+1).has('.item').first('a').text()
//             // var $a1 = $(".header .col-1").eq(i+1).has('.item').find('a').first()
//             // $a1.attr('href',`./list.html?cat_id=${cid}`)

//             var $a1 = $(".header .col-1").eq(i+1).has('.item').find('a').first()
//             $a1.attr('href',`./list.html?cat_id=${item1.cat_id}`)

//             str1 +=`
//             <div class="col-2">
//             <div class="figure">
//                 <a href="./detail.html?id=${item1.goods_id}" title="">
//                     <img src="${item1.goods_small_img1}">
//                 </a>
//             </div>
//             <h4 class="text-uppercase ellipsis">${item1.goods_name}</h4>
//             <div class="figure-title ellipsis">${item1.goods_title}</div>
//             <p>￥${item1.special_price}</p>
//             </div>        
//             `
//         });
    
//         $('.item .container-fluid').eq(i).html(str1)
//     }
// });
}


var uname = getCookie('user')
console.log(uname);
if(uname){
    // 登录成功后显示用户信息，隐藏登录注册按钮
    var newEle = `<a href="javascript:;" class="member-btn" id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="">${uname}</a>`
    var newEle2 = `
        <ul class="dropdown-menu" aria-labelledby="dLabel">
            <li><a href="/my.html">个人中心</a></li>
            <li><a href="/my-orders.html">我的订单</a></li>
            <li><a href="../index.html" class="logout">退出登录</a></li>
        </ul>
    `
    $('.topbar-info').prepend(newEle)
    $('.signin-btn').hide()
    $('.signup-btn').hide()

    $('.topbar-info').append($(newEle2))
    $(".dropdown-menu").hide();
    $(".member-btn").click(function(){
        $(".dropdown-menu").toggle();
    });

    $('.logout').on('click',function(){
        $('.signin-btn').show()
        $('.signup-btn').show()
        $(".member-btn").hide();
        $(".dropdown-menu").hide();
        setCookie('user','');
    })

} else {
    $('.signin-btn').show()
    $('.signup-btn').show()
}

