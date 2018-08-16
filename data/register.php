<?php
require("init.php");
@$uname=$_REQUEST["uname"];
@$pwd=$_REQUEST["pwd"];
@$repwd=$_REQUEST["repwd"];
@$phone=$_REQUEST["phone"];
@$email=$_REQUEST["email"];
@$sex=$_REQUEST["sex"];
@$code=$_REQUEST["code"];
@$user_name=$_REQUEST["user_name"];
if($uname=="" || $uname==null){
    echo '{"code":-1,"msg":"用户名不能为空"}';
    exit;
}else{
	$sql="select uname from xq_user where uname='$uname'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_num_rows($result);
	if($row){
		echo '{"code":-11,"msg":"用户名已使用"}';
		exit;
	}
}
if($pwd=="" || $pwd==null){
    echo '{"code":-2,"msg":"密码不能为空"}';
    exit;
}
if($repwd=="" || $repwd!=$pwd){
    echo '{"code":-3,"msg":"两次密码不一致"}';
    exit;
}
if($phone=="" || $phone==null){
    echo '{"code":-4,"msg":"手机号不能为空"}';
    exit;
}else{
	$sql="select phone from xq_user where phone='$phone'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_num_rows($result);
	if($row){
		echo '{"code":-12,"msg":"手机号已存在"}';
		exit;
	}
}
if($email=="" || $email==null){
    echo '{"code":-5,"msg":"邮箱不能为空"}';
    exit;
}
if($user_name==""||$user_name==null){
    echo '{"code":-10,"msg":"性名不能为空"}';
}

$uPattern='/[a-zA-Z0-9]{3,12}/';//用户名
$pPattern='/[a-zA-Z0-9]{6,12}/';//第一次输入密码
$phPattern='/1[34578]\d{9}/';//电话号码
$ePattern='/^([a-zA-Z0-9_-])+\@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/';//电子邮箱
$user_namePattern='/[^a-zA-Z0-9_u4e00-u9fa5]+/';//用户真实姓名
if(!preg_match($uPattern,$uname)){
    echo '{"code":-6,"msg":"用户名格式不正确"}';
    exit;
}
if(!preg_match($pPattern,$pwd)){
    echo '{"code":-7,"msg":"密码格式不正确"}';
    exit;
}
if(!preg_match($phPattern,$phone)){
    echo '{"code":-8,"msg":"手机号格式不正确"}';
    exit;
}else{
	$sql="select phone from xq_user where phone='$phone'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_num_rows($result);
	if($row){
		echo '{"code":-12,"msg":"手机号已存在"}';
		exit;
	}
}
if(!preg_match($ePattern,$email)){
    echo '{"code":-9,"msg":"邮箱格式不正确"}';
    exit;
}
if(!preg_match($user_namePattern,$user_name)){
    echo '{"code":-10,"msg":"姓名格式不正确"}';
    exit;
}
if($code==""||$code==null||strtolower($code)!=strtolower($_session["code"])){
    echo'{"code":-11,"msg":"验证码错误"}';
    die;
}
$sql="insert into xq_user values(null,'$uname','$pwd','$email','$phone','img/avatar/default.png','$user_name','$sex')";
$result=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
if($row){
    echo '{"code":1,"msg":"注册成功"}';
}else{
    echo mysqli_error($conn);
    exit;
}
?>