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

    // 收藏栏鼠标划过上移 
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
    function sliderMove(wrapper) {
        const lis = $(wrapper + ' ul li')
        let prelength = lis.length

        //同一个用两遍实际就是操作一个
        const lis_clone1 = lis.clone()
        const lis_clone2 = lis.clone()
        lis_clone1.prependTo(wrapper + ' ul')
        lis_clone2.appendTo(wrapper + ' ul')
        let n = 0
        let flag = true
        $('.tab-arrow-l').click(function() {
            let isActive = $(wrapper).hasClass('item-active')
            if (flag == true && isActive && n < 4) {
                flag = false

                // console.log(n);
                $(wrapper + ' ul').animate({
                    left: '-=293'
                }, function() {
                    flag = true
                    n++
                })
            } else if (flag == true && isActive) {
                flag = false
                $(wrapper + ' ul').css('left', '-1172px').animate({
                    left: '-=293'
                }, function() {
                    flag = true
                    n = 1
                })
            }
        })
        $('.tab-arrow-r').click(function() {
            let isActive = $(wrapper).hasClass('item-active')
            if (flag == true && isActive && n > -4) {
                flag = false
                $(wrapper + ' ul').animate({
                    left: '+=293'
                }, function() {
                    flag = true
                    n--
                })
            } else if (flag == true && isActive) {
                flag = false
                $(wrapper + ' ul').css('left', '-1172px').animate({
                    left: '+=293'
                }, function() {
                    flag = true
                    n = -1
                })
            }
        })
    }
    sliderMove('.item-new')
    sliderMove('.item-cx')
    sliderMove('.item-hot')
})