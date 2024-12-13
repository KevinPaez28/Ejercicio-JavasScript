alert(`Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
cortas menores de 5 caracteres).`)

function Longitud(palabras) {
    if (palabras.length > 5) {
      alert("La palabra es larga")
    }else{
      alert("la palabra es corta")
    }
    
  }

let palabras=prompt("Ingrese una para saber si es larga o corta")
Longitud(palabras)