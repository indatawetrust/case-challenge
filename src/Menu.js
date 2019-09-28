class Menu {
  constructor (menu) {
    this.menu = menu
  }

  firstMeal () {
    return this.menu[0]
  }

  lastMeal () {
    return this.menu.pop()
  }

  nextMeal () {
    const lastMeal = this.lastMeal()

    this.menu.unshift(lastMeal)

    return lastMeal
  }
}

export default Menu
