<?php
session_start();
getcode(4,80,20);
function getcode($num,$w,$h){
	$data='abcdefghjkmnpqrstuvwxyABCDEFGHJKMNPQRSTUVWXY34567890';
	$code="";
	for($i=0;$i<$num;$i++){
    			$code.=substr($data,rand(0,strlen($data)-1),1);
    		}
	$_SESSION["code"]=$code;
		header("Content-type:image/PNG");
	$img=imagecreate($w,$h);//创建图片画布
	$black=imagecolorallocate($img,0,0,0);
    		$gray=imagecolorallocate($img,200,200,200);
    		$bgcolor=imagecolorallocate($img,255,255,255);
    imagefill($img,0,0,$gray);
    		imagerectangle($img,0,0,$w-1,$h-1,$black);
    		for($i=0;$i<80;$i++){
    			imagesetpixel($img,rand(0,$w-1),rand(0,$h-1),$bgcolor);
    		}
  $strx=rand(5,10);
    for($i=0;$i<$num;$i++){
        $strpos=rand(2,6);
        imagestring($img,5,$strx,$strpos,substr($code,$i,1),$black);
        $strx+=rand(10,14);
    }
		//2.方法二：绘制几条虚线
  $style = array($black,$gray);
  imagesetstyle($img, $style);
  //imagesetstyle($image,$style),设定画线的风格，像素组成的数组
  $y1 = rand(0,$h);
  $y2 = rand(0,$h);
  $y3 = rand(0,$h);
  $y4 = rand(0,$h);
  imageline($img,0,$y1,$w,$y2,IMG_COLOR_STYLED);
  imageline($img,0,$y3,$w,$y4,IMG_COLOR_STYLED);
    imagepng($img);
		imagedestroge($img);
}
?>