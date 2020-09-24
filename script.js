// Seleção dos elementos #board-columns-container' #cloud-disco-container e #gemSound  para manipulação via Dom
const boardColumnsContainer = document.querySelector('#board-columns-container')
const containerCloudDisco = document.querySelector('#cloud-disco-container')
const gemSound = document.getElementById('gemSound')

//Declaração de variáveis serem ultilizadas
const columns = []
const containersDiscos = []
let disco
let jogador = 1
let posicaoX
let posicaoY
let jogador1 = 0
let jogador2 = 0
let placar = {
    player1: 0,
    player2: 0
}

//Array que é ultilizado para mapear a colocação das peças e as condições de vítoria  
let map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]

//Função que cria divs de entrada de disco e insere no containerCloudDisco
let arrayCloudDisco = []
function createCloudDisco() {
    for (i = 0; i < 7; i++) {
        arrayCloudDisco[i] = document.createElement('div')
        containerCloudDisco.appendChild(arrayCloudDisco[i])
        arrayCloudDisco[i].classList.add('cloud-disco', i, 'preto')
    }
}
createCloudDisco()

//Função que cria as colunas com os containers de disco 
function createColumn() {
    for (let i = 0; i <= 6; i++) {
        columns[i] = document.createElement('div')
        boardColumnsContainer.appendChild(columns[i])
    }
}
createColumn()

//função que insere classe e id numericos as colunas e cria e insere os containers de disco 
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

//Função que insere disco 
function insertDisco() {
    arrayCloudDisco.forEach((elem) => {
        elem.addEventListener('click', (event) => {
            escreveMap(elem.classList[1])
            if (jogador === 1 || jogador === 2) {
                gemSound.play()
                checkWinnerHorizontally()
                checkWinnerVertically()
                checkWinnerLeftDiagonal()
                checkWinnerRightDiagonal()
            }
        })
    })
}
insertDisco()

// Função que insere a posição do disco no array e de troca o jogador 
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



function checkWinnerHorizontally() {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7; j++) {
            checkCell()
        }
    }
}


function checkWinnerVertically() {
    for (j = 0; j < 7; j++) {
        for (i = 0; i < 7; i++) {
            checkCell()
        }
    }
}


function checkWinnerLeftDiagonal() {
    for (i = 0, j = 3; i < 4; i++, j--) {
        checkCell()
    }
    for (i = 0, j = 4; i < 5; i++, j--) {
        checkCell()
    }
    for (i = 0, j = 5; i < 6; i++, j--) {
        checkCell()
    }
    for (i = 1, j = 5; i < 7; i++, j--) {
        checkCell()
    }
    for (i = 2, j = 5; i < 7; i++, j--) {
        checkCell()
    }
    for (i = 3, j = 5; i < 7; i++, j--) {
        checkCell()
    }
}


function checkWinnerRightDiagonal() {
    for (i = 6, j = 3; j > 0; i--, j--) {
        checkCell()
    }
    for (i = 6, j = 4; j > 0; i--, j--) {
        checkCell()
    }
    for (i = 6, j = 5; j > 0; i--, j--) {
        checkCell()
    }
    for (i = 5, j = 5; j > 0; i--, j--) {
        checkCell()
    }
    for (i = 4, j = 5; j > 0; i--, j--) {
        checkCell()
    }
    for (i = 3, j = 5; j > 0; i--, j--) {
        checkCell()
    }
}


function checkCell() {
    if (map[i][j] > 0) {
        if (map[i][j] === 1) {
            jogador1++
            jogador2 = 0
            if (jogador1 === 4) {
                console.log("player 1 venceu");
                console.log(jogador1)
                popupVitoria(1);
                placar["player1"] += 1
                document.getElementById('placar1').innerHTML= placar.player1
                jogador = 3
            }
        }
        else {
            jogador2++
            jogador1 = 0
            if (jogador2 === 4) {
                console.log("player 2 venceu");
                console.log(jogador2)
                popupVitoria(2);
                placar["player2"] += 1
                document.getElementById('placar2').innerHTML= placar.player2
                jogador = 3
            }
        }
    }
    else {
        jogador1 = 0
        jogador2 = 0
    }
}

// Função que mostra tela de vitória
function popupVitoria(player) {
    document.getElementById('mensagemDeVitoria').innerText = `jogador ${player} Venceu!`
    document.getElementById('popup').style.display = 'block'
    

}


//Função que reinicia a partida
function reset() {
    map = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ]

    columns.forEach(element => {
        for (let index = 0; index < 6; index++) {
            let filho = element.children[index]
            filho.innerText = ""


        }
    });
    document.getElementById('popup').style.display = 'none'
    jogador = 2
    jogador1 = 0
    jogador2 = 0
}


//Botão de inicio de partida
const button = document.querySelector('#playButton')
button.addEventListener('click', event => document.querySelector('#inicialDisplay').style.display = 'none')


//Botão de regras
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}