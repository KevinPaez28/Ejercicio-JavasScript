
function convertirNumeroATexto(numero) {
    const numeros = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    if (numero >= 0 && numero <= 5) {
        return numeros[numero];
    } else {
        return "Número fuera de rango";
    }
}

let numero = parseInt(prompt("Ingresa un número entre 0 y 5:"));
let resultado =convertirNumeroATexto(numero)
alert(`El número en texto es: ${resultado}`);