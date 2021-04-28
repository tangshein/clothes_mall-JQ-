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

    function sliderMove(wrapper, n, length, startMarginL) {
        const lis = $(wrapper + ' ul li')
        let prelength = lis.length

        //同一个用两遍实际就是操作一个
        const lis_clone1 = lis.clone()
        const lis_clone2 = lis.clone()
        lis_clone1.prependTo(wrapper + ' ul')
        lis_clone2.appendTo(wrapper + ' ul')
        let i = 0
        let flag = true
        $(wrapper).siblings('.tab-arrow-l').click(function() {
            let isActive = $(wrapper).hasClass('item-active')
            if (flag == true && isActive && i < n) {
                flag = false

                // console.log(i);
                $(wrapper + ' ul').animate({
                    left: '+=' + length
                }, function() {
                    flag = true
                    i++
                    console.log(i);
                })
            } else if (flag == true && isActive) {
                flag = false
                console.log(222);
                console.log(i);
                $(wrapper + ' ul').css('left', startMarginL).animate({
                    left: '+=' + length
                }, function() {
                    flag = true
                    i = 1
                })
            }
        })
        $(wrapper).siblings('.tab-arrow-r').click(function() {
            let isActive = $(wrapper).hasClass('item-active')
            if (flag == true && isActive && i > -n) {
                flag = false
                $(wrapper + ' ul').animate({
                    left: '-=' + length
                }, function() {
                    flag = true
                    i--
                })
            } else if (flag == true && isActive) {
                flag = false
                $(wrapper + ' ul').css('left', startMarginL).animate({
                    left: '-=' + length
                }, function() {
                    flag = true
                    i = -1
                })
            }
        })
    }

    // 博客栏轮播图
    sliderMove('.blog-list .blog-wrapper', 2, 570, '-1140px')


    // 品牌栏动画
    sliderMove('.brand-wrapper', 4, 189, '-756px')

    // 返回顶部箭头
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            $('#scroll-up').fadeIn()
        } else {
            $('#scroll-up').fadeOut()
        };
    })
    $('#scroll-up').mouseenter(function() {
        $(this).stop().animate({
            bottom: '-=5px'
        })
    }).click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500)
    })

    $('#scroll-up').mouseleave(function() {
        $(this).stop().animate({
            bottom: '35px'
        })
    })

    // 点击产品遮罩层动画
    function prodMaskshow(selector) {
        $(selector).find('img').click(function() {
            $('body').css({
                'overflow-y': 'hidden',
                'paddingRight': '17px'
            });
            $('.modal').fadeIn()
        })
    }
    $('.model-close').click(function() {
        $('.modal').fadeOut(function() {
            $('body').css({
                'overflow-y': 'visible',
                'paddingRight': 0
            });
        })
    })

    prodMaskshow('.item-new')
    prodMaskshow('.item-cx')
    prodMaskshow('.item-hot')
    prodMaskshow('.top-item')

    // 遮罩层内部tab动画
    $('.pro-info-tab-list li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
        let name = $(this).text().toLowerCase()
        $('#' + name).show().siblings().hide()
            // 图片高度变为一样高
        let imgH = parseInt($('#' + name).css('height')) + 168
        $('.product-image').css('height', imgH + 'px')
    })

    // 数量按钮加减
    $('.inc').click(function() {
        let n = $('.cart-plus-minus-box').val()
        n++
        $('.cart-plus-minus-box').val(n)
    })
    $('.dec').click(function() {
        let n = $('.cart-plus-minus-box').val()
        if (n > 0) {
            n--
            $('.cart-plus-minus-box').val(n)
        }
    })

    // 图片tab切换
    $('.pro-image-tab-list li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
        let i = $(this).index() + 1
        $('.pro-image-tab-container>div:nth-child(' + i + ')').show().siblings().hide()
    })
})