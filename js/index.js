//首页轮播图
(()=>{
$(function(){
	 var i=0;
//	 图片自动播放
	var timer=setInterval(function(){
	i++;
   if (i==$('.banner-img li').length) {
    i=1;
    $('.banner-img').css({left:0});
   };
   $('.banner-img').stop().animate({left:-i*770},1000);
   if (i==$('.banner-img li').length-1) { 
    $('.J-navNum span').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.J-navNum span').eq(i).addClass('active').siblings().removeClass('active');
   } 
  },3000)





	// 下一个按钮
  $('.ck-right').click(function(){
   i++;
   if (i==$('.banner-img li').length) {
    i=1; //这里不是i=0
    $('.banner-img').css({left:0}); //保证无缝轮播，设置left值
   };
   $('.banner-img').stop().animate({left:-i*770},300);
   if (i==$('.banner-img li').length-1) {  //设置小圆点指示
    $('.J-navNum span').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.J-navNum span').eq(i).addClass('active').siblings().removeClass('active');
   }
    
  });
  
  // 上一个按钮
  $('.ck-left').click(function(){
   i--;
   if (i==-1) {
    i=$('.banner-img li').length-2;
    $('.banner-img').css({left:-($('.banner-img li').length-1)*770});
   }
   $('.banner-img').stop().animate({left:-i*770},300);
   $('.J-navNum span').eq(i).addClass('active').siblings().removeClass('active');
  })
  //设置按钮的显示和隐藏
 $(".banner-left").mouseover(function(){
//	  console.log(this);
   $(".ck-slide").css({"opacity":"1"});
  })
  $(".banner-left").mouseout(function(){
   $(".ck-slide").css({"opacity":"0"});
  })

  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.banner-left').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.banner-img li').length) {
    i=1;
    $('.banner-img').css({left:0});
   };
  
   $('.banner-img').stop().animate({left:-i*770},1000);
   if (i==$('.banner-img li').length-1) { 
    $('.J-navNum span').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.J-navNum span').eq(i).addClass('active').siblings().removeClass('active');
   }
  },2000)
  })


   $('.J-navNum span').click(function(){
   var _index=$(this).index();
   $('.banner-img').stop().animate({left:-_index*770},150);
   $('.J-navNum span').eq(_index).addClass('active').siblings().removeClass('active');
  })
 })
 })();

//精选商品获
(//精选商品——获取当地时间
	()=>{
		var s=new Date();
		document.querySelector(".online-share .date>span").innerHTML=s.toLocaleDateString();	

//精选商品-分类选项
	$(".online-share .share-right ul li").on("mouseover","[data-toggle=item]",function(e){
		e.preventDefault();//把#号直接去掉
		var $tar=$(this);//利用.on做冒泡处理时，this等价于e.target
		var $li=$tar.parent();
		if(!$li.is(".active")){
			$li.addClass("active").siblings().removeClass("active");
			var id=$tar.attr("href");
//			console.log(id);
			$(id).addClass("chatMiddleH").siblings().removeClass("chatMiddleH");
			var a=$(id).children();
//			console.log(a); 
			var share=$(a).attr("href");
//			console.log(share);
			$(share).addClass("active").siblings().removeClass("active");
			}
		}
	)
})();	




function getTotalTop(elem){
		var sum=0;
		do{
			sum+=elem.offsetTop;
			elem=elem.offsetParent;
		}while(elem);
		return sum;
	};
