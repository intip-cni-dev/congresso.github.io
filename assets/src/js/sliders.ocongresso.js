(() => {
    // Palestrantes
    if (typeof Glider !== 'undefined') {
        /*new Glider(document.querySelector('.videos-do-lancamento'), {
            slidesToShow: 1,
            dots: '.videos-do-lancamento-mobile-dots',
            responsive: [{
                // screens greater than >= 775px (tablet)
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25,
                    dots: '.videos-do-lancamento-dots',
                }
            }, {
                // screens greater than >= 1366px (notebook)
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.25,
                    dots: '.videos-do-lancamento-dots',
                }
            }, ]
        });*/
        new Glider(document.querySelector('.videos-do-lancamento'), {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: '.videos-do-lancamento-dots',
            draggable: true,
            responsive: [{
                // screens greater than >= 775px (tablet)
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // itemWidth: 150,
                    duration: 0.25,
                    dots: '.videos-do-lancamento-dots',
                }
            }, {
                // screens greater than >= 1366px (notebook)
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // itemWidth: 150,
                    duration: 0.25,
                    dots: '.videos-do-lancamento-dots',
                }
            }, ]

        });
    }
})()