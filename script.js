var realParaDolar;
var dolarParaReal;
document.addEventListener("DOMContentLoaded", function () {
    const submitDolar = document.getElementById("submit_dolar");
    const submitReal = document.getElementById("submit_real");
    const resultadoDolar = document.getElementById("resultado_dolar");
    const resultadoReal = document.getElementById("resultado_real");

    consulta()

    const loginInfo = document.getElementById('login_info');

    const boasVindas = localStorage.getItem('nomeUsuario');
    if (boasVindas) {
        loginInfo.textContent = boasVindas;
    }
    submitReal.addEventListener("click", function () {
        const inputReal = document.getElementById("real");
        const valorReal = parseFloat(inputReal.value);
        const valorDolar = valorReal * realParaDolar.BRLUSD.bid;

        resultadoReal.innerHTML = `${valorReal.toFixed(2)} reais em dólar é igual a: ${valorDolar.toFixed(2)} dólares`;
    });
    submitDolar.addEventListener("click", function () {
        const inputDolar = document.getElementById("dolar");
        const valorDolar = parseFloat(inputDolar.value);
        const valorReal = valorDolar * dolarParaReal.USDBRL.bid;

        resultadoDolar.innerHTML = `${valorDolar.toFixed(2)} dólares em real é igual a: ${valorReal.toFixed(2)} reais`;
    });

});

function getMoeda(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function consulta() {
    realParaDolar = getMoeda("https://economia.awesomeapi.com.br/last/BRL-USD");
    realParaDolar = JSON.parse(realParaDolar)
    dolarParaReal = getMoeda("https://economia.awesomeapi.com.br/last/USD-BRL");
    dolarParaReal = JSON.parse(dolarParaReal)
}
