  navToggle()
  console.log(23323)

  function navToggle() {
    const nav = document.getElementById('nav')
    const showBtn = document.getElementById('nav-show')
    const closeBtn = document.getElementById('nav-close')
    console.log(showBtn, closeBtn)

    showBtn.addEventListener('click', () => nav.classList.add('show'), false)
    closeBtn.addEventListener('click', () => nav.classList.remove('show'), false)
  }
