<?php
   $username = $_REQUEST["username"];
   $password = $_REQUEST["password"];

   $db = mysqli_connect("127.0.0.1", "root", "", "shengxian");
    // 查询数据库有没有数据
   $sql = "SELECT * FROM reg WHERE name='$username'";
   $result = mysqli_query($db,$sql);

    $data = array("status" => "error", "data" => array("msg" => "注册失败"));
    if(mysqli_num_rows($result) == "1"){

    $dataT = mysqli_fetch_all($result, MYSQLI_ASSOC);
        if($password == $dataT[0]["password"]){
            # 登录成功
            $data["status"]="success";
            $data["data"]["msg"] = "登录成功";
            echo json_encode($data, true);
        }
        else{
            # 登录失败 密码不正确
            $data["status"] = "error";
            $data["data"]["msg"] = "登录失败，密码不正确";
            echo json_encode($data, true);
        }
        // print_r($data[0]["password"]);
        // print_r($data);
    }
    else{
    # 登录失败：该用户不存在！
    $data["status"] = "error";
    $data["data"]["msg"] = "登录失败，该用户不存在！";
    echo json_encode($data, true);
    }
?>