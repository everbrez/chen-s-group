window.addEventListener('load', function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    simulateTouch : false,
    paginationClickable :true,
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction: false,
  });
}, false)
