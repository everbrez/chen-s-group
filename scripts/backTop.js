window.addEventListener('load', function() {
  var backTopBtn = document.getElementById('back-top');
  backTopBtn.addEventListener('click', function(){backTop()});
}, false)

function backTop(duration = 800) {
  var begin = document.documentElement.scrollTop;
  var beginTime = new Date();

  function top() {
    if (document.documentElement.scrollTop > 0) {
      var time = new Date() - beginTime;
      document.documentElement.scrollTop = begin - easeOutCubic(time / duration) * begin;
      requestAnimationFrame(top)
    }
  }

  function easeOutCubic(x){
    return 1 - Math.pow(1 - x, 3);
  }

  requestAnimationFrame(top)
}