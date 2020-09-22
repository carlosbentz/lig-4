const boardColumnsContainer = document.querySelector('#board-columns-container')
const containerCloudDisco = document.querySelector('#cloud-disco-container')
const columns = []
const containersDiscos = []
let jogador = 1
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
    for(i=0; i < 7; i++) {
        arrayCloudDisco[i] = document.createElement('div')
        containerCloudDisco.appendChild(arrayCloudDisco[i])
        arrayCloudDisco[i].classList.add('cloud-disco')
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


function escreveMap(coluna) {
    if (map[coluna][map[coluna].length - 1] === 0) {
        map[coluna][map[coluna].length - 1] = jogador
        
    } else {

        for (let i = 0; i < map[coluna].length; i++) {
            if (map[coluna][i] !== 0 && map[coluna][i] < 3 ) {

                switch(jogador) {
                    case 1: 
                    map[coluna][i - 1] = 1;
                        
                        break;
                    case 2: 
                    map[coluna][i - 1] = 2;
                        
                        break;
                }
            }
        }
    }
}

escreveMap(0)
escreveMap(1)
escreveMap(0)
escreveMap(0)
console.log(map)

