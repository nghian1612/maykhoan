// Main
$(document).ready(function() {
    // Phần Slider
    $('.home-slider_1 .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    $('.home-slider_2 .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                dots: false,
            },
            992: {
                dots: true
            },
        }
    });
    // Phần Clients
    $('.home-clients .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
});