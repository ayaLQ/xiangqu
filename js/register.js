$("[name='usubmit']").click(function(e){
    e.preventDefault();
    var u=$("[name='uname']").val();
    var p=$("[name='pwd']").val();
    var rep=$("[name='pwd']").val();
    var ph=$("[name='phone']").val();
    var email=$("[name='email']").val();
    var user_name=$("[name='user_name']").val();
    $.ajax({
        type:"get",
        url:"data/register.php",
        data:{uname:u,pwd:p,repwd:rep,phone:ph,email:email,user_name:user_name},
        success:function(data){
            var data=JSON.parse(data);
			var code=data.code;
			var msg=data.msg;
			var tishi=$(".tishi");
            console.log(data);
			console.log(data.code);
			console.log(data.msg);
			if(code==1){
				alert(msg);
				location="http://localhost/xiangqu/login.html";
			}
        },
        error:function(){
            alter("网络错误");
        }
    })
});
	


function text2(elem,msg){
    $("[name='"+elem+"']").focus(function(){
        $(this).next().html(msg);
        $(this).next().css({"background":"#999","color":"#fff","display":"inline-block"});
    });
}
text2("uname","用户名长度在3-12位之间");
text2("pwd","密码长度在6-12之间");
text2("repwd","确认密码长度在6-12之间");
text2("phone","输入符合要求的手机号");
text2("email","请输入合法的邮箱地址");
text2("user_name","姓名不能为空");
function text(Elem,Reg,msg,trMsg){
    $("[name='"+Elem+"']").blur(function(){
        var tar=$(this);
        var value=$(this).val();
        var next=tar.next();
        var reg=Reg;
		console.log(value+'kaishi');
        if(!value){
            next.css({"background":"red","color":"#fff","display":"inline-block"});
            next.html(msg);
        }
         if(reg.test(value)){
            next.css({"background":"#00DD00","color":"#fff","display":"inline-block"});
            next.html(trMsg)
        }else{
			next.css({"background":"red","color":"#fff","display":"inline-block"});
            next.html("格式错误")
		}
    })
}
text("uname",/^[a-zA-Z0-9]{3,12}$/i,"用户名不能为空","用户名正确");
text("pwd",/^[a-zA-Z0-9]{3,12}$/i,"密码不能为空","密码格式正确");
text("phone",/^1[34578]\d{9}$/i,"手机号不能为空","该电话可以使用");
text("email",/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/i,"邮箱不能为空","该邮箱可以使用");
text("user_name",/^([a-zA-Z0-9\u4e00-\u9fa5\.]{1,10})$/i,"姓名不能为空","该姓名可以使用");
$("[name='repwd']").blur(function(){
    var tar=$(this);
    var value=$(this).val();
	console.log(value+"repwd");
	console.log($("[name='pwd']").val()+"原密码");
    var next=tar.next();
    if(value==""||value==null){
        next.css({"background":"red","color":"#fff","display":"inline-block"});
        next.html("确认密码不能为空");
    }else if(value!=$("[name='pwd']").val()){
        next.css({"background":"red","color":"#fff","display":"inline-block"});
        next.html("两次密码不一致");
    }else if(value==$("[name='pwd']").val()){
        next.css({"background":"#00DD00","color":"#fff","display":"inline-block"});
        next.html("两次输入的密码一致")
    }
})
$("[name='uname']").blur(function(){
    var u=$.trim($("[name='uname']").val());
	var tishi=$(this).next();
    $.ajax({
        type:"get",
        url:"data/register.php",
        data:{uname:u},
        success:function(data){
            var data=JSON.parse(data);
			var code=data.code;
			var msg=data.msg;
            console.log(data);
			console.log(code);
			console.log(msg);
			if(code==-11){
				tishi.html(msg);
				tishi.css({"background":"red","color":"#fff","display":"inline-block"});
			}
        },
        error:function(){
            alert("网络错误");
        }
    })
})
$("[name='phone']").blur(function(){
	var u=$("[name='uname']").val();
    var pwd=$("[name='pwd']").val();
    var rep=$("[name='repwd']").val();
    var ph=$("[name='phone']").val();
    var email=$("[name='email']").val();
    var user_name=$("[name='user_name']").val();
	var tishi=$(this).next();
    $.ajax({
        type:"get",
        url:"data/register.php",
		data:{uname:u,pwd:pwd,repwd:rep,email:email,user_name:user_name,phone:ph},
        success:function(data){
            var data=JSON.parse(data);
			var code=data.code;
			var msg=data.msg;
            console.log(data);
			console.log(code);
			console.log(msg);
			if(code==-12){
				console.log(111);
				tishi.html(msg);
				tishi.css({"background":"red","color":"#fff","display":"inline-block"});
			}
        },
        error:function(){
            alter("网络错误");
        }
    })
})






