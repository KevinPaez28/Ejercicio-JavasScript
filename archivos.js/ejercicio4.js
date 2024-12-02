function Paroimpar(numero) {
    if (numero % 2 == 0) {
      alert("El numero es par")
    } else {
      alert("El numero es impar")
    }
  }
  numero = parseInt(prompt("Ingrese un numero para saber si es Par o Impar"));
  Paroimpar(numero);