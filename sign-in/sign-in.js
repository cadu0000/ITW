import { novoUsuario } from '../classes/usuario.js';

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const testeSenha = document.getElementById("confirmarSenha");
const cadastroConfirmacao = document.getElementById("cadastro_confirmacao");
const submitButton = document.getElementById("submit");
const emailErro = document.getElementById("email_erro");
const senhaErro = document.getElementById("senha_erro");
const nomeErro = document.getElementById("nome_erro");
var listaDeUsuarios = [];

submitButton.addEventListener("click", function () {
    if (nome.value.trim() === "") {
        mudarEstado(nomeErro);
        erro(emailErro, senhaErro);
    }
    else if (!validarEmail(email.value)) {
        mudarEstado(emailErro);
        erro(senhaErro, nomeErro);
    } 
    else if (!confirmarSenha(senha.value, testeSenha.value)) {
        mudarEstado(senhaErro);
        erro(nomeErro, emailErro);
    } else {
        erro(nomeErro, emailErro, senhaErro);
        cadastroConfirmacao.style.display = "block";
        let usuario = new novoUsuario(nome.value, email.value, senha.value);
        listaDeUsuarios.push(usuario)
        localStorage.setItem('listaDeUsuarios', JSON.stringify(listaDeUsuarios));
        console.log(listaDeUsuarios);
        setTimeout(function () {
            window.location.href = "../login/login.html";
        }, 5000);

    }
});

function validarEmail(email) {
    var emailValido = /\S+@\S+\.\S+/;
    return emailValido.test(email);
}

function confirmarSenha(senha, confirmarSenha) {
    return senha === confirmarSenha && senha != "";
}

export function mudarEstado(elemento) {
    elemento.style.display = "block";
}

export function erro(elemento1, elemento2, elemento3) {
    elemento1.style.display = "none";
    elemento2.style.display = "none";
    elemento3.style.display = "none";
}