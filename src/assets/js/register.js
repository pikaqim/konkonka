//获取操作对象
var submit = $('[type="submit"]')
var usernameErro = $('.username-erroTips')
var pwdErro = $('.pwd-erroTips')
var passCheckErro = $('.pwdCheck-erroTips')

var user = false
//验证账号
$('[name="username"]').blur(function () {
    //获取输入框内容
    var val = $(this).val()

    if (val.indexOf('@') != -1) {
        var reg3 = /^[1-9]\d{5,9}@(qq|163|sina)\.com$/
        if (reg3.test(val)) {
            user = true
        } else {
            usernameErro.html("邮箱格式有误").show(300, "linear").delay(3000).hide(300, "linear");
            user = false
            this.focus()
        }
    } else {
        var reg = /^[0-9A-Za-z]\w{3,11}$/
        var reg2 = /^\d{4,10}$/
        if (reg.test(val)) {
            user = true
        } else if (val.length < 4) {
            // $('#example').tooltip(options)
            usernameErro.show(300, "linear").html("请输入正确4-12字符").delay(3000).hide(300, "linear");
            this.focus()
            user = false
        } else if (reg2.test(val)) {
            usernameErro.show(300, "linear").html("登录账号不能全为数字").delay(3000).hide(300, "linear");
            this.focus()
            user = false
        }
    }
})

var pwd1 = false
//密码验证
$('#inputPassword3').blur(function () {
    var val = $(this).val()
    var reg = /^\w{6,16}$/
    if (reg.test(val)) {
        var a = 0 //数字
        var b = 0 //小写字母
        var c = 0 //大写字母
        var d = 0 //下划线
        //遍历当前字符串
        for (var i = 0; i < val.length; i++) {
            //判断当前字符是否为数字
            if ("0" <= val[i] && val[i] <= "9") {
                a = 1
            } else if ('a' <= val[i] && val[i] <= 'z') {
                b = 1
            } else if ('A' <= val[i] && val[i] <= "Z") {
                c = 1
            } else {
                d = 1
            }
        }
        //判断当前出现了多少中字符
        if (a + b + c + d == 1) {
            pwdErro.html("弱")
        } else if (a + b + c + d == 2) {
            pwdErro.html("中")
        } else {
            pwdErro.html("强")
        }
        pwd1 = true
    } else {
        pwdErro.html("请输入正确6-16密码").show(300, "linear").delay(3000).hide(300, "linear");
        this.focus()
        pwd1 = false
    }
});

var pwd2 = false
// 确认密码
$('#checkPassword3').blur(function () {
    var val = $(this).val()
    if ($('#checkPassword3').val() != $('#inputPassword3').val()) {
        $('.alert-danger').html('两次输入的密码不一致').show(300, "linear").delay(3000).hide(300, "linear");
        $('.error').css('display', 'block');
        this.focus()
        pwd2 = false
    } else {
        pwd2 = true

    }
})

// 禁用提交按钮
submit.attr("disabled", false);
submit.css('background-color', '#ccc');
// console.log($('#gridCheck1').attr("checked"));//checked
$('#gridCheck1').click(function () {

    if ($('#gridCheck1').is(":checked")) {
        submit.attr("disabled", false);
        submit.css('background-color', '#ffc107');
    } else {
        // 禁用提交按钮
        submit.attr("disabled", true);
        submit.css('background-color', '#ccc');

    }
})
// console.log(uname);

var search = location.search
//注册事件
submit.click(function () {

    if (user && pwd1 && pwd2) {
        // 键名可以随便取，只是用来和后台对接数据，不一定要和数据库同名
        var uname = $('[name="username"]').val();
        var pwd = $('#inputPassword3').val();
        console.log(1111)

        $.post(
            '../php/register.php',
            {
                username: uname,
                password: pwd
            },
            function (dt) {
                console.log(dt);
                // return false
                if (dt == 1) {
                    if (search) {
                        // 判断当前参数中
                        var new_url = search.split('=')[1]
                        location.href = new_url;
                        console.log(new_url);
                    } else {
                        location.href = "./list.html"
                        // console.log(555);
                    }
                    setCookie("user", uname)
                    
                    
                    return true

                } else {
                    alert("注册失败")
                   
                    return false
                }

            }, 'json')
        return false
    } else {
        //调用账号验证函数
        $('[name="username"]').blur()
        $('#inputPassword3').blur()
        $('#checkPassword3').blur()
        return false
    }
});


