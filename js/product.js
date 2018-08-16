//$(function(){
//    $("#allHeader").load("data/header.php");
//    $("#allFooter").load("data/footer.php");
//});

//上下页的加载
function pageLoad(pno=0){
  //读取url中的关键词?kw=xxxxxxxx
  var kw=location.search.split("=")[1]||"";
  //ajax请求服务器端查询包含关键词的商品
  ajax("get","data/products/product.php?kw="+kw+"&pno="+pno,"")
	.then(output=>{
	var html="";
	var text1="";
	var text2="";
	var text3="";
    var data=output.data;
	for(var i=0;i<data.length;i++){
//		console.log(data);
		var p=data[i];
//    console.log(p);
   if(i%3==0){
		html+=`		
					<div class="good-item">

						<div class="pic">
							<a href="detail.html?lid=${p.lid}" title="${p.title}"><img src="${p.md}" alt=""> </a>
						</div>
						<div class="good-bwrap">
							<div class="overlay"></div>
							<div class="price">
								<span>￥${p.price}</span>
								<div class="like-state">
									<a href="" title="喜欢">
		 								<i class="ico-likes"></i> 
									</a>
									<div class="like-num ">
										<div class="J_scrollup">0</div>
										<div>+1</div>
										<div>1</div>
									</div>
								</div>
							</div>
		<!-- 					<div class="user-comment"></div> -->
						</div>
						<div class="user-comment">
							<!-- 评论框 -->
							<div class="share-user-d1">
								<div>
									<a href="">
										<span>${p.brand}</span>
										<span>的全部商品</span>
									</a> 
								</div>
								<div class="good-type-title">
									${p.type}
								</div>
							</div>`
						if(p.seller_describe){
							html+=`<div class="comment clearfix">
								<div class="user-list">
									<div class="like_user">
								<!-- 	<a href="" class="f1"><img class="avt32 f1" src="images/list/goods-contenter/user1.jpg" alt=""></a> -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
										<a href="" class="f1"><img class="avt32 f1" src="${p.logo}" alt=""></a>
										<div class="info commit_friend">
		<!-- 									<span class="comment_desc">评论</span> -->
											<h3>
												<a href="">Lovers</a>
											</h3>
											<a href="">
												<p>${p.seller_describe}</p>
											</a>
										</div>
									</div>
								</div>
							</div>`
							 }
						html+=`
						</div>
					</div> `;
//					console.log(html);
					text1+=html;
//					console.log(text1);
					html="";
			};
		
	   if(i%3==1){
			 html+=`
					<div class="good-item">
						<div class="pic">
							<a href="detail.html?lid=${p.lid}" title="${p.title}"><img src="${p.md}" alt=""> </a>
						</div>
						<div class="good-bwrap">
							<div class="overlay"></div>
							<div class="price">
								<span>￥${p.price}</span>
								<div class="like-state">
									<a href="" title="喜欢">
		 								<i class="ico-likes"></i>
									</a>
									<div class="like-num ">
										<div class="J_scrollup">0</div>
										<div>+1</div>
										<div>1</div>
									</div>
								</div>
							</div>
		<!-- 					<div class="user-comment"></div> -->
						</div>
						<div class="user-comment">
							<!-- 评论框 -->
							<div class="share-user-d1">
								<div>
									<a href="shop.html?lid=${p.lid}">
										<span>${p.brand}</span>
										<span>的全部商品</span>
									</a> 
								</div>
								<div class="good-type-title">
									${p.type}
								</div>
							</div>`
						if(p.seller_describe){
							html+=`<div class="comment clearfix">
								<div class="user-list">
									<div class="like_user">
								<!-- 	<a href="" class="f1"><img class="avt32 f1" src="images/list/goods-contenter/user1.jpg" alt=""></a> -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
										<a href="" class="f1"><img class="avt32 f1" src="${p.logo}" alt=""></a>
										<div class="info commit_friend">
		<!-- 									<span class="comment_desc">评论</span> -->
											<h3>
												<a href="">Lovers</a>
											</h3>
											<a href="">
												<p>${p.seller_describe}</p>
											</a>
										</div>
									</div>
								</div>
							</div>`
							 }
						html+=`
						</div>
					</div>`;
//						console.log(html);
						text2+=html;
				
			html="";
			
			};
			
			if(i%3==2){
				html+=`
					<div class="good-item">
						<div class="pic">
							<a href="detail.html?lid=${p.lid}" title="${p.title}"><img src="${p.md}" alt=""> </a>
						</div>
						<div class="good-bwrap">
							<div class="overlay"></div>
							<div class="price">
								<span>￥${p.price}</span>
								<div class="like-state">
									<a href="" title="喜欢">
										<i class="ico-likes"></i>
									</a>
									<div class="like-num ">
										<div class="J_scrollup">0</div>
										<div>+1</div>
										<div>1</div>
									</div>
								</div>
							</div>
		<!-- 					<div class="user-comment"></div> -->
						</div>
						<div class="user-comment">
							<!-- 评论框 -->
							<div class="share-user-d1">
								<div>
									<a href="">
										<span>${p.brand}</span>
										<span>的全部商品</span>
									</a> 
								</div>
								<div class="good-type-title">
										${p.type}
								</div>
							</div>`
						if(p.seller_describe){
							html+=`<div class="comment clearfix">
								<div class="user-list">
									<div class="like_user">
								<!-- 	<a href="" class="f1"><img class="avt32 f1" src="images/list/goods-contenter/user1.jpg" alt=""></a> -->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
										<a href="" class="f1"><img class="avt32 f1" src="${p.logo}" alt=""></a>
										<div class="info commit_friend">
		<!-- 									<span class="comment_desc">评论</span> -->
											<h3>
												<a href="">Lovers</a>
											</h3>
											<a href="">
												<p>${p.seller_describe}</p>
											</a>
										</div>
									</div>
								</div>
							</div>`
							 }
						html+=`
						</div>
					</div>`;
//					console.log(html);
					
					text3+=html;
//					console.log(text1);
					
			html="";
			}		
			
    }
//	console.log(text1);
//	console.log(text2);
//	console.log(text3);
	document.getElementById("box-left")
            .innerHTML=text1;
	document.getElementById("box-center")
            .innerHTML=text2;
	document.getElementById("box-right")
            .innerHTML=text3;


//	分页按钮
    var pageCount=output.pageCount,//页面总数
        pageNo=output.pageNo;//当前页面
	console.log(pageCount);
	console.log(pageNo);
    var lis="";
    for(var i=0;i<pageCount;i++){
      lis+=(i!=pageNo?`<a href="#">${i+1}</a>`:
        `<a href="#" class="current">${i+1}</a>`);
    }
    var html=
      `<a href="#" class="previous">上一页</a>${
        lis
      }<a href="#" class="next">下一页</a>`;
    var divPages=document.getElementById("pages");
    divPages.innerHTML=html;
    if(pageNo==0){
      divPages.firstElementChild.className=
        "previous disabled";
    }else if(pageNo==pageCount-1){
      divPages.lastElementChild.className=
        "next disabled";
    }else{
      divPages.firstElementChild.className=
        "previous";
      divPages.lastElementChild.className=
        "next";
    }
    divPages.onclick=e=>{
	   var tar=e.target;//先获得目标元素
	   console.log(tar.innerHTML);
       if(!isNaN(tar.innerHTML)){      //只要不是NaN就是数字
		   //筛选目标元素：内容为数字
	       //调用pageLoad,传入当前a的内容-1
		   pageLoad(tar.innerHTML-1);
	   }
	}
	 divPages.firstElementChild.onclick=
      divPages.lastElementChild.onclick=function(){
      if(this.className.indexOf("disabled")==-1){
        var curr=divPages.querySelector(".current");
        if(this==divPages.children[0])
          pageLoad(curr.innerHTML-2);
        else pageLoad(curr.innerHTML);
      }
    }
		
//十六十七品牌的商品的移入效果
	$(".share-user-d1 div:first-child>a").mouseover(function(){
		$(this).find("span").css({"display":"inline","color":"#fff"});
	});
	$(".share-user-d1 div:first-child>a").mouseout(function(){
		$(this).find("span").eq(1).css({"display":"none"});
		$(this).find("span").css({"color":"#000"});
	});

//喜欢按钮的事件
	$(".good-item .good-bwrap .like-state>a").mouseover(function(){
		var liked=$(this).children().first();
		if(!liked.hasClass("liked")){
		$(this).find(".ico-likes").css({"background":"url(images/list/goods-contenter/like_h.png)2px 6px  no-repeat"});
		$(this).siblings().css({"top":"-26px"});}
	})
		
	$(".good-item .good-bwrap .like-state").on("click","a",function(e){
		e.preventDefault();
		$(this).find(".ico-likes").css({"background":"url(images/list/goods-contenter/liked.png)2px 6px  no-repeat"});
		$(this).children().first().addClass("liked");
		$(this).siblings().css({"top":"-49px"});
	})
		
	$(".good-item .good-bwrap .like-state>a").mouseout(function(){
		var liked=$(this).children().first();
		if(!liked.hasClass("liked")){
		$(this).find(".ico-likes").css({"background":"url(images/list/goods-contenter/like.png)2px 6px  no-repeat"});
		$(this).siblings().css({"top":"-1px"});}
		
	})		

  })
}
pageLoad();
