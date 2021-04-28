$(function() {
    // banner依次显示
    function imgShow(selector, time) {
        $(selector).delay(time).animate({
            top: '-=40px',
            opacity: 1
        })
    }

    // 所有img轮流显示
    function allImgShow() {
        imgShow('.banner-m', 500)
        imgShow('.banner-rect', 1000)
        imgShow('.banner-women', 1500)
        imgShow('.banner-on', 2000)
        imgShow('.banner-collect', 2500)
        imgShow('.banner-shop', 3000)
        setTimeout(function() {
            $('.banner').children().not('span').css('opacity', 0).animate({
                top: '+=40px'
            }, 1)
        }, 6000)
    }
    allImgShow()
    setInterval(function() {
        allImgShow()
    }, 7000)

    //banner箭头显示
    $('.banner').mouseenter(function() {
        $('.banner-arrow-l,.banner-arrow-r').css('opacity', 1)
    })
    $('.banner').mouseleave(function() {
        $('.banner-arrow-l,.banner-arrow-r').css('opacity', 0)
    })

    //banner箭头划过变色
    function arrowChangeColor(selector) {
        $(selector).mouseenter(function() {
            $(this).css('background-position', 'bottom')
        })
        $(selector).mouseleave(function() {
            $(this).css('background-position', 'top')
        })
    }
    arrowChangeColor('.banner-arrow-l')
    arrowChangeColor('.banner-arrow-r')


    // 收藏栏鼠标划过上移 
    function columnMove(selector) {
        $(selector).mouseenter(function() {
            $(this).addClass('column-active')
        })
        $(selector).mouseleave(function() {
            $(this).removeClass('column-active')

        })
    }
    columnMove('.column-left')
    columnMove('.column-right')

    // 收藏栏线条变化 
    function changelength(that, selector, attr, value) {
        that.find(selector).stop().animate({
            [attr]: value
        })
    }

    function columnLineChange(selector) {
        $(selector).mouseenter(function() {
            changelength($(this), '.line-v-short', 'height', '28%')
            changelength($(this), '.line-v-long', 'height', '67%')
            changelength($(this), '.line-top', 'width', '48%')
            changelength($(this), '.line-bottom', 'width', '87%')
        })
        $(selector).mouseleave(function() {
            changelength($(this), '.line-v-short', 'height', '0%')
            changelength($(this), '.line-v-long', 'height', '0%')
            changelength($(this), '.line-top', 'width', '0%')
            changelength($(this), '.line-bottom', 'width', '0%')
        })
    }
    columnLineChange('.column-left')
    columnLineChange('.column-right')


    // tab栏点击切换(isItemActive用于轮播图)
    function tabChange(selector, content) {
        $(selector).click(function() {
            $(this).addClass('prod-active').siblings('a').removeClass('prod-active')
            $('.tab-item>div').hide().removeClass('item-active')
            $(content).show().addClass('item-active')
        })
    }
    tabChange('.prod-new', '.item-new')
    tabChange('.prod-cx', '.item-cx')
    tabChange('.prod-hot', '.item-hot')

    // 轮播图动画

    sliderMove('.item-new', 4, 293, '-1172px')
    sliderMove('.item-cx', 4, 293, '-1172px')
    sliderMove('.item-hot', 4, 293, '-1172px')


    // recommend栏动画
    function recommendMove(selector) {
        $(selector).mouseenter(function() {
            $(this).addClass('recommend-active')
        })
        $(selector).mouseleave(function() {
            $(this).removeClass('recommend-active')
        })
    }
    recommendMove('.item1')
    recommendMove('.item2')
    recommendMove('.item3')
    recommendMove('.item4')



})