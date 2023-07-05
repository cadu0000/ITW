import { mudarEstado, erro } from '../sign-in/sign-in.js';

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById("submit");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const emailErro = document.getElementById("email_erro");
    const senhaErro = document.getElementById("senha_erro");

    var listaDeUsuarios = localStorage.getItem('listaDeUsuarios');
    if (listaDeUsuarios) {
        listaDeUsuarios = JSON.parse(listaDeUsuarios);
    } else {
        listaDeUsuarios = [];
    }

    submitButton.addEventListener('click', function () {
        for (let e = 0; e < listaDeUsuarios.length; e++) {
            if (listaDeUsuarios[e].email === email.value && listaDeUsuarios[e].senha === senha.value) {
                localStorage.setItem('nomeUsuario', `Bem-vindo, ${listaDeUsuarios[e].nome}!`); 
                window.location.href = "../index.html";
            } else if (listaDeUsuarios[e].email !== email.value) {
                mudarEstado(emailErro);
                erro(senhaErro);
            } else {
                mudarEstado(senhaErro);
                erro(emailErro);
            }
        }
    });
});
