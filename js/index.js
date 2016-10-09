$(function(){
	/*----搜索栏-----*/
	console.log($(".search-box").length);
	$(".search-btn").click(function(){
		if($(".search-box").val()){
			window.open("list.html")
		}
	});
	/*----------------------首页轮播图----------------------------------*/
	var bannertimer=null;
	var bannerNum=1;
	bannertimer=setInterval(bannerMove,4000)
	function bannerMove(){
		$(".banner-move").animate({left:-1920*bannerNum},800,function(){
				$(".count-span").find("span").removeClass("active").eq(bannerNum%3).addClass("active")
				bannerNum++;
				if(bannerNum>=4){
				$(".banner-move").css({left:0});
				bannerNum=1;
			}
		})
	}
	$(".banner-move").mouseover(function(){
		clearInterval(bannertimer)
	})
	$(".banner-move").mouseout(function(){
		bannertimer=setInterval(bannerMove,4000);
	})
	$(".count-span").find("span").each(function(){
		$(this).mouseover(function(){
			clearInterval(bannertimer);
			bannerNum=$(this).index();
			$(".banner-move").css({left:-1920*bannerNum})
			$(".count-span").find("span").removeClass("active");
			$(this).addClass("active");
		});
		$(this).mouseout(function(){
			bannertimer=setInterval(bannerMove,4000);
		})
	})
	/*------------------每日精选轮播图-------------------------*/
	var choice_img_timer=null;
	var choice_img_num=0;
	choice_img_timer=setInterval(startMove,2000);
	$(".index-line-left").mouseover(function(){
		clearInterval(choice_img_timer);
		$(".slide-line span").each(function(){
			$(this).mouseover(function(){
				$(".choice-img > ul").animate({opacity:1},1000)
				$(".choice-img > ul").css({left:-698*$(this).index()});
				$(".slide-line").find("span").removeClass("show").eq($(this).index()).addClass("show");
				choice_img_num=$(this).index()+1;
			})
		})
	})
	$(".prev").click(function(){
			choice_img_num--;
			if(choice_img_num<0){
				choice_img_num=7;
			}
			move();
		})
		$(".next").click(function(){
			choice_img_num++;
			if(choice_img_num>7){
				choice_img_num=0;
			}
			move();
		})
	$(".index-line-left").mouseout(function(){
		choice_img_timer=setInterval(startMove,4000);
	})
	function move(){
			$(".choice-img > ul").css({opacity:0})
			$(".slide-line").find("span").removeClass("show").eq(choice_img_num).addClass("show")
			$(".choice-img > ul").css({left:-698*(choice_img_num)});
			$(".choice-img > ul").animate({opacity:1},1000)
		}
	function startMove(){
		move();
		choice_img_num++;
		if(choice_img_num>7){
			choice_img_num=0;
		}
		if(choice_img_num<0){
			choice_img_num=7;
		}
	}
	/*------------------24小时直播预告栏的控制-----------------*/
	function twenty_four(){
		var i=0;
		var liNum=$(".show-list-ul").find("li").length;
		$(".show-next").click(function(){
			i--;
			if(i>-liNum){$(".show-list-ul > ul").animate({left:270*i})}
			else{i++;}
		})
		$(".show-prev").click(function(){
			i++;
			if(i<=0){$(".show-list-ul > ul").animate({left:270*i})}
			else{i--;}
		})
	}twenty_four();
	/*---------------主页侧边栏控制------------------------------*/
	$(".sidebar li").each(function(){
		$(this).mouseover(function(){
			$(this).children(".side-ba").css({backgroundPositionX:-46});
			$(this).children("div").show();
		})
		$(this).mouseleave(function(){
			$(this).children(".side-ba").css({backgroundPositionX:0});
			$(this).children("div").hide();
		})
	})
	/*------点击关闭-----*/
	$(".closex").click(function(){
		$(".fly-user-box").css("display","none")
	})
	$(".fly-back").click(function(){
		
	})
	/*--返回顶部函数---*/
	function pageScroll() {  
		window.scrollBy(0,-10);  
		scrolldelay = setTimeout('pageScroll()',100);  
  		if(document.documentElement.scrollTop==0) clearTimeout(scrolldelay); 
	}
	/*---------------主页三行商品加载------------------------------*/
	$.ajax({
		async:true,
		cache:false,
		url:'data/data.txt',
		type:'GET',
		success:function(str){
			var str1="";
			var arr=eval(str);
			for (var i = 0; i < arr.length; i++) {
				str1+='<li><a href="#"><div class="three-box"><i></i><div class="img-wrap"><img data-src="'+arr[i].imgUrl+'" alt="'+arr[i].imgTitle+'"/></div><div class="three-box-note"><em><p class="three-box-title">'+arr[i].imgTitle+'</p></em></div><p class="three-subtit">'+arr[i].subTitle+'</p><div class="three-yen"><span class="three-price"><i>¥</i>'+arr[i].salePrice+'</span><span class="sale-price"><i class="i-pos-abs"><em class="free-mail">包邮</em></i><em class="line-price"><i>¥</i>'+arr[i].linePrice+'</em></span><span class="purchased"><i>'+arr[i].purchased+'</i>已购买</span></div></div></a><div class="three-box-bt"><span class="country-name">'+arr[i].place+'</span></div></li>';
				}
			$("#three-col ul").append(str1);
		},
		error:function(xhr){
			console.log(xhr.status);
		}
	})
	/*-----滚动加载----*/
	$(window).scroll(function(){
		$("#three-col").find("img").each(function  (index,ele) 	{
			if($(ele).offset().top<$(window).scrollTop()+500){
				var $src=$(ele).attr("data-src");
				setTimeout(function(){
					$(ele).attr("src",$src);
				},800)
			}
		})
	})
	













})