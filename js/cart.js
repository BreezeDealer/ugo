/*--------购物车页面的底栏控制------------------------*/	
	$(window).scroll(function(){
		var x=$(".shopping-cart").offset().top+$(".shopping-cart").height();
		var y=$(this).height()+$(this).scrollTop();
		if(x>y){
			$(".c-balance-bt").addClass("fixed-bt")
		}else{
			$(".c-balance-bt").removeClass("fixed-bt")
		}
	})

	console.log($(".i-del").parent().parent().parent());
	$(".i-del").each(function(){
		$(this).click(function(){
			$(this).parent().parent().parent().remove()
		})
	})
