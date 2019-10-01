<?php
header("Content-type:text/html;charset=utf-8");
$db = mysqli_connect("127.0.0.1","root","","shengxian");
$page = $_REQUEST["page"] * 60;
$sql = "SELECT * FROM tit limit $page , 60";
$res = mysqli_query($db,$sql);
$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
$ponse = array("status" => "success","data" => $data);
print_r(json_encode($ponse,true));

?>