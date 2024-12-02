function Precio(edad) {
    if (edad < 4) {
      alert("Su hijo no paga entrada")
    }
    if (edad > 4 && edad < 18) {
      alert("Su hijo paga 5€ de entrada")
    }
    if (edad >= 18) {
      alert("Su hijo debe pagar 10€")
    }
  }
  let edad = parseInt(prompt("Ingrese su edad:"))
  Precio(edad);