alert("Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito")

function Contraseña(contrasena) {
  errores = [];

  let regexp = /^(?=.*[a-z]){8,}$/
  if (regexp.test(contrasena)) {
    errores.push("No contiene minusculas")
  }
  alert(errores)
}
let contrasena = prompt("Ingrese una contraseña para validar su fortaleza:")
Contraseña(contrasena)