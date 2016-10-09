	/*---------------注册页面选项卡切换-----------------------------------*/
	$(".regnav1").click(function(){
		$(this).addClass("on");
		$(".icon-mob ").addClass("icon-on1");
		$(".icon-tel ").removeClass("icon-on2");
		$(".regnav2").removeClass("on");
		$(".phonereg").show();
		$(".telereg").hide();
	})
	$(".regnav2").click(function(){
		$(this).addClass("on");
		$(".icon-mob ").removeClass("icon-on1");
		$(".icon-tel ").addClass("icon-on2");
		$(".regnav1").removeClass("on");
		$(".phonereg").hide();
		$(".telereg").show();
	})
	/*-------------边框颜色变化---------------*/
	console.log($("input").length);
	$("input").each(function  () {
		$(this).focus(function  () {
			$(this).css("border-color","red");
			$(this).parent().find(".z-tips").show();
		});
		$(this).blur(function  () {
			$(this).css("border-color","#a2a2a2")
		})
	})
	/*--------------验证---------------*/
	function regTest(className,className2,reg,val1,val2){
		$(className).blur(function(){
			if(!$(this).val()){
				$(this).parent().find(".reg").removeClass("z-tips").addClass("e-tips").html(val1);
				
			}else if(!reg.test($(this).val())){
				$(this).parent().find(className2).show();
				$(this).parent().find(".dui").hide();
				$(this).parent().find(".reg").removeClass("z-tips").addClass("e-tips").html(val2);
				
			}else{
				$(this).parent().find(".reg").hide().removeClass("e-tips").addClass("z-tips");
				$(this).parent().find(className2).hide();
				$(this).parent().find(".dui").show();
			
			}
		});
	}
	var phoneReg=/^1[3|4|5|7|8]\d{9}$/;
	var passReg=/^[a-z0-9_-]{6,20}$/;
	var reg1=regTest(".tell-reg",".icon-1",phoneReg,"请输入手机号码","请输入正确的手机号码");
	var reg2=regTest(".pwd-reg",".icon-2",passReg,"请输入密码","密码长度是6-20位字符，请重新输入");
	
	var reg3=$(".authen").blur(function(){
		if(!$(this).val()){
			$(this).parent().find(".reg").removeClass("z-tips").addClass("e-tips").html("请确认密码");
				
			}else if($(this).val()!=$(".pwd-reg").val()){
				$(this).parent().find(".icon-2").show();
				$(this).parent().find(".dui").hide();
				$(this).parent().find(".reg").removeClass("z-tips").addClass("e-tips").html("两次输入的密码不一样");
				
			}else{
				$(this).parent().find(".reg").hide().removeClass("e-tips").addClass("z-tips");
				$(this).parent().find(".icon-2").hide();
				$(this).parent().find(".dui").show();
			}
	})
	$(".reg-submit").click(function(){
		if(($(".icon-1").css('display')!="none")||($(".icon-2").css('display')!="none")){
			console.log("ontesting...");
		}else{
			setTimeout(function(){
				window.open("login.html","_self");
			},1000)
			
		}
	})
