$(function(){
    // 分页
	$('.page_btn').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active')
    })
    $('.page_box .next').click(function(){
        let length = $('.page_btn').length
        var index = $('.page_box .active').index()
        if (index > length) {
            index = length - 1
        }
        $('.page_box .page_btn').eq(index+1).addClass('active').siblings().removeClass('active')
    })
})