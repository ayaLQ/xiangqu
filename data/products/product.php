<?php
header("Content-Type:application/json");
require_once("../init.php");
$output=[
  "count"=>0,
  "pageSize"=>6,
  "pageCount"=>0,
  "pageNo"=>0,
  "data"=>[]
];
@$kw=$_REQUEST["kw"];
@$pno=$_REQUEST["pno"];
if(!$pno) $pno=0;
$sql="SELECT lid, type,title,brand,logo, price,seller_describe, (select md from xq_shop_pic where xq_shop_products.lid=xq_shop_pic.pid limit 1) as md FROM xq_shop_products";
if($kw){
  $kws=explode(" ",$kw);//js:split
  for($i=0;$i<count($kws);$i++){
    $kws[$i]=" title like '%".$kws[$i]."%'";
  }
  $where=" where ".implode(" and ",$kws);//js:join
  $sql=$sql.$where;
}
$output["count"]=count(sql_execute($sql));
$sql=$sql." limit ".($pno*$output["pageSize"])." ,".$output["pageSize"];//limit 0,6
$result=sql_execute($sql);
$output["pageCount"]=
  ceil($output["count"]/$output["pageSize"]);
$output["pageNo"]=$pno;
$output["data"]=$result;
echo json_encode($output);