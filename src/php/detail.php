<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','konka');
$id = $_GET['id'];
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql = "select * from konka_goods where goods_id='$id'";
// 执行SQL语句，并返回结果集
$result = mysqli_query($link,$sql);
//获取结果集中的第一条数据
$row=mysqli_fetch_assoc($result);
// 把当前数组转为字符串，并响应给浏览器
echo json_encode($row);
// 关闭连接
mysqli_close($link);

?>