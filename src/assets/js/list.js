$(window).scroll(function () {
    var backTop = $('#the-top');
    var top1 = document.documentElement.scrollTop;
    var homeStarTop = $('.goods-list').offset().top - 54 //自行定义

    //判断当滚动距离大于homeStarTop时，the-top显示
    if (top1 > homeStarTop) {
        backTop.show();
    } else {
        backTop.hide();
    }
})

// 获取操作对象
var goodsListBox = $('.goods-list');
// 获取大盒子对象
var pagination1 = document.querySelector('.pagination');
// var pagination1 = document.querySelector('.arrow');
var search = location.search
var dt
var dt2
//获取传入的商品类别
var cat_id
// 排序名称
var orderName = ''
function getCatId() {
    if (search) {
        cat_id = search.split('=')[1].trim()
    } else {
        cat_id = ''
    }
    // <li class="breadcrumb-item active" aria-current="page" id="cid">电视</li>
    var ar0 = dt
    var str1 = ''

    str1 += `
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
        `
    str1 += `
        <dl class="gfilter-list gf-l3 border border-bottom-0 clearfix">
            <dt>分类</dt>
            <dd>
                <ul class="list-inline">
            `

    var ar2 = []
    ar0.forEach((item2) => {
        ar2.push(item2.cat_one_id)
    })
    var ar3 = new Set(ar2)
    console.log(ar3);
    var ar4 = []
    if (ar3.size > 11) {
        for (item2 of ar3) {
            ar4.push(item2)
        }
        var ar5 = ar4.splice(1, 11)
        ar3 = ar5
    } else {
        ar3 = ar3
    }
    for (item2 of ar3) {
        console.log(item2);
        str1 += `
                            <li><a href="./list.html?cat_id=${item2}">${item2}</a></li>
                        `
    }



    str1 += `
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
    `

    $('.main-container').prepend(str1)


    if (search) {
        $('.breadcrumb').show()
        $('.gf-l3').show()

        $('.gf-l1').hide()
        // $('.gf-l2').hide()
    } else {
        $('.breadcrumb').hide()
        $('.gf-l3').hide()

        $('.gf-l1').show()
        // $('.gf-l2').hide()
    }

    $('#cid').text(decodeURI(cat_id))
    hideMore()
}

getGoodsList(cat_id, orderName)

function getGoodsList(cat_id, orderName,url='../php/list.php') {

    $(async function () {

        if (search) {
            cat_id = search.split('=')[1].trim()
            dt = await $.get(
                url,
                // '../php/list.php',
                { "cat_id": cat_id, "orderName": orderName },
                function (res) {
                    return res
                }, 'json')
        } else {
            cat_id = ''
            dt = await $.get(
                url,
                // '../php/list.php',
                { "cat_id": cat_id, "orderName": orderName },
                function (res) {
                    return res
                }, 'json')
        }
        showPaginations()

    })
}

function showPaginations() {
    return new Pagination(pagination1, {
        pageInfo: {
            pagenum: 1, //当前页码
            pagesize: 20, //一页显示的条数
            totalsize: dt.length, //总条数
            totalpage: Math.ceil(dt.length / 20) //总页数
        },
        textInfo: {
            first: '首页',
            prev: "<<",
            next: ">>",
            last: "尾页"
        },
        //     //pagination调用回调函数
        // this.cb(this.default.pageInfo.pagenum)
        cb(m) {  //所以m是pagenum
            //获取当前页需要显示的数据
            var ar1 = dt.slice((m - 1) * 20, m * 20)
            console.log(ar1);
            //创建拼接所有数据的字符串
            var str = ''

            getCatId()

            //遍历当前ar1数组中所有的数据
            ar1.forEach(item => {
                str += `
                    <div class="card text-center col-3">
                        <div class="card-body">
                            <div class="figure">
                                <a href="./detail.html?id=${item.goods_id}"><img src="${item.goods_small_img1}" class="card-img-top" alt="${item.goods_name}"></a>
                            </div>
                            <h4 class="figure-title text-uppercase">${item.goods_name}</h4>
                            <div class="figure-text more-ellipsis">${item.goods_title}</div>
                            <p class="price">${item.special_price}</p>
                            <div class="goods-list-hover">
                                <a href="./cart.html" class="btn btn-default" data-id=${item.goods_id} type="button">加入购物车</a>
                                <a href="./other-pages/checkout-fastbuy.html" class="btn btn-danger" type="button">立即购买</a>
                            </div>
                        </div>
                    </div>
                `
            })
            //把当前拼接好的字符串，添加到goodsListBox row盒子中

            goodsListBox.html(str)
        }
    });

}

