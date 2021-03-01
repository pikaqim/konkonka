// 获取当前地址栏中的参数信息(list跳转时有设置)
var search = location.search
// 获取大盒子对象
var productContainer = $('.product-container')

//全局变量，为了后面的localStorage获取商品数据使用
var dt;

// 判断当前search是否有值,有值则为从其他页面点击选中了商品
if (search) {
    //分割search字符串
    var id = search.split('=')[1];
    $(async function () {
        dt = await $.get(
            '../php/detail.php',
            { id: id },
            function (res) {
                return res
            }, 'json')

        console.log(dt); //详情页，只有一条数据，不用遍历
        // 拼接字符串
        var str = `
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
                        `
        productContainer.html(str)

        // 下拉级联
        $('#chooseUp').click(function () {
            $('#choose-regions').toggleClass('hide')
        })
        selectEare()

        // 滚动显示返回顶部按钮
        $(window).scroll(function () {
            var backTop = $('#the-top');
            var top1 = document.documentElement.scrollTop;

            var homeStarTop = ($('.product-page-cart>.row').offset().top) - 54 //自行定义

            //判断当滚动距离大于homeStarTop时，the-top显示
            if (top1 > homeStarTop) {
                backTop.show();
            } else {
                backTop.hide();
            }
        })

        bigImgList = [
            dt.goods_big_img1,
            dt.goods_big_img2,
            dt.goods_big_img3,
            dt.goods_big_img4,
            dt.goods_big_img5
        ]

        smallImgList = [
            dt.goods_small_img1,
            dt.goods_small_img2,
            dt.goods_small_img3,
            dt.goods_small_img4,
            dt.goods_small_img5
        ]

        $('.product-other-images li').hover(function () {
            console.log(1);
            $(this).addClass('current').siblings().removeClass('current')
            var index = $(this).index();
            $('.jqzoom').attr('href', smallImgList[index])
            $('.bigImg').attr('src', bigImgList[index])
            $('.zoomWrapperImage img').attr('src', bigImgList[index])
            zoom()
        })
        zoom()

        function zoom() {
            $('.jqzoom').jqzoom({
                zoomType: 'innerzoom',
                preloadImages: true,
                title: false
            });
        }

        

    })
} else {
    alert("你还没选中商品")
    location = "./list.html"
    // 怀疑官网采用Nginx反向代理，代理了网址，获取不到search，
    // 但是代理的依然是具体的一个商品详情页，也就相当于要选中商品
}
// 因为详情页有加入购物车按钮，所以需要操作数据，
// 不想直接操作数据库，就存储在本地存储里，所以需要操作localStorage

// 给大盒子对象绑定点击事件
productContainer.on('click', function (e) {
    var e = e || window.event
    //获取点击对象
    var target = e.target
    //判断点击的对象是否为加入购物车按钮
    if (target.innerHTML == "加入购物车") {
        // 获取localStorage中的cartList6
        var cartList = localStorage.getItem('cartList6')
        console.log(cartList);
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
                if (item.goods_id == dt.goods_id) {
                    a++
                    item.cart_number++
                }
            })

            // 得遍历完才能知道是否存在localStorage中，
            // 所以 是否需要  新添商品 写在遍历之后
            // 判断a是否等于==0，等于则是不在localStorage中，需要添加
            if (a == 0) {
                // 修改商品数量
                dt.cart_number = 1
                // 在cartList中存放，detail.php响应回来的数据
                // 即把当前商品对象追加到数组中
                cartList.push(dt)
            }

            // 因为已经创建过cartList6了，所以直接放值cartList，而不是放dt
            localStorage.setItem('cartList6', JSON.stringify(cartList))

        } else {
            // 不存在则创建cartList6,用来本地存储商品
            console.log(dt);

            dt['cart_number'] = 1
            // 把商品添加到localStorage中   (键名：值)，键名不是变量，是字符串
            // 没有创建过cartList6，则获取cartList6时没有值，所以创建时用响应的数据dt
            localStorage.setItem('cartList6', JSON.stringify([dt]))
        }

    }

    // ${dt.goods_number >= dt.cart_number ? "有货" : '无货'}
})


