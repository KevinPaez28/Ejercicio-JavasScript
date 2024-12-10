alert("62. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.")

function Palabra(palabra) {
  for (let i = 1; i <= 10; i++){
    alert(palabra)
  }
}
let palabra = prompt("Ingrese una palabra")
Palabra(palabra)