alert("Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o no")
function Tributar(edad, ingresos) {
    if (edad >= 16 && ingresos >= 1000) {
      alert("El usuario debe tributar")
    }
    if (edad < 16 || ingresos < 1000) {
      alert("El usuario no debe tributar")
    }
  }
  let edad = parseInt(prompt("Ingrese su edad"));
  let ingresos = parseInt(prompt("Cuanto gana al mes"))
  Tributar(edad,ingresos)