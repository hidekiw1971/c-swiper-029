"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // start
  var swiper = new Swiper('.swiper', {
    allowTouchMove: false,
    crossFade: true,
    autoplay: {
      delay: 1000
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  // end
});