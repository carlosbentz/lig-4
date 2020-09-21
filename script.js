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