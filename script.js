const boardColumnsContainer = document.querySelector('#board-columns-container')
const containerCloudDisco = document.querySelector('#cloud-disco-container')
const columns = []
const containersDiscos = []
let jogador = 1
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
    })
})


function escreveMap(coluna) {
    posicaoX = document.getElementById(coluna)
<<<<<<< HEAD
    if (map[coluna][map[coluna].length - 1] === 0) {
        map[coluna][map[coluna].length - 1] = jogador
        posicaoY = posicaoX.lastChild.lastChild
        // console.log(posicaoY);
    } else {

        for (let i = 0; i < map[coluna].length; i++) {
            if (map[coluna][i] !== 0 && map[coluna][i] < 3) {
                switch (jogador) {
                    case 1:
                        map[coluna][i - 1] = 1;
                        posicaoY = posicaoX.children[i - 1]
                        // console.log(posicaoY);
                        break;
                    case 2:
                        map[coluna][i - 1] = 2;
                        posicaoY = posicaoX.children[i - 1]
                        // console.log(posicaoY);
                        break;
                    default:
                        break;
                }
            }
=======
    index = map[coluna].lastIndexOf(0)
    if(index !== -1) {
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
>>>>>>> 259d9d72ffbd82e545e9298a3d6b1556c4acc388
        }
    }    
}


// escreveMap(0)
console.log(map)

