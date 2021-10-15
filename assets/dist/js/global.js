"use strict";

(function () {
  // BS5 Accordions
  var accordions = document.querySelectorAll('.accordion');
  Array.prototype.slice.call(accordions).forEach(function (accordion) {
    accordion.addEventListener('show.bs.collapse', function (el) {
      el.target.parentElement.classList.toggle("active");
    });
    accordion.addEventListener('hidden.bs.collapse', function (el) {
      el.target.parentElement.classList.toggle("active");
    });
  });
})();