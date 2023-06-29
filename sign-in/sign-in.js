
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const testeSenha = document.getElementById("confirmarSenha");
const cadastroConfirmacao = document.getElementById("cadastro_confirmacao");
const submitButton = document.getElementById("submit");
const emailErro = document.getElementById("email_erro")
const senhaErro = document.getElementById("senha_erro")
const nomeErro = document.getElementById("nome_erro")
var listaDeUsuarios = []

submitButton.addEventListener("click", function () {
    if (nome.value.trim() === "") {
        mudarEstado(nomeErro);
        erro(emailErro, senhaErro)
        console.log("1")
    } else if (!validarEmail(email.value)) {
        mudarEstado(emailErro);
        erro(senhaErro, nomeErro)
        console.log("2")
    } else if (!confirmarSenha(senha.value, testeSenha.value)) {
        mudarEstado(senhaErro);
        erro(nomeErro, emailErro)
        console.log("3")
    } else {
        cadastroConfirmacao.style.display = "block";
        console.log("4")
        erro(nomeErro, emailErro, senhaErro);
        var usuario = new novoUsuario(nome.value, email.value, senha.value);
        listaDeUsuarios.push(usuario)
        console.log(listaDeUsuarios)
    }
});

function novoUsuario(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
}

function validarEmail(email) {
    var emailValido = /\S+@\S+\.\S+/;
    return emailValido.test(email);
}

function confirmarSenha(senha, confirmarSenha) {
    return senha === confirmarSenha && senha != "";
}

function mudarEstado(elemento) {
    var display = elemento.style.display;
    elemento.style.display = "block";
}

function erro(elemento1, elemento2, elemento3) {
    var display1 = elemento1.style.display;
    elemento1.style.display = "none";

    var display2 = elemento2.style.display;
    elemento2.style.display = "none";

    var display3 = elemento3.style.display;
    elemento3.style.display = "none";
}

