import MenuBoard from './MenuBoard'

document.addEventListener('DOMContentLoaded', function (e) {
  const app = document.getElementById('app')

  const menu = [
    {
      image: '/public/images/meal1.png'
    }
  ]

  const board = new MenuBoard(app, menu)
})
