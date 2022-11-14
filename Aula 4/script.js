var jogador1 = 0;
var jogador2 = 0;
var placar = 0;


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
