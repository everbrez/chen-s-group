window.addEventListener('load', () => {
  navToggle()

  function navToggle() {
    const nav = document.getElementById('nav')
    const showBtn = document.getElementById('nav-show')
    const closeBtn = document.getElementById('nav-close')
    const mark = document.getElementById('nav-mark')

    mark.addEventListener('click', e => {
      e.stopPropagation()
      nav.classList.remove('show')
    }, true)
    showBtn.addEventListener('click', () => nav.classList.add('show'), false)
    closeBtn.addEventListener('click', () => nav.classList.remove('show'), false)
  }
}, false)
