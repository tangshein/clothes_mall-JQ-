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
})