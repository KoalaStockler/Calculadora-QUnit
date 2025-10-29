function validarCor() {
    const resultadoElemento = document.getElementById("resultado"); 
    const valor = parseFloat(resultadoElemento.innerHTML); 

    if (valor < 0) {
        resultadoElemento.style.color = "red";
    } else {
        resultadoElemento.style.color = "green";
    }
}
