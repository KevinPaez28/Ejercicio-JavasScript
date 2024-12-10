alert("45. Determinar si un número es positivo y menor que 100.")

function Positivo(nmr) {
  if (nmr >= 0 && nmr <= 100) {
   alert("Ingresaste un numero correcto")
  } else {
    alert("Numero negativo o Numero mayor a 100")
  }
}
let nmr = parseInt(prompt("Ingrese un numero:"))
Positivo(nmr);