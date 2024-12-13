alert(`78.Crea una función de nos devuelva el elemento mayor de un arreglo de números.
`)

function Numeros(numeros) {
    let arreglo = [];
    arreglo.push(...numeros);
    let nmro_max = Math.max(...arreglo);
    alert(`El numero máximo es ${nmro_max}`);
}

let nmros_lista = parseInt(prompt("Ingrese cuantos valores desea ingresar"));
let numeros = [];
for (let u = 0; u < nmros_lista; u++) {
    let numero = parseInt(prompt("Ingrese un número"));
    numeros.push(numero);
}

Numeros(numeros);
