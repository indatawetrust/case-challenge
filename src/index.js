import MenuBoard from './MenuBoard'

document.addEventListener('DOMContentLoaded', function (e) {
  const app = document.getElementById('app')

  const menu = [
    {
      image: '/public/images/meal1.png',
      name: 'hamburger 1'
    },
    {
      image: '/public/images/meal2.png',
      name: 'hamburger 2'
    },
    {
      image: '/public/images/meal3.png',
      name: 'hamburger 3'
    }
  ]

  const board = new MenuBoard(app, menu)

  board.start()
})
