<?php
	header("Content-Type:application/json");
	require("../init.php");
	$output=[
		//product	
	];
	@$lid=$_REQUEST["lid"];
	if($lid==null){
		echo('{"echo":-1,"msg":"输入商品lid"}');
	}
	$sql="select * from xq_shop_products where lid=$lid";
	$result=mysqli_query($conn,$sql);
	$output["product"]=sql_execute($sql)[0];
	$shopid=$output["product"]["shopid"];
	$sql="select * from xq_shopinfo where shopid=$shopid ";
	$output["shopinfo"]=sql_execute($sql);
	echo json_encode($output);
?>