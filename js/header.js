(()=>{
  ajax("get","header.html","","text")
    .then(html=>{
    document.getElementById("allHeader")
            .innerHTML=html;

	/*为查询按钮绑定单击事件跳转*/
    //查找id为top-input的div
    var topInput=document.getElementById("top-input");
	var img=topInput.getElementsByClassName("search-img")[0];
//		console.log(img);
      $("#top-input").on("click","a",function(e){
		e.preventDefault();
//		console.log(1);
      //获取旁边id为txtSearch的input的内容
		var kw=document.getElementById("search").value;
		if(kw.trim().length!=""){
			var url="product.html?kw="+kw;
			location=url;
		}
      });

//	console.log(2);

	//为当前窗口添加滚动事件监听
    window.addEventListener("scroll",()=>{
      //(防止和页面内容中的其它滚动事件冲突)
      //获得滚动高度:
      var scrollTop=
        document.body.scrollTop//页面滚动的距离
        ||
        document.documentElement.scrollTop;
      //如果滚动高度>=300
      if(scrollTop>300)
        //设置id为allHeader下的class为J-mainNaxBox的div的class为main和fixed_nav
       $("#allHeader>.J-mainNaxBox").css({"position":"fixed","top":"0","left":"0","bottom":"0","right":"0","z-index":"64"});
      else//否则
        //设置id为header下的class为main的div的class为main
         $("#allHeader>.J-mainNaxBox").removeAttr("style");
    })
})
})();
 