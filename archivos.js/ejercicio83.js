alert(`• Implemente una función que sume dos números y devuelva su suma en binario, el
número binario devuelto debe ser una cadena`)

function sumaBinaria(a, b) {
    let suma = a + b;
    return suma.toString(2);
}

let a = parseInt(prompt("Ingrese un número"));
let b = parseInt(prompt("Ingrese otro número"));

let resultado = sumaBinaria(a, b);
alert(`La suma en binario es: ${resultado}`);