$(document).ready(function () {

    $("#partners").owlCarousel({
        pagination: false,
        loop: true,
        margin: 10,
        nav: true,
        rtl: true,
        autoplay: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideSpeed: 10000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            },
            1050: {
                items: 5
            }
        }
    });

    $("#productsDetail").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    $("#relatedItems").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});