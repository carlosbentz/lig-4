const boardColumnsContainer = document.querySelector('#board-columns-container')
const containerCloudDisco = document.querySelector('#cloud-disco-container')
const columns = []
const containersDiscos = []
let jogador = 1
let jogador1Pontos = 0
let jogador2Pontos = 0
let posicaoX
let posicaoY
const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]

let arrayCloudDisco = []
function createCloudDisco() {
    for (i = 0; i < 7; i++) {
        arrayCloudDisco[i] = document.createElement('div')
        containerCloudDisco.appendChild(arrayCloudDisco[i])
        arrayCloudDisco[i].classList.add('cloud-disco', i, 'preto')
    }
}
createCloudDisco()


function createColumn() {
    for (let i = 0; i <= 6; i++) {
        columns[i] = document.createElement('div')
        boardColumnsContainer.appendChild(columns[i])
    }
}
createColumn()

function createLine() {
    columns.forEach((column, ind) => {
        column.classList.add('board-column')
        column.id = ind
        for (let i = 0; i <= 5; i++) {
            containersDiscos[i] = document.createElement('div')
            column.appendChild(containersDiscos[i])
        }
        containersDiscos.forEach((contDisco, index) => {
            contDisco.classList.add('container-disco', index)
        })
    })
}
createLine()

let disco
arrayCloudDisco.forEach((elem) => {

    elem.addEventListener('click', (event) => {
        escreveMap(elem.classList[1])
        checkWinnerHorizontally()
        checkWinnerVertically()
    })
})


function escreveMap(coluna) {
    posicaoX = document.getElementById(coluna)
    index = map[coluna].lastIndexOf(0)
    if (index !== -1) {
        switch (jogador) {
            case 1:
                map[coluna][index] += 1
                posicaoY = posicaoX.children[index]
                jogador = 2
                disco = document.createElement('div')
                disco.classList.add('jogador1')
                posicaoY.appendChild(disco)
                arrayCloudDisco.forEach(elem => {
                    elem.classList.remove('preto')
                    elem.classList.add('vermelho')
                })
                break;
            case 2:
                map[coluna][index] += 2
                posicaoY = posicaoX.children[index]
                jogador = 1
                disco = document.createElement('div')
                disco.classList.add('jogador2')
                posicaoY.appendChild(disco)
                arrayCloudDisco.forEach(elem => {
                    elem.classList.remove('vermelho')
                    elem.classList.add('preto')
                })
                break;
            default:
                break;
        }
    }
}


// escreveMap(0)
console.log(map)


function checkWinnerHorizontally() {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (map[i][j] > 0) {
                if (map[i][j] === 1) {
                    jogador1++
                    if (jogador1 === 4) {
                        console.log("player 1 venceu")
                    }
                }
                else {
                    jogador2++
                    if (jogador2 === 4) {
                        console.log("player 2 venceu")
                    }
                }
            }
            else {
                jogador1 = 0
                jogador2 = 0
            }
        }
    }
}
function checkWinnerVertically() {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            if (map[j][i] > 0) {
                if (map[j][i] === 1) {
                    jogador1++
                    if (jogador1 === 4) {
                        console.log("player 1 venceu")
                    }
                }
                else {
                    jogador2++
                    if (jogador2 === 4) {
                        console.log("player 2 venceu")
                    }

                }
            }
            else {
                jogador1 = 0
                jogador2 = 0
            }
        }
    }
}