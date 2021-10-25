
/*
por Tag: getElementByTagName()
por Id: getElementByTagId()
por Nome: gerElementsByNome()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/


let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.Value.length < 3) { 
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        
    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "green"
        let nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.Value.indexOf('@') == -1 || email.Value.indexOf('.') == 1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"

    }
    else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        let emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#assunto')
      
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
       txtAssunto.style.display = "none"
       let assuntoOk = true

    }
}
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")

    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}