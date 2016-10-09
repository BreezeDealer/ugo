/*----------商品列加载------------*/
$.ajax({
	async:true,
	cache:false,
	url:'data/list.txt',
	type:'GET',
	success:function(stri){
		var str1="";
		var data=eval(stri);
		for (var i = 0; i < data.length; i++) {
			str1+='<div class="pruwrap"><dl class="pruwrapdl mg1 "><dt><div class="goods-photo"><a href="#"><img data-src="'+data[i].imgUrl+'"/></a></div></dt><dd class="goods-title"><a href="#">'+data[i].title+'</a></dd><dd class="goods-picmass"><div class="price"><div class="l"><div class="original-price">￥'+data[i].origPrice+'</div><div class="now-price"><span>￥</span>'+data[i].nowPrice+'</div></div></div><div class="r review">评论<a href="#">'+data[i].review+'</a>条</div></dd><dd class="goodstatus"><div class="l good-label"><span class="label-tv l">'+data[i].label+'</span><span class="label-main l">免运费</span></div><div class="l good-score"><span class="score-icon l">积</span><span class="score-num l">'+data[i].scoreNum+'</span></div></dd><dd class="good-discuss"><h4 class="discuss-title">会员评价</h4><p class="discuss-con"><span><img src="images/leftyin.jpg"></span><span class="str">'+data[i].discuss+'</span><span><img src="images/rightyin.jpg"></span></p></dd></dl></div>';
			}
		$(".list-show-box").append(str1);
	},
	error:function(xhr){
		console.log(xhr.status);
	}
})
/*---lazy load----*/
$(window).scroll(function(){
		$(".list-show-box").find("img").each(function  (index,ele) 	{
			if($(ele).offset().top<$(window).scrollTop()+600){
				var $src=$(ele).attr("data-src");
				$(ele).attr("src",$src);
			}
		})
	})
/*---------效果----------------*/