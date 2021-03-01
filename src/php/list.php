<?php
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','konka');
//设置编码
mysqli_set_charset($link,"utf8");

// 获取请求数据
$cat_id = $_GET['cat_id'];
$orderName = $_GET['orderName'];
$newCat = urldecode($cat_id);
$newOrderName = urldecode($orderName);

//SQL语句
if($cat_id==''){
    if($newOrderName==''){
        $sql = "select * from konka_goods";
    } else {
        $sql = "select * from konka_goods ORDER BY $newOrderName DESC";
    }
} else {
    if(empty($newOrderName)){
        $sql = "select * from konka_goods where cat_id='$newCat'".
            "or cat_one_id='$newCat'".
            "or goods_title LIKE '%$newCat%'";
    } else {
        $sql = "select * from konka_goods where cat_id='$newCat'".
            "or cat_one_id='$newCat'".
            "or goods_title LIKE '%$newCat%'".
            "ORDER BY $newOrderName DESC";
    }
}


//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
// 创建存储所有数据的数组
$arr = [];
// 遍历结果集
while($row=mysqli_fetch_assoc($result)){
    // 把遍历出来的数据追加到数组中
    array_push($arr,$row); //要执行的都在后面那个参数
}
// 把当前数组转为字符串，并响应给浏览器
echo json_encode($arr);
// 关闭连接
mysqli_close($link);

?>