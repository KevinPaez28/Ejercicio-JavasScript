alert(`Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
la cuenta atrás desde ese número hasta cero separados por comas.`)

function Regresiva(numero) {
  let numeros = [];
  if (numero >= 0) {
    for (numero; numero >= 0; numero--){
      numeros.push(numero);
    }
  }
  alert(numeros)
} 
let numero = parseInt(prompt("Ingrese un numero"))
Regresiva(numero)