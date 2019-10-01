<?php
    $con = mysqli_connect("127.0.0.1","root","","shengxian");
    $id = $_REQUEST["id"];
    $sql = "DELETE FROM cart WHERE id='$id'";
    mysqli_query($con,$sql);
?>