//首页页面的动态加载-设计师品牌
(()=>{
	 ajax("get","data/01-index/index.php","")
    .then(output=>{//output为大的关联数组{f1:array(6),f2:array(6),f3:array(6)}
    //根据规定的模板,动态生成f1的HTML代码片段

//加载品牌设计师页面
	var html="";//把上个楼层的内容清空再重新写HTML
    var f1=output.f1;
    for(var i=0;i<f1.length;i++){
      var p=f1[i];
	//console.log(f1[i]);
      html+=`<li>
						<a href="#"  class="dg-pic">
							<img src="${p.sm}">
						</a>
						<p class="dg-title">
							<a href="#">${p.designer}</a>
						</p>
					</li>`
    

    }
	html+=`<li  class="other">
						<a href="" class="dg-pic">
							<span>
								更多
								<br>
								设计师品牌
							</span>
						</a>
					</li>`;
	document.getElementsByClassName("designer-product-item")[0].innerHTML=html;

//加载手工艺人页面
	var html="";//把上个楼层的内容清空再重新写HTML
    var f2=output.f2;
    for(var i=0;i<f2.length;i++){
      var p=f2[i];
	//console.log(f2[i]);
      html+=`<li>
					<h3>
						<a href="#"  class="hc-pic">
							<img src="${p.shouye}">
						</a>
						<p class="hc-title">
							<a href="#">${p.designer}</a>
							<span class="concern"><em>884</em>人关注</span>
						</p>
						<div class="handcraft-icon">
							<img src="${p.logo}">
						</div>
					</h3>
				</li>`
    

    }
	html+=`<li  class="other">
						<a href="" class="hc-pic">
							<span>
								更多
								<br>
								手工艺人
							</span>
						</a>
					</li>`;
	document.getElementsByClassName("handcraft-product-item")[0].innerHTML=html;

//加载好物推荐页面
	var html="";//把上个楼层的内容清空再重新写HTML
    var f3=output.f3;
    for(var i=0;i<f3.length;i++){
      var p=f3[i];
	//console.log(f3[i]);
      html+=`<li><a href="detail.html?lid=${p.lid}"><img src="${p.md}"  alt="">
					<p>${p.designer}</p>
		  </a>
					</li>`
    

    }
	document.getElementsByClassName("good-item")[0].innerHTML=html;
   
//随机生成图片图片内容
	function shuffle(array) {
		var m = array.length,t, i;
		// 如果还剩有元素…
		while (m) {
			// 随机选取一个元素…
			i = Math.floor(Math.random() * m--);
			// 与当前元素进行交换
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	}
	function random(arr,count){
		var result = [];
		for (var i = count - 1; i >= 0; i--) {
		//从原数组中随机取一个元素出来
		var index = Math.floor(Math.random() * arr.length);
		//压入结果数组
		result.push(arr[index]);
		//将该元素从原数组中删除
		arr.splice(index, 1);
		};
		return result;
	}
	var html="";
	var f4=output.f4;
	var array=shuffle(f4)
	//console.log(f4);
	var img=random(array,7);//将随机生成的七组照片放入新数组img中
	//console.log(random(f4,7));
	//console.log(img);
	for(var i=0;i<img.length;i++){
      var p=img[i];
	//console.log(p);
	html+=`<li><a href="detail.html?lid=${p.lid}"><img src="${p.sm}" alt=""></a>
				</li>`;
	
	}
	document.getElementsByClassName("like-random-item-ul")[0].innerHTML=html;


//设计师-移入划出效果
	$(".designer-box ul li").mouseover(function(){
		$(this).find(".dg-title").css({"background":"#C5C5C5"});
		$(".designer-box ul li p>a").mouseover(function(){
			$(this).css({"text-decoration":"underline"});	
		})
	})
	$(".designer-box ul li").mouseout(function(){
		$(this).find(".dg-title").css({"background":"#f6f6f6"});
		$(".designer-box ul li p>a").mouseout(function(){
			$(this).css({"text-decoration":"none"});	
		})
	})

//楼层滚动事件
	//获得id为f1的元素距页面顶部的总距离totalTop
	 var f1TotalTop=getTotalTop(document.getElementsByClassName("designer-box")[0])
	 //查找id为lift的div保存在变量lift中
    var lift=document.getElementsByClassName("lift")[0];
	window.addEventListener("scroll",function(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		lift.style.display=f1TotalTop<=scrollTop+innerHeight/2?"block":"none";
		//灯塔点亮事件
		if(lift.style.display=="block"){
			var fs=document.querySelectorAll(".floor")
			for(var i=0 ;i<fs.length;i++){
				var HEIGHT=getTotalTop(fs[i+1])-getTotalTop(fs[i]);
				var totalTop=getTotalTop(fs[i]);
				var start=totalTop-innerHeight/2+140;
				var end=start+HEIGHT;
				if(scrollTop>start&&scrollTop<=end){
					break;
				}
			}
				var currli=document.querySelector(".lift-item-on");
				if(currli){
					currli.className="lift-item";
					lift.querySelector(`li:nth-child(${i+1})`).className="lift-item-on";	
				}
			}
	});
	 var as=lift.querySelectorAll(
      ".lift-list .lift-item");
	//获取class为lift的下的所有li保存在as中	
	var as=document.querySelectorAll(".lift .lift-list>li");
		for(let i=0;i<as.length;i++){
			as[i].onclick=function(){
				var fi=document.getElementById("f"+(i+1));
				var totalTop=getTotalTop(fi);
	//		window.scrollTo(0,totalTop-60);
			$("html,body").stop(true).animate({
          //非css标准属性，jquery中独有
				 scrollTop:totalTop-60
				 },500);
			}
		}

//手工艺人-移入划出效果
	$(".handcraft-box ul li").mouseover(function(){
		console.log(this);
		$(this).find(".hc-title").css({"background":"#C5C5C5"});
		$(this).find(".handcraft-icon>img").css({"display":"block"});
		$(".handcraft-box ul li .hc-title>a").mouseover(function(){
			$(this).css({"text-decoration":"underline"});	
		})
	})
	$(".handcraft-box ul li").mouseout(function(){
		$(this).find(".hc-title").css({"background":"#F6F6F6"});
		$(this).find(".handcraft-icon>img").css({"display":"none"});
		$(".handcraft-box ul li .hc-title>a").mouseout(function(){
			$(this).css({"text-decoration":"none"});	
		})
	})


//==============================
	
//	获取按钮
	var pre=document.querySelector(".good-recommand-item .btn .pre");
	var next=document.querySelector(".good-recommand-item .btn .next");
	var goodItem=document.querySelector(".good-recommand-item .good-item");
    var moved=0,LIWIDTH=249;
	pre.onclick=function(){
		checkLi();
		if(this.className.indexOf("disabled")==-1){
		moved--;
		move();
		}
	}
	next.onclick=function(){
		checkLi();
		if(this.className.indexOf("disabled")==-1){
		moved++;
		move();
		}
	}
	function move(){
		goodItem.style.left=-moved*LIWIDTH*1+"px";
		
	}
	function checkLi(){
		if(f3.length-2*moved<=8){
			next.className="next disabled";
			document.querySelector(".good-recommand-item .disabled").style.background="url(images/index/home_widget.png)-94px -159px no-repeat";
		}
		else if(moved==0){
			pre.className="pre disabled";
		}
		else{
			pre.className="pre";
			next.className="next";
		}

	}

//	大家喜欢people-like
	(()=>{
		var i=0;
			var reSrc1,reSrc2;
			function task(){
				i+=1;
				if(i>$(".child3>li").length-3){
					clearInterval(timer);
					timer=null;
				}else{
					$(".child3").css({left:-i*245});
					$(".gun .pre-direction").addClass("pre-direction-none");
					$(".gun .pre-radius").removeClass("peopleNoImg");
					$(".gun .next-radius").removeClass("peopleNoImg");
					$(".gun .next-direction").css({"display":" inline-block"});//pre键的显示
					imgChange();

				}
				if(i>=$(".child3>li").length-3){
					$(".gun .next-direction").css({"display":"none"});
					$(".gun .next-radius").addClass("peopleNoImg");
					console.log(i+"此时定时器消失");
				}
				console.log("定时器执行的次数");
				imgChange();
			}
		var timer=setInterval(task,3000);
		reSrc2=$(".child3>li").eq(i+3).find(".avart-pic>img").attr("src");
		$(".gun>.p2 .img").attr("src",reSrc2);
//			鼠标滑进轮播停止
			$(".child3").hover(function(){
				clearInterval(timer);
				timer=null;
			},function(){
				if(!timer){
					timer=setInterval(task,3000);
				}
			});

//上下方向键的实现
			$(".next-direction").click(function(e){
				e.preventDefault();
				console.log(i+"开始执行next-directioni的次数");	
				if(i!=0&&i<($(".child3>li").length-4)){
					preDirectionImg()
					i+=4;
					imgChange();
				console.log(i+"i!=0执行后的次数");	
				}else if(i==0){
					preDirectionImg()
					$(".gun .pre-direction").addClass("pre-direction-none");
					$(".gun .pre-radius").removeClass("peopleNoImg");
					i+=4;
					imgChange();
//					console.log(i+"i==0执行后的次数");
				}else if(i>=$(".child3>li").length-4){
					console.log(4);
					i+=1;
					$(".child3").css({left:-(i*245)});
					$(".gun .next-direction").css({"display":"none"});
					$(".gun .next-radius").addClass("peopleNoImg");
					$(".gun .pre-radius").removeClass("peopleNoImg");
					clearInterval(timer);
					timer=null;
					imgChange();
				}
				
			})

//pre-direction的实现
			$(".pre-direction").click(function(){
				$(".gun .next-radius").removeClass("peopleNoImg");
				if(i<=4){
					console.log("");
					$(".child3").css({left:0});
					$(".gun .pre-direction").removeClass("pre-direction-none");
					$(".gun .pre-radius").addClass("peopleNoImg");
					i=0;
					imgChange();
//					console.log(i+"此时大小在-980~0之间");
				}
				else if(i>$(".child3>li").length-2){
					i=$(".child3>li").length-2;
//					console.log(i+"此时i为i>$()-2");
					nextDirectionImg()
					i-=4;
//					console.log(i+"此时大小在i>$(.child3>li).length-2之间");
					imgChange();
					
				}else{
					console.log("此时执行i>4");
					nextDirectionImg()
					i-=4;
//					console.log(i+"此时4<i时的数");
					imgChange();
				}
			})
//小圆点的图片的设置
				function imgChange(){
					if(i<=$(".child3>li").length-3){
						reSrc1=$(".child3>li").eq(i-1).find(".avart-pic>img").attr("src");
						reSrc2=$(".child3>li").eq(i+3).find(".avart-pic>img").attr("src");
							if(i>=$(".child3>li").length-3){
								$(".gun>.p2 .img").attr({"src":""});
								$(".gun>.p2 .img").css({"display":"none"});
								$(".gun .next-radius").addClass("peopleNoImg");
								clearInterval(timer);
								timer=null;
							}else{
								$(".gun>.p2 .img").attr("src",reSrc2)
									$(".gun>.p2 .img").css({"display":"inline-block"});
							}
							if(i==0){
								$(".gun>.p1 .img").attr({"src":""});
								$(".gun>.p1 .img").css({"display":"none"});
								$(".gun .pre-radius").addClass("peopleNoImg");
							}else{
								$(".gun>.p1 .img").attr("src",reSrc1);
								$(".gun>.p1 .img").css({"display":"inline-block"});
							}
					}
				}
				function nextDirectionImg(){
					$(".gun .next-direction").css({"display":"inline-block"});
					$(".child3").css({left:(-i*245)+980});
				}
				function preDirectionImg(){
					$(".child3").css({left:-(i*245+980)});
					$(".gun .next-radius").removeClass("peopleNoImg");
				}

	
	})()
 })
})()
