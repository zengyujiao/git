<?php
    $username = $_REQUEST["username"];
    $password = $_REQUEST["password"];
    $phone = $_REQUEST["phone"];

    $db = mysqli_connect("127.0.0.1","root","","shengxian");
    $sql = "SELECT * FROM reg WHERE name='$username'";
    $result = mysqli_query($db,$sql);
    $data = array("status"=>"error","data"=>array("msg"=>"注册失败"));
    if(mysqli_num_rows($result) == "1"){
        $data["data"]["msg"] = "注册失败，该用户名已经存在";
        echo json_encode($data,true);
    }
    else{
        $sql = "INSERT INTO `reg` (`id`, `name`, `password`, `phone`) VALUES (NULL, '$username', '$password', '$phone');";
        mysqli_query($db, $sql);
        $data["data"]["msg"] = "恭喜你，注册成功";
        $data["status"] = "success";
        echo json_encode($data, true);
    }
?>