alert(`• Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.`)

function inversoAditivo(numeros) {
    let resultado = [];
    let i = 0;
    while (i < numeros.length) {
        resultado.push(-numeros[i]);
        i++;
    }
    return resultado;
}
let numeros = parseInt(prompt("Ingrese numeros"))
let resultado = inversoAditivo(numeros);
alert(`La conversion de los numeros es de ${resultado}`)