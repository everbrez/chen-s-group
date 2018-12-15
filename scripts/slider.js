class Slider {
  constructor(props) {
    const { swiperWrapper, swiperItem, duration = 1000 } = props
    this.wrapper = swiperWrapper
    this.items = swiperItem
    this.duration = duration
  }

  init() {
    const items = document.querySelectorAll(this.items)
    const wrapper = document.querySelector(this.wrapper)

    const firstItem = items[0]
    const lastItem = items[items.length - 1]

    wrapper.insertBefore(lastItem.cloneNode(true), firstItem)
    wrapper.appendChild(firstItem.cloneNode(true), lastItem)


    this.swipers = [...document.querySelectorAll(this.items)]
    this.currentIndex = 1
    this.length = this.swipers.length - 2
    this.setItemsClass()
  }

  prev() {
    this.removeItemsClass()
    this.removeAnimationStyles()
    this.nextIndex()
    this.setAnimationStyle(this.getPrevIndex())
    this.setItemsClass()
    return this.currentIndex
  }

  next() {
    this.removeItemsClass()
    this.removeAnimationStyles()
    this.prevIndex()
    this.setItemsClass()
    this.setAnimationStyle(this.getNextIndex())
    return this.currentIndex
  }

  removeAnimationStyles() {
    this.removeAnimationStyle(this.currentIndex)
    this.removeAnimationStyle(this.getNextIndex())
    this.removeAnimationStyle(this.getPrevIndex())
  }

  removeItemsClass() {
    this.removeStatus(this.getNextIndex(), ['next'])
    this.removeStatus(this.getPrevIndex(), ['prev'])
    this.removeStatus(this.currentIndex, ['current'])
  }

  setItemsClass() {
    this.setAnimationStyle(this.currentIndex)
    this.setStatus(this.currentIndex, ['current'])
    this.setStatus(this.getNextIndex(), ['next'])
    this.setStatus(this.getPrevIndex(), ['prev'])
  }

  setStatus(index, status = []) {
    status.forEach((className) => {
      this.setClass(this.swipers[index], className)
    })
  }

  removeStatus(index, status = []) {
    status.forEach(className => {
      this.removeClass(this.swipers[index], className)
    })
  }

  getAnimationStyle() {
    return {
      transition: `left cubic-bezier(0.215, 0.610, 0.355, 1) ${this.duration}ms`,
    }
  }

  setAnimationStyle(index) {
    this.setStyle(this.swipers[index], this.getAnimationStyle())
  }

  removeAnimationStyle(index) {
    this.clearStyle(this.swipers[index])
  }

  setClass(node, className) {
    node.classList.add(className)
  }

  removeClass(node, className) {
    node.classList.remove(className)
  }

  setStyle(node, styles) {
    console.log(node, styles)
    Object.keys(styles).forEach(key => {
      console.log(key === 'transition')
      node.style[key] = styles[key]
    })
    console.log(node)
  }

  clearStyle(node) {
    node.style.cssText = ''
  }

  nextIndex() {
    return this.currentIndex = this.getNextIndex()
  }

  prevIndex() {
    return this.currentIndex = this.getPrevIndex()
  }

  getNextIndex() {
    return this.currentIndex + 1 > this.length ? 1 : this.currentIndex + 1
  }

  getPrevIndex() {
    return this.currentIndex - 1 < 1 ? this.length : this.currentIndex - 1
  }
}

const slider = new Slider({swiperWrapper: '.swiper-wrapper', swiperItem: '.swiper-item'})
slider.init()
this.setInterval(() => {
  slider.next()
}, 2000);
