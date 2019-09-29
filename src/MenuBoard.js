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
      [el('span', {}, '₺'), el('span', {}, meal.price.split(',')[0]), el('span', {}, `,${meal.price.split(',')[1]}`)]
    )
  }

  updateMeal() {
    const {$$, addAnimation} = this

    const lastMeal = this.nextMeal()

    image.src = lastMeal.image

    $$('#name').innerText = lastMeal.name

    $$('#price span:nth-child(2)').innerText = lastMeal.price.split(',')[0]

    $$('#price span:nth-child(3)').innerText = `,${lastMeal.price.split(',')[1]}`
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

          addAnimation([
            [
              '#image', {
                name: 'mealRightToLeft',
                duration: '1s'
              }
            ],
            [
              '#name', {
                name: 'nameFadeOut',
                duration: '1s'
              }
            ],
            [
              '#price', {
                name: 'fadeOutPrice',
                duration: '1s'
              }
            ]
          ])
        } else {
          addAnimation([
            [
              '#price', {
                name: 'fadeInPrice',
                duration: '1s'
              }
            ],
            [
              '#name', {
                name: 'nameFadeIn',
                duration: '1s'
              }
            ],
            [
              '#image', {
                name: 'mealLeftToRight',
                duration: '1s'
              }
            ]
          ])

          this.updateMeal()
        }
      })
  }

  addAnimation (animations) {
    for (let animation of animations) {
      const [selector, opts] = animation

      const { $$ } = this

      const element = $$(selector)

      for (const [key, value] of Object.entries(opts)) {
        element.style['animation-' + key] = value
      }
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
