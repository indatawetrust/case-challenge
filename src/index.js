import MenuBoard from './MenuBoard'

document.addEventListener('DOMContentLoaded', function (e) {
  const app = document.getElementById('app')

  const menu = [
    {
      image: '/public/images/meal1.png',
      name: 'hamburger 1'
    }
  ]

  const board = new MenuBoard(app, menu)

  board.start()
})
