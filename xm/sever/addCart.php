<?php
// 链接数据库
$con = mysqli_connect("127.0.0.1","root","","shengxian");
$goodid = $_REQUEST["goodid"];
$price= $_REQUEST["price"];

$sql = "SELECT * FROM cart WHERE goodid = '$goodid'";
$result = mysqli_query($con,$sql);
$row = mysqli_num_rows($result);

if($row == 0){
    $inSql = "INSERT INTO `cart` (`id`, `goodid`, `num`, `total`,`price`,`isActive`) 
    VALUES (NULL, '$goodid', 1, '$price','$price',1)";
    mysqli_query($con,$inSql);
}
elseif($row == 1){
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $num = $data[0]["num"] + 1;
    $total = $data[0]["price"] * $num;

    $updateSql = "UPDATE cart SET num='$num',total='$total' WHERE goodid=' $goodid'";
    mysqli_query($con, $updateSql);
}

$totalCount = "SELECT * FROM  cart";
$result = mysqli_query($con, $totalCount);
$row = mysqli_num_rows($result);
echo '{"totalRow":'.$row.'}';
?>