<?php
	session_start();
    require("init.php");
    @$u=$_REQUEST["uname"];
    @$p=$_REQUEST["upwd"];
	@$code=$_REQUEST["code"];
    if($u==""||$u==null){
        echo '{"code":-1,"msg":"用户名不能为空"}';
        die;
    }
    if($p==""||$u==null){
        echo '{"code":-2,"msg":"密码不能为空"}';
        exit;
    }
    $uPattern= '/[a-zA-Z0-9]{3,12}/';
    $pPattern= '/[a-zA-Z0-9]{3,12}/';
    if(!preg_match($uPattern,$u)){
        echo '{"code":-3,"msg":"用户名格式不正确"}';
        exit;
    }
    if(!preg_match($pPattern,$p)){
        echo '{"code":-4,"msg":"密码格式不正确"}';
        exit;
    }
	if($code==""||$code==null||strtolower($code)!=strtolower($_SESSION["code"])){
		echo '{"code":-5,"msg":"验证码错误"}';
		exit;
	}
    $sql= "select * from xq_user where uname='$u' and upwd='$p'";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($result);
    if($row==null){
        echo '{"code":-5,"msg":"用户名或则密码错误"}';
    }else{
        echo '{"code":1,"msg":"欢迎回来:'.$row[1].'"}';
    }
?>