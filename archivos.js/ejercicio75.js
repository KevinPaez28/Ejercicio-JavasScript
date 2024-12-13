alert(`Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres).`)

function Longitud(palabra) {
  for (let i = 0; i < palabra.length; i++){
    if (i > 5) {
      alert("La palabra es larga")
      break
    } else {
      alert("la palabra es corta")
      break
    }
    
  }
}
let palabra=prompt("Ingrese una para saber si es larga o corta")
Longitud(palabra)