function selectEare() {
    //创建省市区的数据
    var ar1 = [
        {
            name: "北京市", cityList: [
                {
                    name: "市辖区", areaList: [
                        {
                            name: '东城区', lastarea: [
                                "东华门街道",
                                "景山街道",
                                "交道口街道",
                                "安定门街道",
                                "北新桥街道",
                                "东四街道",
                                "朝阳门街道",
                                "建国门街道",
                                "东直门街道",
                                "和平里街道",
                                "前门街道",
                                "崇文门外街道",
                                "东花市街道",
                                "龙潭街道",
                                "体育馆路街道",
                                "天坛街道",
                                "永定门外街道"
                            ],
                        },
                        {
                            name: '西城区', lastarea: [
                                "西长安街街道",
                                "新街口街道",
                                "月坛街道",
                                "展览路街道",
                                "德胜街道",
                                "金融街街道",
                                "什刹海街道",
                                "大栅栏街道",
                                "天桥街道",
                                "椿树街道",
                                "陶然亭街道",
                                "广安门内街道",
                                "牛街街道",
                                "白纸坊街道",
                                "广安门外街道"
                            ]
                        },
                        {
                            name: '朝阳区', lastarea: [
                                "建外街道",
                                "朝外街道",
                                "呼家楼街道",
                                "三里屯街道",
                                "左家庄街道",
                                "香河园街道",
                                "和平街街道",
                                "安贞街道",
                                "亚运村街道",
                                "小关街道",
                                "酒仙桥街道",
                                "麦子店街道",
                                "团结湖街道",
                                "六里屯街道",
                                "八里庄街道",
                                "双井街道",
                                "劲松街道",
                                "潘家园街道",
                                "垡头街道",
                                "南磨房地区",
                                "高碑店地区",
                                "将台地区",
                                "太阳宫地区",
                                "大屯街道",
                                "望京街道",
                                "小红门地区",
                                "十八里店地区",
                                "平房地区",
                                "东风地区",
                                "奥运村街道",
                                "来广营地区",
                                "常营地区",
                                "三间房地区",
                                "管庄地区",
                                "金盏地区",
                                "孙河地区",
                                "崔各庄地区",
                                "东坝地区",
                                "黑庄户地区",
                                "豆各庄地区",
                                "王四营地区",
                                "东湖街道",
                                "首都机场街道"
                            ]
                        },
                        {
                            name: '丰台区', lastarea: [
                                "右安门街道",
                                "太平桥街道",
                                "西罗园街道",
                                "大红门街道",
                                "南苑街道",
                                "东高地街道",
                                "东铁匠营街道",
                                "卢沟桥街道",
                                "丰台街道",
                                "新村街道",
                                "长辛店街道",
                                "云岗街道",
                                "方庄地区",
                                "宛平城地区",
                                "马家堡街道",
                                "和义街道",
                                "卢沟桥地区",
                                "花乡地区",
                                "南苑地区",
                                "长辛店镇",
                                "王佐镇"
                            ]
                        },
                    ]
                }
            ]
        },
        {
            name: "天津市", cityList: [
                {
                    name: "市辖区", areaList: [
                        {
                            name: '和平区', lastarea: [
                                "劝业场街道",
                                "小白楼街道",
                                "五大道街道",
                                "新兴街道",
                                "南营门街道",
                                "南市街道"
                            ],
                        },
                        {
                            name: '河东区', lastarea: [
                                "大王庄街道",
                                "大直沽街道",
                                "中山门街道",
                                "富民路街道",
                                "二号桥街道",
                                "春华街道",
                                "唐家口街道",
                                "向阳楼街道",
                                "常州道街道",
                                "上杭路街道",
                                "东新街道",
                                "鲁山道街道",
                                "天津铁厂街道"
                            ]
                        },
                        {
                            name: '河西区', lastarea: [
                                "大营门街道",
                                "下瓦房街道",
                                "桃园街道",
                                "挂甲寺街道",
                                "马场街道",
                                "越秀路街道",
                                "友谊路街道",
                                "天塔街道",
                                "尖山街道",
                                "陈塘庄街道",
                                "柳林街道",
                                "东海街道",
                                "梅江街道",
                                "太湖路街道"
                            ]
                        },
                        {
                            name: '南开区', lastarea: [
                                "长虹街道",
                                "鼓楼街道",
                                "兴南街道",
                                "广开街道",
                                "万兴街道",
                                "学府街道",
                                "向阳路街道",
                                "嘉陵道街道",
                                "王顶堤街道",
                                "水上公园街道",
                                "体育中心街道",
                                "华苑街道"
                            ]
                        },
                        {
                            name: '河北区', lastarea: [
                                "光复道街道",
                                "望海楼街道",
                                "鸿顺里街道",
                                "新开河街道",
                                "铁东路街道",
                                "建昌道街道",
                                "宁园街道",
                                "王串场街道",
                                "江都路街道",
                                "月牙河街道"
                            ]
                        }
                    ]
                }
            ]
        },
    ]


    $('.nav-tabs li').click(function () {
            console.log(111);
            var index = $(this).index()
            $('.options-box ul').eq(index).show().siblings().hide()
    })

    for (var i in ar1) {
        var ProName = ar1[i]['name']
        var newProli = `<li data-value="${ProName}" id="0" title="${ProName}">${ProName}</li>`
        // 省份数据加载
        $('.select-first').append(newProli)
    }

    // 省份
    $('.select-first li').click(function () {


        $(this).addClass('active').siblings().removeClass('active')
        var sheng = $(this).attr('data-value')
        $('.choose-s a').text(sheng)
        $('.select-two').empty()
        $('.select-three').empty()
        $('.select-last').empty()

        for (var i in ar1) {
            if (ar1[i]["name"] == sheng) {
                for (var j in ar1[i]['cityList']) {
                    var cityName = ar1[i]["cityList"][j]["name"]

                    var newCityLi = `<li data-value="${cityName}" id="0" title="${cityName}">${cityName}</li>`
                    //城市数据加载
                    $('.select-two').append(newCityLi)
                }
            }
        }
        //城市
        $('.select-two li').click(function () {


            $(this).addClass('active').siblings().removeClass('active')
            var city2 = $(this).attr('data-value')
            $('.choose-c a').text(city2)
            $('.select-three').empty()
            $('.select-last').empty()

            for (var i in ar1) {
                //判断当前遍历出来的省份是否是被选中的
                if (ar1[i]["name"] == sheng) {
                    //遍历城市数组
                    for (var j in ar1[i]['cityList']) {

                        if (ar1[i]["cityList"][j]["name"] == city2) {
                            //遍历区
                            for (var k in ar1[i]["cityList"][j]["areaList"]) {
                                var areaName = ar1[i]["cityList"][j]["areaList"][k]['name']
                                var newAreaLi = `<li data-value="${areaName}" id="0" title="${areaName}">${areaName}</li>`
                                $('.select-three').append(newAreaLi)
                            }
                        }
                    }
                }
            }



            //区
            $('.select-three li').click(function () {


                $(this).addClass('active').siblings().removeClass('active')
                var area2 = $(this).attr('data-value')
                console.log(area2);
                $('.choose-x a').text(area2)
                $('.select-last').empty()

                for (var i in ar1) {
                    //判断当前遍历出来的省份是否是被选中的
                    if (ar1[i]["name"] == sheng) {
                        //遍历城市数组
                        for (var j in ar1[i]['cityList']) {

                            if (ar1[i]["cityList"][j]["name"] == city2) {
                                //遍历区
                                for (var k in ar1[i]["cityList"][j]["areaList"]) {
                                    if (ar1[i]["cityList"][j]["areaList"][k]['name'] == area2) {
                                        for (var l in ar1[i]["cityList"][j]["areaList"][k]['lastarea']) {
                                            var areaLastName = ar1[i]["cityList"][j]["areaList"][k]['lastarea'][l]
                                            console.log(areaLastName);
                                            var newAreaLastLi = `<li data-value="${areaLastName}" id="0" title="${areaLastName}">${areaLastName}</li>`
                                            $('.select-last').append(newAreaLastLi)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $('.select-last li').click(function () {
                    $(this).addClass('active').siblings().removeClass('active')
                    var lastArea2 = $(this).attr('data-value')
                    console.log(lastArea2);
                    $('.choose-q a').text(lastArea2)

                    $('#choose-regions').addClass('hide')
                    $('.address-info-name span').eq(0).text(sheng)
                    $('.address-info-name span').eq(1).text(city2)
                    $('.address-info-name span').eq(2).text(area2)
                    $('.address-info-name span').eq(3).text(lastArea2)

                })
            })
        })


    })
}



