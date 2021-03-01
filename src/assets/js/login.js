//获取操作对象
var submit=$('[type="submit"]')
var user=$('#inputEmail3')
var pass=$('[type="password"]')
var u1=user.val()
var p1=pass.val()

// 获取地址栏中的参数
var search=location.search

console.log($(this).attr('checked'));
//给能被点击的登录按钮绑定点击事件
submit.on('click',function(){
    //获取账号输入框中的value
    u1=user.val()
    p1=pass.val()
    //调用ajax发送请求
    $.ajax({
        url:'../php/login.php',
        type: 'GET',
        data: {username:u1,password:p1},
        // data: `username=${u1}&password=${p1}`,
        success (dt){
            console.log(dt);
            //判断当前返回值是否等于1
            if(dt==1){
                //判断当前地址栏中是否有参数
                if(search){
                    //获取参数中传入的地址
                    var new_url=search.split('=')[1]
                    location.href=new_url
                }else{
                    location.href="./list.html"
                }
                setCookie("user",u1)
            }else{
                alert("登录失败")
            }
        }
    })
    return false
})

//给  自动登录按钮  对象绑定点击事件
console.log($('#gridCheck1'));
$('.form-check').on('click',function(){
    //判断当前选项是否被选中
    if($(this).attr('checked','checked')){
        console.log($(this).attr('checked'));
        // 记住cookie，过期时间为7天
        setCookie('user',u1,604800)
    }
    // else{
    //     // cookie过期时间为会话
    //     setCookie('user',u1,session.getId())
    // }
})