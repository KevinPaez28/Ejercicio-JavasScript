alert(`Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
una las letras de la palabra introducida empezando por la última`)

function Palabra(palabra) {
  let reversa = []
  for (let i = palabra.length - 1; i >=0 ; i--){
      reversa += palabra[i];
  }
  alert(reversa)
}
let palabra=prompt("Ingrese una palabra:")
Palabra(palabra)