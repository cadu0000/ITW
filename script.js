document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit");
    const resultadoDiv = document.getElementById("resultado");

    submitButton.addEventListener("click", function() {
        const inputReal = document.getElementById("real");
        const valorReal = parseFloat(inputReal.value);
        const valorDolar = valorReal * 5.0;

        resultadoDiv.innerHTML = `${valorReal.toFixed(2)} reais em dólar é igual a: ${valorDolar.toFixed(2)} dólares`;
    });
});