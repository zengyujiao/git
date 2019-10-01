<?php
    header("Content-type:text/html;charset=utf-8");
    $con = mysqli_connect("127.0.0.1","root","","shengxian");
    $json = file_get_contents("tit.json");
    $data = json_decode($json,true);

    // # 遍历数组
    // for($i = 0;$i<count($data);$i++){
    //     $src = $data[$i]["src"];
    //     $price = floatval(substr($data[$i]["price"],1));
    //     $name = $data[$i]["name"];
    //     $des = $data[$i]["des"];
    //     $oper = $data[$i]["oper"];
    //     $oper1 = $data[$i]["oper1"];
    //     $oper2 = $data[$i]["oper2"];
    //     $ql = "INSERT INTO `wrapper` (`id` ,`src`  ,`price`,`name`,`des`,`oper`,`oper1`,`oper2`)
    //     VALUES (NUll, '$src', '$name', $price,'$des','$oper','$oper1','$oper2');";
    //     mysqli_query($con,$ql);
    // }  
    // for($i = 0;$i<count($data);$i++){
    //     $src = $data[$i]["src"];
    //     $ql = "INSERT INTO `br4` (`id` ,`src`)
    //     VALUES (NUll, '$src');";
    //     mysqli_query($con,$ql);
    // }  
    for($i = 0;$i<count($data);$i++){
        $src = $data[$i]["src"];
        $price = $data[$i]["price"];
        $name = $data[$i]["name"];
        $des = $data[$i]["des"];
        $clname = $data[$i]["clname"];
        $oper = $data[$i]["oper"];
        $oper1 = $data[$i]["oper1"];
        $oper2 = $data[$i]["oper2"];
        $ql = "INSERT INTO `tit` (`id` ,`src`  ,`price`,`name`,`des`,`clname`,`oper`,`oper1`,`oper2`)
        VALUES (NUll, '$src', '$price','$name','$des','$clname','$oper','$oper1','$oper2');";
        mysqli_query($con,$ql);
    }  
        
?>