// 商品列表过滤
$('.order-default').on('click', function () {
    $(this).addClass('active-order').siblings().removeClass('active-order')
    orderName = ''
    getGoodsList(cat_id, orderName)
})

$('.order-price').on('dblclick', function () {
    $(this).addClass('active-order').siblings().removeClass('active-order')
    orderName = 'special_price'
    console.log(orderName);
    getGoodsList(cat_id, orderName,url='../php/list2.php')
    // getGoodsList2(cat_id, orderName)
})

$('.order-price').on('click', function () {
    $(this).addClass('active-order').siblings().removeClass('active-order')
    orderName = 'special_price'
    console.log(orderName);
    getGoodsList(cat_id, orderName)
})

// $('.order-price .icon-triangle-top').on('click',function () {
//     $(this).parent().parent().addClass('active-order').siblings().removeClass('active-order')
//     orderName = 'special_price'
//     console.log(orderName);
//     getGoodsList2(cat_id, orderName) //升序
// })

// $('.order-price .icon-triangle-bottom').on('click',function () {
//     $(this).parent().parent().addClass('active-order').siblings().removeClass('active-order')
//     orderName = 'special_price'
//     console.log(orderName);
//     getGoodsList(cat_id, orderName)
// })


$('.high-sales').on('click', function () {
    $(this).addClass('active-order').siblings().removeClass('active-order')
    orderName = 'high_sales'
    getGoodsList(cat_id, orderName)
    
})

$('.high-opinion').on('click', function () {
    $(this).addClass('active-order').siblings().removeClass('active-order')
    orderName = 'high_opinion'
    getGoodsList(cat_id, orderName)
})

$('.new-current').on('click', function () {
    $(this).addClass('active-order').siblings().removeClass('active-order')
    orderName = 'current_time'
    getGoodsList(cat_id, orderName)
})

function hideMore() {
    $('.breadcrumb').not($('.breadcrumb').eq(0)).hide();
    $('.gfilter').not($('.gfilter').eq(0)).hide();
}
var cartList = localStorage.getItem('cartList6')
// 给大盒子对象绑定点击事件
goodsListBox.on('click', function (e) {
    var e = e || window.event
    //获取点击对象
    var target = e.target

    //判断点击的对象是否为加入购物车按钮
    if (target.innerHTML == "加入购物车") {
        // 获取localStorage中的cartList6
        
        // console.log(cartList);
        var id = target.getAttribute("data-id")
        // console.log(id);
        var bb = dt[id]
        // 判断cartList是否存在
        if (cartList) {
            // 存在，则在cartList里面添加或者追加数据
            // 把localStorage中获取的内容(一般都是字符串)转为数组对象
            cartList = JSON.parse(cartList)
            // 既然是商品详情，那么就有当前的详情商品，
            // 则需要判断它是否在localStorage中，有则追加数据即可，无则新追加商品到数组中
            var a = 0  //判断 当前的详情商品 是否在localStorage中

            // 遍历数组中的所有元素
            cartList.forEach(item => {
                // detail.php请求回来的(dt)数据中有和localStorage相等的，
                // 则代表这个商品之前加入过购物车，即存在localStorage中，则a++
                if (item.goods_id == id) {
                    a++
                    item.cart_number++
                }
            })

            // 得遍历完才能知道是否存在localStorage中，
            // 所以 是否需要  新添商品 写在遍历之后
            // 判断a是否等于==0，等于则是不在localStorage中，需要添加
            if (a == 0) {
                console.log(555555);
                // 修改商品数量
                bb.cart_number = 1
                // 在cartList中存放，detail.php响应回来的数据
                // 即把当前商品对象追加到数组中
                cartList.push(bb)
            }

            // 因为已经创建过cartList6了，所以直接放值cartList，而不是放dt
            localStorage.setItem('cartList6', JSON.stringify(cartList))

        } else {
            // 不存在则创建cartList6,用来本地存储商品
            console.log(dt[id]);

            bb['cart_number'] = 1
            // 把商品添加到localStorage中   (键名：值)，键名不是变量，是字符串
            // 没有创建过cartList6，则获取cartList6时没有值，所以创建时用响应的数据dt
            localStorage.setItem('cartList6', JSON.stringify([bb]))
        }

    }

})