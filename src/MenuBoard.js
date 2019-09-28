class MenuBoard {
  constructor(app, menu) {

    this.app = app
    this.menu = menu

    this.app.appendChild(this.image(this.menu[0]))

  }

  image (meal) {
    const { el } = this

    return el('img', {
      src: meal.image,
      id: 'image'
    })
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
