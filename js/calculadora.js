function calcular() {
    const num1 = parseFloat(document.getElementById("primeiroNumero").value);
    const num2 = parseFloat(document.getElementById("segundoNumero").value);
    const operacao = document.getElementById("operacao").value;
    const resultadoElemento = document.getElementById("resultado");0

    if (isNaN(num1) || isNaN(num2)) {
        resultadoElemento.innerHTML = "Por favor, insira números válidos!";
        return;
    }

    let resultado;

    switch (operacao) {
        case "soma":
            resultado = soma(num1, num2);
            break;
        case "subtracao":
            resultado = subtracao(num1, num2);
            break;
        case "multiplicacao":
            resultado = multiplicacao(num1, num2);
            break;
        case "divisao":
            resultado = divisao(num1, num2);
            break;
        default:
            resultado = "ERROR";
    }

    resultadoElemento.innerHTML = resultado;
    validarCor(resultado);
}
