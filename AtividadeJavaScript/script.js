//alert ("Página do curso JS");

var msg = "Bem vindo!";
/* TESTES DE COMANDOS
var frase = "Japão é a melhor seleção do MUNDO"

console.log(msg);
console.log(frase.replace("Japão",  "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["Victor", "Gilberto", "Matheus"];

lista.push ("Ed");
console.log (lista);
lista.pop ("Ed");
console.log (lista);
console.log (lista.length);
*/ 
/* CONDICIONAIS
idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};
*/

/* ARRAY
var feira = [{fruta:"maça", cor:"vermelha" }, {fruta:"abacaxi", cor:"amarelo" }];

console.log(feira);
console.log(feira[1].fruta);
*/

/*
var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getDay());
*/

function botao(){
    //alert("Click realizado com sucesso");
    document.getElementById("message").innerHTML = "Clique realizado com sucesso!"
}

function redirecionar(){
    //abre em outra guia
    window.open("http://ihmtzwebprodt:8080/DataPowerAdmin-0.0.1-SNAPSHOT/indice.doogle");
    //abre na mesma guia
    window.location.href = "http://ihmtzwebprodt:8080/DataPowerAdmin-0.0.1-SNAPSHOT/indice.doogle";
}

function trocar(elemento){
    //document.getElementById("mousepass").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //#quando a referencia for passada através de ID no index
    //document.getElementById("mousepass").innerHTML = "Passe o mouse aqui"
    //#quando for utilizado a referencia do this para indicar o próprio elemento
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}