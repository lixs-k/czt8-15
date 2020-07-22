$(function() {
    // 打开
	$('.operate_btn').click(function(){
		$('.evaluate_shade').addClass('open');
    })
    
    // 关闭
	$('.close_btn').click(function() {
        $('.evaluate_shade').removeClass('open');
        // 清空所有评价
        $('.shade_con tbody').find('i').removeClass('icon-xingxing').addClass('icon-xingxing1')
        .css({
			'color': '#999'
		})
    })

	// 分值
	var oneScore = 0
	var twoScore = 0
	var threeScore = 0
	var fourScore = 0
	// 评价
	$('.star').children('i').click(function() {
		// index+1:当前点击的星星个数
		var index = $(this).index() + 1
		var parent = $(this).parent()
		parent.children('i').removeClass('icon-xingxing').addClass('icon-xingxing1').
		css({
			'color': '#999'
		})
		parent.children('i:lt('+index+')').removeClass('icon-xingxing1').addClass('icon-xingxing')
		.css({
			'color': 'orange'
		})
		if ($(this).parents('tr').index() === 0) {
			oneScore = index
		} else if ($(this).parents('tr').index() === 1) {
			twoScore = index
		} else if ($(this).parents('tr').index() === 2) {
			threeScore = index
		} else {
			fourScore = index
		}
	})
})