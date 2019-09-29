import MenuBoard from './MenuBoard'

document.addEventListener('DOMContentLoaded', function (e) {
  const app = document.getElementById('app')

  const menu = [
    {
      image: '/public/images/meal1.png',
      name: 'hamburger 1',
      price: '15,00'
    },
    {
      image: '/public/images/meal2.png',
      name: 'hamburger 2',
      price: '20,00'
    },
    {
      image: '/public/images/meal3.png',
      name: 'hamburger 3',
      price: '45,00'
    },
    {
      image: '/public/images/meal4.png',
      name: 'Triple Whopper',
      price: '20,50'
    }
  ]

  const board = new MenuBoard(app, menu)

  board.start()
})
