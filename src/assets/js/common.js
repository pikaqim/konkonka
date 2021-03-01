// header
var cartNum = $(".cart-num").html()
// console.log(cartNum);

// //获取localStorage中的cartList6
// var cartList = localStorage.getItem("cartList6")
// //把当前cartList字符串转为数组对象
// cartList = JSON.parse(cartList) || []

// cartList.forEach(item => {
//     item.cart_nummber++
//     $(".cart-num").html(item.cart_nummber)
//     console.log(item.cart_number);
// })


//获取当前滚动距离
var top1;
var sum = 0;
var backTop = $('#the-top')

//给window对象绑定滚动事件
$(window).scroll(function () {

    //获取当前滚动距离
    // top1 = document.documentElement.scrollTop
    top1 = $(window).scrollTop()
    // var homeStarTop = $('.home-start').offset().top - 54 //因为top1>40时nav不占位,它的高为50，阴影为4
    

    var navTop = $('.topbar').height();
    //判断当滚动距离大于40，即大于navTop时，nav位置fixed
    if (top1 > navTop) {
        $('.header').css({ "position": "fixed", "top": "0" });
        //  $('.header').css({"position":"fixed",'transition':"all .5s 0s linear","top":"0"});
    } else {
        $('.header').css({ "position": "absolute", "top": "40px" });
    }

   

})

//点击固定元素，回到最初的位置,给backTop对象绑定点击事件
// backTop.bind("click", function() {
backTop.on("click", function () {

    var dsq = setInterval(function () {
        //每次移动当前滚动距离的10分之一，为了缓慢移动到顶部
        var speed = Math.ceil(top1 / 10)
        //当滚动距离为0时，清除定时器
        if (top1 <= 0) {
            clearInterval(dsq)
        }
        //重新设置滚动距离  
        document.documentElement.scrollTop = top1 - speed //定时器自动返回顶部，每走一步长就改一下滚动距离
        // console.log('hello')
    }, 50)

});




// footer
 