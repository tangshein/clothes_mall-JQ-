$(function() {
    // category栏手风琴
    $('.hitarea ').click(function() {
        $(this).children('i').stop().toggleClass('active')
        $(this).siblings('ul').stop().slideToggle().parent().siblings().children('ul').slideUp().siblings('.hitarea').children('i').removeClass('active')
    })

    // tab栏切换
    $('.view-mode i').click(function() {
        $(this).parent().parent().addClass('active').siblings().removeClass('active')

        // 图标所在li元素的索引
        let n = $(this).parent().parent().index()
        if (n == 0) {
            $('.tab-gird').show().siblings().not('tab-more').hide()
        } else if (n == 1) {
            $('.tab-list').show().siblings().not('tab-more').hide()

        }
    })

    //加入购物车动画
    $('.mo-cart').mouseenter(function() {
        $(this).css('color', '#fff').parent().addClass('active')

    })
    $('.mo-cart').mouseleave(function() {
        $(this).css('color', '#272727').parent().removeClass('active')

    })


})