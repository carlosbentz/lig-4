/* As regras do jogo são simples, cada jogador clica em uma fileira pra colocar a bolinha, com o intuíto de
formar 4 em sequência, seja em diagonal, horizontal ou vertical.
O jogador pode repetir a fileira se quiser.
É necessário especificar a cor da bolinha (Acredito que seria bom usar uma variável pra cada, e usar uma função pra trocar
    os jogadores)
    Colocar uma classe em cada bolinha de acordo com a fileira, ex : 0,1,2
    Colocar um id em cada bolinha de acordo com a posição na fileira
    Adicionar uma regra que bloqueie a bolinha de sobrepor outra, com o childcount por exemplo
    Adicionar um limite de discos, no caso 6 por fileira.
    Criar um array pra servir de mapa, ex :
    map = ["xxxxxxx",
           "xxxxxxx",
           "xxxxxxx",
           "xxxxxxx",
           "xxxxxxx",
           "xxxxxxx"]
    Registrar no array a cor do player atual e a posição que a bolinha foi adicionada,
    ex : clicou na fileira 6 vazia, a bolinha será adicionada em map[5][5] = "red"
    Chamar uma função quando o jogador clicar, que verifica se foi completada uma sequẽncia de 4 bolinhas.
    Botão para reiniciar o game.*/
const boardColumnsContainer = document.querySelector('#board-columns-container')
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
            if (map[coluna][i] !== 0 && map[coluna][i] < 3) {

                switch (jogador) {
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

boardColumnsContainer.addEventListener("click", function () {
    for (i = 0; i < 7; i++) {
        let handleDiscos = document.createElement("div")
        handleDiscos.setAttribute("class", "container-disco handle")
        document.getElementById(i).lastChild.appendChild(handleDiscos)
    }






})
