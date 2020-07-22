$(function() {
	// ----选择时间----
	// 获取一个月天数
    function mGetDate(year, month){
	    var d = new Date(year, month, 0);
	    return d.getDate();
	}
	function dateRender(year,month, date){
		var difM = new Date(year, month, 1).getMonth() - new Date().getMonth()
		var difY = new Date(year, month, 1).getYear() - new Date().getYear()
		$('.left_btn').removeClass('disactive')
	    if (difM < 0 && difY <= 0) {
	    	$('.left_btn').addClass('disactive')
	    	return
	    } else {
	    	// 获取当前月天数
			let mCount = mGetDate(year, month)
			var html = ''
			var day = new Date(year, month - 1, mCount).getDay()
			for(var j =0;j<day;j++) {
				html+='<li></li>'
			}
			for(var i=0; i<mCount; i++) {
				html+='<li>'+(i+1)+'</li>'
			}
			$('.date').html(html)
		    if (difM === 0 && difY === 0) {
		    	$('.left_btn').addClass('disactive')
				$('.date').children('li').eq(date-1+day).addClass('current active')
				$('.time_text').text(year+'年'+(month+1)+'月'+date+'日')
		    } else {
				$('.date').children('li').eq(day).addClass('active')
				$('.time_text').text(year+'年'+(month+1)+'月1日')
			}
		    // 添加选中事件
		    $('.date').children('li').click(function(){
				if ($(this).text()) {
					$(this).addClass('active').siblings('li').removeClass('active')
		    		var date = parseInt($(this).text())
		    		$('.time_text').text(year+'年'+(month+1)+'月'+date+'日')
				}
		    })
	    }
	}

	// 当前时间
	var currentTime = new Date()
	var year = currentTime.getFullYear()
	var month = currentTime.getMonth()
	var date = currentTime.getDate()
	dateRender(year, month, date, true)

	// 下个月
	$('.right_btn').click(function(){
		month = month + 1
		if (month > 11) {
			year = year + 1
			month = 0
		}
		dateRender(year, month, date)
	})
	
	// 上个月
    $('.left_btn').click(function(){
    	var difX = new Date(year, month, 1).getMonth() - new Date().getMonth()
    	var difY = new Date(year, month, 1).getYear() - new Date().getYear()
    	if (difX <=0 && difY <= 0) {
    		return
    	}
		month = month -1
    	if (month < 0) {
    		year = year - 1
    		month = 11
    	}
    	dateRender(year, month, date)
    })

    // ----选择号源----
    $('.number').children('li').click(function(){
    	if(!$(this).hasClass('appointed')){
    		$(this).addClass('active').siblings('li').removeClass('active')
    	} else {
    		var tig = $(this).children('div').text() + '号源预约已满，请重新选择'
    		$('.modal .context').text(tig)
    		$('.modal_wrap').css('display','block')
    	}
    })

	// 关闭消息提示框
    $('.modal_wrap .close').click(function(){
    	$('.modal_wrap').css('display','none')
    })
})