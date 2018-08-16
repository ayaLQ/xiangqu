<?php
header("Content-Type:application/json");
require_once("../init.php");
$output=[//包含三层楼所有首页商品的二维关联数组
  //"f1"=>[],
  //"f2"=>[],
  //"f3"=>[]
];
//查询一楼首推商品的sql语句
$sql="SELECT p.designer,p.title,p.lid,p.fid,p.shopid,p.logo,pic.sm FROM xq_shop_products p,xq_shop_pic pic where p.lid=pic.pid and designer_box>0 order by designer_box limit 9";
//查询出一楼的6个首推商品，保存在结果数组的f1子数组中
//var_dump($sql);
$output["f1"]=sql_execute($sql);

//f2
$sql="SELECT p.designer,p.title,p.lid,p.fid,p.shopid,p.logo,pic.shouye FROM xq_shop_products p,xq_shop_pic pic where p.lid=pic.pid and handcraft_box>0 order by handcraft_box limit 7";
$output["f2"]=sql_execute($sql);
//f3
$sql="SELECT p.designer,p.title,p.lid,p.fid,p.shopid,p.logo,pic.md FROM xq_shop_products p,xq_shop_pic pic where p.lid=pic.pid and good_recommand>0 order by good_recommand limit 12";
$output["f3"]=sql_execute($sql);
//f4
$sql="SELECT p.designer,p.title,p.lid,p.fid,p.shopid,p.logo,pic.sm FROM xq_shop_products p,xq_shop_pic pic where p.lid=pic.pid";
$output["f4"]=sql_execute($sql);

//echo json_encode($output);
echo json_encode($output);