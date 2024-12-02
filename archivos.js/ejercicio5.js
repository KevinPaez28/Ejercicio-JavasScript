function Tributar(edad , ingresos){
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