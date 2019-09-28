import Menu from './Menu'

class MenuBoard extends Menu {
  constructor(app, menu) {

    super(menu)

    this.app = app

    this.addAnimation = this.addAnimation.bind(this)
  }

  start () {
    const meal = this.firstMeal()

    const image = this.image(meal)

    this.app.appendChild(image)

    this.animation(image)
  }

  image (meal) {
    const { el } = this

    return el('img', {
      src: meal.image,
      id: 'image'
    })
  }

  animation (image) {
    const { addAnimation } = this

    image.addEventListener(
      'animationend', e => {
        if (
          !e.target.style['animation-name'] ||
          e.target.style['animation-name'] === 'mealLeftToRight'
        ) {
          addAnimation('#image', {
            name: 'mealRightToLeft',
            duration: '1s'
          })
        } else {

        }
      })
  }

  addAnimation (selector, opts) {
    const { $$ } = this

    const element = $$(selector)

    for (const [key, value] of Object.entries(opts)) {
      element.style['animation-' + key] = value
    }
  }

  $$ (selector) {
    return document.querySelector(selector)
  }

  el (tag, attributes, children = '') {
    const element = document.createElement(tag)

    for (const [key, value] of Object.entries(attributes)) {
      if (key === 'style' && typeof value === 'object') {
        for (const [_key, _value] of Object.entries(value)) {
          element.style[_key] = _value
        }
      } else {
        element.setAttribute(key, value)
      }
    }

    if (typeof children !== 'object') {
      element.innerHTML = children
    } else {
      children = Array.isArray(children) ? children : [children]

      for (const child of children) {
        element.appendChild(child)
      }
    }

    return element
  }
}

export default MenuBoard
