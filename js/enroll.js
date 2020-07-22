$(function(){
	$('.tain_subnav').children('li').click(function(e) {
		/* Act on the event */
		$(this).addClass('active').siblings('li').removeClass('active')
	})

	//加入购物车
	$('.shopcar').click(function(){
		$(this).addClass('hasadd').text('已加购物车')
	})
})