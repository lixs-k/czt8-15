$(function(){
	/* 一级导航 */
	$('.nav').children('li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.subnav').eq($(this).index()).addClass('active').siblings('.subnav').removeClass('active')
	})
})