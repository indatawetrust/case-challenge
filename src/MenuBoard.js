import Menu from './Menu'
import delay from 'delay'

class MenuBoard extends Menu {
  constructor(app, menu) {

    super(menu)

    this.app = app

    this.addAnimation = this.addAnimation.bind(this)
    this.price = this.price.bind(this)
  }

  start () {
    const meal = this.firstMeal()

    const image = this.image(meal)

    this.app.appendChild(image)

    const name = this.name(meal)

    this.app.appendChild(name)

    const price = this.price(meal)

    this.app.appendChild(price)

    this.animation(image)
  }

  image (meal) {
    const { el } = this

    return el('img', {
      src: meal.image,
      id: 'image'
    })
  }

  name (meal) {
    const { el } = this

    return el(
      'div',
      {
        id: 'name'
      },
      meal.name
    )
  }

  price (meal) {
    const { el } = this

    return el(
      'div',
      {
        id: 'price'
      },
      [el('span', {}, '₺'), el('span', {}, '15'), el('span', {}, ',99')]
    )
  }

  animation (image) {
    const { addAnimation, $$ } = this

    image.addEventListener(
      'animationend', async e => {
        if (
          !e.target.style['animation-name'] ||
          e.target.style['animation-name'] === 'mealLeftToRight'
        ) {
          await delay(1000)

          addAnimation('#image', {
            name: 'mealRightToLeft',
            duration: '1s'
          })

          addAnimation('#name', {
            name: 'nameFadeOut',
            duration: '1s'
          })
        } else {
          const lastMeal = this.nextMeal()

          image.src = lastMeal.image

          addAnimation('#image', {
            name: 'mealLeftToRight',
            duration: '1s'
          })

          $$('#name').innerText = lastMeal.name

          addAnimation('#name', {
            name: 'nameFadeIn',
            duration: '1s'
          })
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
