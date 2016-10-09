$(function(){
		/*---------------商品详情页的一堆图片---------------------*/	
	var imgStr="";
	for(i=1;i<51;i++){
		imgStr+="<img src='images/detailsImg/"+i+".jpg' />";
	}
	$(".details-img p").first().html(imgStr);
	$(".tab-select > a").each(function(){
		$(this).click(function(){
			$(this).addClass("tabactive").siblings().removeClass("tabactive");
			$("body").scrollTop($(".tab ~ div").eq($(this).index()).offset().top);
		})
	})
	$(window).scroll(function(){
		$(".tab ~ div").each(function(){
			if($(this).offset().top+$(this).height()<$(window).scrollTop()){
				$(".tab-select > a").eq($(this).index()).addClass("tabactive").siblings().removeClass("tabactive");
			}
		})
	})
	console.log($(".tab ~ div").length);
	console.log($(".tab-select > a").length);
	
	
	/*-------商品详情栏的伸缩---------*/
	goodBar();
	 $(window).scroll(function(){
	 	goodBar()
	 });
	function goodBar(){
		var x=$(".related").offset().top-$(window).scrollTop();
      	if(x<=0){
      		$(".tab").addClass("fixed-bar");
      		$(".ext").show();
      	}else{
      		$(".ext").hide();
      		$(".tab").removeClass("fixed-bar");
      		
      	}
	}
	/*--------商品详情页放大镜---------------------*/
	var scrollCount=0;
	$(".scroll-prev").click(function(){
		if(scrollCount)
		scrollCount++;
		$(".items-1 ul").animate({left:70*scrollCount})
	})
	$(".scroll-next").click(function(){
		scrollCount--;
		$(".items-1 ul").animate({left:70*scrollCount});
	})
	$(".items-1 ul li").each(function(){
		$(this).click(function(){
			$(this).addClass("active").siblings().removeClass("active")
			var src=$(this).find("img").attr("src");
			$(".preview-span img").attr({src:src});
			$(".zoomdiv img").attr({src:src});
		})
	})
	$(".preview-span").mouseover(function(){			
			$(".move-brick").show();
			$(".zoomdiv").show();
		})
		$(".preview-span").mouseout(function(){			
			$(".move-brick").hide();
			$(".zoomdiv").hide();
		})
	$(".preview-span").mousemove(function(event){
		l=event.pageX-$(this).offset().left-$(".move-brick").width()/2;
		t=event.pageY-$(this).offset().top-$(".move-brick").height()/2;
		maxL=$(this).width()-$(".move-brick").width();
		maxT=$(this).height()-$(".move-brick").height();
		l=l<0 ? 0:l;
		l=l>maxL ? maxL:l;
		t=t<0 ? 0:t;
		t=t>maxT ? maxT:t;		
		$(".move-brick").css({left:l,top:t});
		$(".zoomdiv img").css({left:-(0.6*l),top:-(0.6*t)})
	})
	/*-------------加入购物车--------------------*/
	/*---加减----*/
	var cartNum=1;
	$(".count-add").click(function(){
		cartNum++;
		$(".count-less").css({cursor:"pointer"})
		$(".count-box > i").html(cartNum);
		$(".ext-cart-infor span:first").html("数量："+cartNum)
		$(".ext-cart-price").html("<i>￥</i>"+cartNum*$(".real-price").html().slice(8))
	});
	$(".count-less").click(function(){
		cartNum--;
		if(cartNum<1){
			$(this).css({cursor:"not-allowed"});
			$(".notice-span").fadeIn().fadeOut();
			cartNum++;
		}else{
			$(".count-box > i").html(cartNum);
			$(".ext-cart-infor span:first").html("数量："+cartNum);
			$(".ext-cart-price").html("<i>￥</i>"+cartNum*$(".real-price").html().slice(8))
		}	
	})
	/*---动画---*/
	$(".add-to-chart").each(function(){
		$(this).click(function(){
			var disY=$(".cart-num").offset().top;
			var disX=$(".cart-num").offset().left;
			var $src=$('.preview-span img').attr('src')
			var div=$("<div class='fly_to_chart'></div>");
			div.css({
				backgroundImage:"url("+$src+")",
				backgroundSize:"contain",
				left:$(this).offset().left+$(this).outerWidth()+div.width(),
				top:$(this).offset().top
			});
			$("body").append(div);
			div.animate({
				width:15,
				height:15,
				left:disX+2,
				top:disY-4
			},800,function(){
				div.animate({
					top:disY+8,
					opacity:0,
				},1000,function(){
					div.remove();
					$(".cart-num").html(parseInt($(".cart-num").html())+parseInt($(".count-box > i").html()));
					$(".search-right-shop > span").html($(".cart-num").html())
				})
			})
		})
		
	})
	
	
	
	
	
})