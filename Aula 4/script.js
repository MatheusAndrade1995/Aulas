
var jogador1 = 0;
var jogador2 = 0;
var placar = 0;

//Contagem de registros de pontos por jogador 
if (jogador1 > 0) {
    console.log("jogador1 " + " marcou ponto! " + jogador1);
    placar = jogador1 > jogador2
    console.log("Placar " + jogador1 + " x " + jogador2);
}
else if (jogador2 > 0) {
    console.log("jogador2 " + " marcou ponto! " + jogador2);
    placar = jogador2 > jogador1
    console.log("Placar " + jogador1 + " x " + jogador2);
}
else {
    console.log("Ninguém marcou ponto!");
}

//Resultado ao fim da partida setando 3 condições para cada possibilidade de placar
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador1 ganhou a partida!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador2 ganhou a partida!')
        break;
    case placar = jogador1 = jogador2:
        console.log('Empate!')
        break;
}


//Contagem de minutos da partida
var minutos = 0;

do {
    minutos++;
    console.log("Tempo de partida: " + minutos )
}while (minutos < 5){
    console.log("Tempo de partida: " + minutos + " Fim de jogo! ")
}
