$(function() {
    $('.cart-page-tablist li').click(function() {
        // console.log(111);
        $('.cart-page-tablist li').removeClass('active')
        $(this).addClass('active').prevAll().addClass('active')
        let n = $(this).index() + 1
        $('.tab-content>div:nth-child(' + n + ')').show().siblings().hide()
    })

    // 选中商品
    $('.table-cart .select').click(function() {
        $(this).toggleClass('active')

        // 全部选中,全选也选中
        if ($('.table-cart .select.active').length == $('.table-cart .select').length) {
            $('.table-cart .all').addClass('active')
        } else {
            $('.table-cart .all').removeClass('active')
        }

        computeTotalPrice()
    })

    // 点击全选，全部选中
    $('.table-cart .all').click(function() {
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $('.table-cart .select').addClass('active')

        } else {
            $('.table-cart .select').removeClass('active')

        }

        computeTotalPrice()
    })

    // 删除商品
    $('.table-cart .td-rm').click(function() {
        $(this).parent().remove()
        console.log($('.table-cart .td-rm').length);
        if ($('.table-cart .td-rm').length == 0) {
            $('.table-responsive').append('<h2 class="empty">购物车为空！</h2>')
        }

        computeTotalPrice()
    })

    // 数量减1
    $('.table-cart tr .dec').click(function() {
        let n = $(this).siblings('.input-cart-qty').val()
        if (n > 1) {
            n--
            $(this).siblings('.input-cart-qty').val(n)
        }
        let price = $(this).parent().parent().prev().children().text().split(' ')[1]
        let price_all = price * n
        $(this).parent().parent().next().children().text('$ ' + price_all.toFixed(2))

        // console.log(price_all);

        computeTotalPrice()
    })

    // 数量加1
    $('.table-cart tr .inc').click(function() {
        let n = $(this).siblings('.input-cart-qty').val()
        n++
        $(this).siblings('.input-cart-qty').val(n)
        let price = $(this).parent().parent().prev().children().text().split(' ')[1]
        let price_all = price * n
        $(this).parent().parent().next().children().text('$ ' + price_all.toFixed(2))

        // console.log(price_all);

        computeTotalPrice()
    })

    // 输入后改变总价
    // let n_pre = 1;
    $('.table-cart tr .input-cart-qty').blur(function() {
        let n = $(this).val()
        if (isNaN(n)) {
            alert('请输入数字')
            n = 1
            $(this).val(n)
            let price = $(this).parent().parent().prev().children().text().split(' ')[1]
            let price_all = price * n
            $(this).parent().parent().next().children().text('$ ' + price_all.toFixed(2))

        } else {
            let price = $(this).parent().parent().prev().children().text().split(' ')[1]
            let price_all = price * n

            // console.log(price_all);
            $(this).parent().parent().next().children().text('$ ' + price_all.toFixed(2))
        }

        computeTotalPrice()
    })

    // 计算总价
    function computeTotalPrice() {
        let totalPrice = 0;
        if ($('.table-cart .select.active').length == 0) {
            $('.payment-wrapper .grandtotal span').text(0)

        }
        $('.table-cart .active').parent().siblings('.td-total').children().each(function(index, ele) {
            let price = parseFloat(ele.innerText.split(' ')[1])
            totalPrice += price
            $('.payment-wrapper .grandtotal span').text(totalPrice.toFixed(2))

            // console.log(totalPrice.toFixed(2));
        })
    }



})