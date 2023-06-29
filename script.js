document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");
    const resultadoDiv = document.getElementById("resultado");

    main()
    submitButton.addEventListener("click", function() {
        const inputReal = document.getElementById("real");
        const valorReal = parseFloat(inputReal.value);
        const valorDolar = valorReal * moedas.BRLUSD.bid; 

        resultadoDiv.innerHTML = `${valorReal.toFixed(2)} reais em dólar é igual a: ${valorDolar.toFixed(2)} dólares`;
    });

});

function getMoeda(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    moedasXML = getMoeda("https://economia.awesomeapi.com.br/last/BRL-USD");
    moedas = JSON.parse(moedasXML)
    console.log(moedas)
}
