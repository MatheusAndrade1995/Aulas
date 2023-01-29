'use strict'

const loginContainer = document.getElementById('login-container');
const moveOverlay = () => loginContainer.classList.toggle('move');

document.getElementById('cadastrar').addEventListener('click', moveOverlay)
document.getElementById('entrar').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)


function logar(){
    //abre em outra guia
    window.open("");
    //abre na mesma guia
    window.location.href = "";
}

function cadastro(){
    //abre em outra guia
    window.open("");
    //abre na mesma guia
    window.location.href = "";
}

/*function trocar(){
    document.getElementById("cadastrar").addEventListener(login-container.toogle);
    //elemento.innerHTML = "Obrigado por passar o mouse";
}*/