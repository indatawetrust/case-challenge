import MenuBoard from './MenuBoard'

document.addEventListener('DOMContentLoaded', function (e) {
  const app = document.getElementById('app')

  const menu = [
    {
      image: '/public/images/meal1.png',
      name: 'Whopper',
      price: '15,00'
    },
    {
      image: '/public/images/meal2.png',
      name: 'Double King Chicken',
      price: '20,00'
    },
    {
      image: '/public/images/meal3.png',
      name: 'Double Whopper',
      price: '45,00'
    },
    {
      image: '/public/images/meal4.png',
      name: 'Triple Whopper',
      price: '20,50'
    },
    {
      image: '/public/images/meal5.png',
      name: 'Mangalda Izgara Tavuk',
      price: '32,99'
    }
  ]

  const board = new MenuBoard(app, menu)

  board.start()
})
