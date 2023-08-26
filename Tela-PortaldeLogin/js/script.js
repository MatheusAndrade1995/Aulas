'use strict'

const loginContainer = document.getElementById('login-container');
const moveOverlay = () => loginContainer.classList.toggle('move');

document.getElementById('cadastrar').addEventListener('click', moveOverlay)
document.getElementById('entrar').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)

document.getElementById('login-form').addEventListener('submit', cadastro)


function logar(event) {
    var inputs = document.getElementsByClassName('form-input')
    for (let input of inputs) {
        if (input.value == "") {
            input.parentElement.classList.add("wrap-invalid-input")
        }else{
            input.parentElement.classList.remove("wrap-invalid-input")
        }
        
        /* else {
            //abre em outra guia
            window.open("");
            //abre na mesma guia
            window.location.href = ""
        }*/
    }
    event.preventDefault()
}

function cadastro(event) {
    var inputs = document.getElementsByClassName('form-input')
    for (var input of inputs) {
        if (input.value.trim() == "") {
            input.parentElement.classList.add("wrap-invalid-input")
        }/* else {
            //abre em outra guia
            window.open("");
            //abre na mesma guia
            window.location.href = ""
        }*/
    }
    event.preventDefault()

}
/*
function invalidInput(event){
    let inputs = document.getElementsByClassName('form-input')
    for (let input of inputs){
        if (input.value.trim() == ""){
            input.parentElement.classList.add("wrap-input-invalid")            
        }
    }
    event.preventDefault()
}


/*function trocar(){
    document.getElementById("cadastrar").addEventListener(login-container.toogle);
    //elemento.innerHTML = "Obrigado por passar o mouse";
}*/