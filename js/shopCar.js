$(function(){
	//----购物车----
	function sum() {
		var sum_amount = 0
		var sum_class = 0
		$('.simple_check').each(function(index, el) {
			if ($(this).is(':checked')) {
				sum_amount += parseInt($(this).parents('.foodcar_item').find('.price').text())
				sum_class += 1
			}
		});
		$('.sum_price .sum_class').text(sum_class)
		$('.sum_price .sum_amount').text(sum_amount)
		return
	}
	// 全选
	$('.check_all').click(function(){
		$('.check_no').prop('checked', false)
		if($(this).is(':checked')) {
			$('.simple_check').prop("checked", true)
		} else {
			$('.simple_check').prop("checked", false)
		}
		sum()
		return
	})
	// 全不选
	$('.check_no').click(function() {
		$('.simple_check').prop("checked", false)
		$('.check_all').prop("checked", false)
		sum()
		return
	});
	// 单选
	$('.simple_check').change(function(){
		$('.check_no').prop('checked', false)
		$('.check_all').prop("checked", false)
		var flag = false
		$('.simple_check').each(function(index, el) {
			if (!$(this).is(':checked')) {
				flag = true
				return
			}
		});
		if (!flag) {
			$('.check_all').prop("checked", true)
		}
		sum()
	})
})