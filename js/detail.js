$(function(){
    // 播放器插件
    var player = videojs('video', { }, function () {
    });
    player.on('play', function () {
        $('.vjs-big-play-button').css('display', 'none')
       });
    player.on('pause', function () {
        $('.vjs-big-play-button').css('display', 'block')
    });
    player.on('ended', function () {
        $('.vjs-big-play-button').css('display', 'block')
    });

    // 加入购物车
    $('.shop_btn').click(function(){
        $(this).addClass('hasadd').text('已加购物车')
    })
})