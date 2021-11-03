let order = []
let clickedOrder = []

let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

// //cria ordem aleatoria

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []

  for (let i in order) {
    elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}
// //acende a proxima cor

let lightColor = (element, number) => {
  number = number * 500
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
  setTimeout(() => {
    element.classList.remove('selected')
  })
}
//checa se os botoes clicados são os mesmos

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      over()
      break
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Voce Acertou! Iniciando novo nivel`)
    nextLevel()
  }
}
// função do clique usuario

let click = color => {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}
//criar funcão que rertorna a cor

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

let createColorElement = color => {
  if (color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if (color == 2) {
    return yellow
  } else if (color == 3) {
    return blue
  }
}

// funcao de next

let nextLevel = () => {
  score++
  shuffleOrder()
}
// função over

let over = () => {
  alert(`Pontuação: ${score}\n Voce perdeu tente novamente`)
  order = []
  clickedOrder = []

  playGame()
}

let playGame = () => {
  alert('Bem vindo! Teste sua memoria')
  score = 0
  nextLevel()
}

// green.addEventListener('click', click(0))
// red.addEventListener('click', click(1))
// yellow.addEventListener('click', click(2))
// blue.addEventListener('click', click(3))

//eventos d click para as cores

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()
