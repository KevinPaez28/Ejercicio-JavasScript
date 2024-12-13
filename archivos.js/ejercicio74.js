alert(`Crea una función que tome un número como argumento y devuelva la cadena si el
número es par o impar.`)

function Impar(numero) {
  
 if (numero % 2 == 0) {
      alert("El numero es par")
    } else {
      alert("El numero es impar")
    }
  }
numero = parseInt(prompt("Ingrese un numero para saber si es Par o Impar"));
Impar(numero);