"use strict";

(function () {
  // Palestrantes
  if (typeof Glider !== 'undefined') {
    new Glider(document.querySelector('.speakers'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.speakers-mobile-dots',
      draggable: true,
      responsive: [{
        // screens greater than >= 775px (tablet)
        breakpoint: 775,
        settings: {
          draggable: true,
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25,
          dots: '.speakers-dots'
        }
      }, {
        // screens greater than >= 1366px (notebook)
        breakpoint: 1366,
        settings: {
          draggable: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
          dots: '.speakers-dots'
        }
      }]
    });
  }
})();