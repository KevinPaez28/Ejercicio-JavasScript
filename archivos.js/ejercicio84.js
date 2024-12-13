
function eliminarVocales(cadena) {
    let resultado = '';
    let i = 0;
    while (i < cadena.length) {
        let caracter = cadena[i];
        if (!'aeiou'.includes(caracter)) {
            resultado += caracter;
        }
        i++;
    }
    return resultado;
}
let cadena=prompt("Ingrese la palabra")
let resultado = eliminarVocales(cadena)
alert(`Las palabras sin vocales quedan asi ${resultado}`)