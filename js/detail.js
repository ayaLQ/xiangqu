(()=>{
	var lid=location.search.split("=")[1];
	if(lid!==undefined)
	$.ajax({
		type:"get",
		url:"data/details/details.php?lid="+lid,
		data:{lid:lid},//php文件接收的参数
		success:function(pager){
			var html="";
			var product=pager.product;
			//console.log(product);
			var shopinfo=pager.shopinfo[0];
			//console.log(shopinfo);
			html+=`<div class="dt_author">
				<a href=""><img src="${shopinfo.logo}" alt=""></a>
				
			</div>
			<div class="dt_author_info">
				<h2><a href="">${shopinfo.shopname}</a></h2>
				<p><a class="J_bandstory dt-bandstory"  href="">${shopinfo.descirpt}</a></p>
			</div>`;
			document.getElementsByClassName("dt_header")[0].innerHTML=html;
			html="";
			html+=`<div class="detail-pic-box">
				<div class="detail-mainpic"><img src="${product.pic}" alt=""></div>
				<div class="like-common">
					<a class="like" href="javascript:;">
						<span></span>
					</a>
					<div class="like-num">
						<div id="J_scroll">0</div>
						<div id="J_scroll">1</div>
						
					</div>
				</div>
			</div>
			<!--购物车等 文字信息			 -->
			<div class="detail-info">
				<!--标题  -->
				<h2 class="product-name">${product.title}</h2>
				<!--商品分类  -->
				<ul class="detail-brand">
					<li class="brand-name">设计师<span>${product.designer}</span></li>
					<li class="brand-time">品牌<span>${product.brand}</span></li>
				</ul>
				<!--规格 div class="spec"-->
				<div class="spec">
				<p class="size" style="display:${product.size==''?'none':'block'}">尺码</p>`	
				var size=product.size.split("&");  
				if(product.size!=""){
					for(var i=0;i<size.length;i++){
						html+=`<a href="#" class="active">${size[i]}</a>`
					}
				}

				html+=`<p class="color" style="display:${product.color==''?'none':'block'}">颜色</p>`
						var color=product.color.split("&");  
				if(product.color!=""){
					for(var i=0;i<color.length;i++){
						html+=`<a href="#" class="active">${color[i]}</a>`
					}
				}

				html+=`<p class="stripe" style="display:${product.stripe==''?'none':'block'}">花纹</p>`
						var stripe=product.stripe.split("&"); 
				if(product.stripe!=""){
					for(var i=0;i<stripe.length;i++){
						html+=`<a href="#" class="active">${stripe[i]}</a>`
					}
				}
				html+=`</div>
				<!--数量-->
				<div class="count">
					<p>数量</p>
					<div>
						<button class="reduce">-</button>
						<input type="text" value="1">
						<button class="add">+</button>
					</div>
					<span>库存</span>
					<span>${product.productCount}</span>
					<span>件</span>
				</div>
				<!--邮费-->
				<p class="price">${product.price}</p>
				<p class="postage">
					<span>邮费：</span>
					<span>5</span>
					<span>元</span>
					<a href="">
						<span>联系卖家</span>
						<img src="images/detail/kefuf.gif" alt="">
					</a>
				</p>
				<!--购物车-->
				<div class="shops">
					<a href="">立即购买</a>
					<a href="javascript:;" >
						<img src="" alt="">
						<span data-lid="${product.lid}" class="addCart" >加入购物车</span>
					</a>
<!-- 					<a href=""> -->
<!-- 						<img src="" alt=""> -->
<!-- 						<span>收藏</span> -->
<!-- 					</a> -->
				</div>
				<!--商家承若-->
				<div class="promise">
					<img src="images/detail/web_7.png" alt="">
					<span>七天无理由退货</span>
					<img src="images/detail/web_48h.png" alt="">
					<span>48小时发货</span>
					<img src="images/detail/web_xiangqu.png" alt="">
					<span>担保交易</span>
				</div>
				<!--微信-->
				<div class="weixin">
					<img src="images/detail/xzsn2626.jpg" alt="">
					<span>
						加想去君微信：xzsn2626，成为本君好友，超多朋友福利，带你认识更多设计师哦～
					</span>
				</div>`;
				document.getElementsByClassName("detail-cont")[0].innerHTML=html;
				//购物车商品加减
				var count=document.getElementsByClassName("count")[0];
				count.onclick=e=>{
					e.preventDefault();
					var tar=e.target;
					if(tar.className=="add"||tar.className=="reduce"){//获得想要的目标元素
						var input=tar.parentNode.children[1];
						var n=parseInt(input.value);
						if(tar.className=="add"){
							n++;
							}
						else if(n>1){
							n--;
							}
						input.value=n;
					}
				}
				//加入喜欢的商品
				$(".like-common>.like>span").click(function(){
					$(this).css({"background-position":"-9px -3px"});
					var like_num=$(this).parent().next();
					like_num.css({"top":"-18px"});
				})
				
				
		},
		error:function(){
			alert("网络故障,请检查");
		}
	})

})();

(()=>{
		var child1=document.querySelector(".child1");
		var child2=document.querySelector(".child2");
		var picBox=document.querySelector(".picBox");
		var content=document.querySelector(".good-recommand-item");
		child2.innerHTML=child1.innerHTML;
		console.log(child1.offsetWidth);
		console.log(content.scrollLeft);
		function task(){
		if(content.scrollLeft>=child1.offsetWidth)
			content.scrollLeft=0;
		else
			content.scrollLeft++;
	}
	var newScroll=setInterval(task,50);
	$(".good-recommand-item ul").hover(
		function(){
			clearInterval(newScroll);
			newScroll=null;
		},function(){
			newScroll=setInterval(task,50);
		});
	
})(); 
(()=>{
	console.log(1);
	$(".spec>a").addEventListener("click",function(e){
		console.log(2);
			e.preventDefault();
			var $this=e.target;
			console.log(this);
		$this.next().css({"border":"1px solid #000"});
		
	})



//	$(".spec ").on("click","a",function(e){
//			$(".spec").addEvaent
//			e.preventDefault();
//			var $this=e.target;
//			console.log(this);
//		$this.next().css({"border":"1px solid #000"});
//	})
})();

