$(function() {
    // 导航栏显示动画函数(被选择元素，操作元素,移动终点,是否是显示)
    function navAnimate(seletor, opEle, position, isShow) {
        if (isShow) {
            $(seletor).mouseenter(function() {
                $(opEle).css('zIndex', 1).stop().animate({
                    'margin-top': position + 'px',
                    opacity: 1,
                })
            })
        } else {
            $(seletor).mouseleave(function() {
                $(opEle).stop().animate({
                    'margin-top': position + 'px',
                    opacity: 0,
                }, function() {
                    $(this).css('zIndex', -1)
                })
            })
        }

    }
    // headertop货币动画
    navAnimate('.currency-usd,.currency', '.currency', 0, 1)
    navAnimate('.currency-usd,.currency', '.currency', 15, 0)

    // nav底部线条动画
    $('.nav li:first').siblings('li').mouseenter(function() {
        $(this).children('.nav-line').stop().animate({
            width: '30px'
        })
    })
    $('.nav li:first').siblings('li').mouseleave(function() {
        $(this).children('.nav-line').stop().animate({
            width: '0px'
        })
    })

    // header-bottom nav二级菜单显示动画
    navAnimate('.nav li:first,.nav-index', '.nav-index', 0, 1)
    navAnimate('.nav li:first,.nav-index', '.nav-index', 25, 0)
    navAnimate('.nav li:nth-child(2),.nav-goods', '.nav-goods', 0, 1)
    navAnimate('.nav li:nth-child(2),.nav-goods', '.nav-goods', 25, 0)
    navAnimate('.nav li:nth-child(3),.nav-profile', '.nav-profile', 0, 1)
    navAnimate('.nav li:nth-child(3),.nav-profile', '.nav-profile', 25, 0)

    // 搜索框展开动画
    $('.moon-search').click(function() {
        $('.search-ipt').toggleClass('search-flatten')
        console.log(111);
    })

    //购物车展开动画
    $('.moon-cart,.cart-num').click(function() {
        $('.moon-cart').toggleClass('moon-cart-active')
        $('.cart-window').toggleClass('cart-window-active')
    })

    // banner依次显示
    function bannerAnimate(selector, time) {
        $(selector).delay(time).animate({
            top: '-=40px',
            opacity: 1
        })
    }
    bannerAnimate('.banner-m', 500)
    bannerAnimate('.banner-rect', 1000)
    bannerAnimate('.banner-women', 1500)
    bannerAnimate('.banner-on', 2000)
    bannerAnimate('.banner-collect', 2500)
    bannerAnimate('.banner-shop', 3000)

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

})