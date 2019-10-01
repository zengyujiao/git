<?php
    #链接数据库
    $con = mysqli_connect("127.0.0.1","root","","shengxian");
    $sql = "SELECT cart.*,head1.name,head1.price,head1.src FROM cart , head1 WHERE cart.id = head1.id";
    $result = mysqli_query($con,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($data,true);
?>