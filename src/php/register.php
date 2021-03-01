<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u = $_POST['username'];
$p = $_POST['password'];
// 链接数据库
$link = mysqli_connect("localhost","root",'',"konka");
// 设置编码 
mysqli_set_charset($link,"utf-8");
// SQL语句
$sql = "INSERT INTO user (username, password) VALUES ('$u','$p')";
// 执行SQL语句，并返回结果集
$result = mysqli_query($link,$sql);
// 判断当前结果集中是否存在数据
if($result){
    echo '1';
}else{
    echo '0';
}
// 关闭数据库
mysqli_close($link);
?>