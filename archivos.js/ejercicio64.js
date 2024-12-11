alert(`Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
todos los números impares desde 1 hasta ese número separados por coma`)

function Impares(numero) {
  let numeros = [];
  if (numero >= 1) {
    
    for (let i = 0; i <= numero; i++){
      ++i;
      numeros.push(i);
    }
    alert(numeros)
  }

}
let numero = parseInt(prompt("Ingrese un numero"))
Impares(numero)
