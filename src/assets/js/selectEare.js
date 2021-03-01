//创建省市区的数据
var ar1 = [
    {
        name: "北京市", cityList: [
            {
                name: "市辖区", areaList: [
                    { name: '东城区', lastarea: [
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
                    { name: '西城区', lastarea: [
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
                    ] },
                    { name: '朝阳区', lastarea: [
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
                    ] },
                    { name: '丰台区', lastarea: [
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
                    ] },
                ]
            }
        ]
    },
    {
        name: "天津市", cityList: [
            {
                name: "市辖区", areaList: [
                    { name: '和平区', lastarea: [
                        "劝业场街道",
                        "小白楼街道",
                        "五大道街道",
                        "新兴街道",
                        "南营门街道",
                        "南市街道"
                    ],
                    },
                    { name: '河东区', lastarea: [
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
                    ] },
                    { name: '河西区', lastarea: [
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
                    ] },
                    { name: '南开区', lastarea: [
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
                    ] },
                    { name: '河北区', lastarea: [
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
                    ] }
                ]
            }
        ]
    },
]

var ar2 = 

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
                                if(ar1[i]["cityList"][j]["areaList"][k]['name'] == area2){
                                    for(var l in ar1[i]["cityList"][j]["areaList"][k]['lastarea']){
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