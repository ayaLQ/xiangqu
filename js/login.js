$("[name='usubmit']").click(function(e){
  e.preventDefault();
  var u=$("[name='uname']").val();
  var p=$("[name='upwd']").val();
  var code=$("[name='code']").val();
 $.ajax({
     type:"get",
     url:"data/login.php",
     data:{uname:u,upwd:p,code:code},
     success:function(data){
        var data=JSON.parse(data);
        var code=data.code;
        var msg=data.msg;
         var tishi=$(".tishi")
       function text(elem,n){
           if(code==n&&code!=1){
               elem.html(msg);
               elem.css({"display":"inline-block"});
           }else{
               elem.css({"display":"none"});
           }
       }
       text(tishi,code);
       if(code==1){
         alert(msg);
         sessionStorage.setItem("用户",msg.split(":")[1]);
         location="http://localhost/xiangqu/index.html";
       }
     },
     error:function(){
      alert("网络错误");
     }
 })
});
