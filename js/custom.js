function mostrar() {
    var home = document.getElementById('home');
    home.classList.add('fadeIn');

    function animacion(tid, efecto) {
        $(window).scroll(function () {
            $(tid).each(function () {
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass(efecto);
                }
            });
        });
    }

    animacion('#menu-nav', 'slideUp');
    animacion('#nav-promo', 'slideUp');

    var price = document.getElementsByName('product-price');
    var name = document.getElementsByName('product-name');
    var beer = document.getElementsByName('beer');

    var ancho = screen.width;
    if (ancho < 768) {

        for (var item of price) {
            item.classList.add('size-price-responsive');
            item.classList.remove('size-h1');
        }
        for (var item of name) {
            item.classList.add('menu-h3-responsive');
            item.classList.remove('menu-h3');
        }
        for (var item of beer) {
            item.classList.add('beer-price-responsive');
            item.classList.remove('beer-price');
        }

    } else {

        for (var item of price) {
            item.classList.remove('size-price-responsive');
            item.classList.add('size-h1');
        }
        for (var item of name) {
            item.classList.remove('menu-h3-responsive');
            item.classList.add('menu-h3');
        }
        for (var item of beer) {
            item.classList.remove('beer-price-responsive');
            item.classList.add('beer-price');
        }
    }
}