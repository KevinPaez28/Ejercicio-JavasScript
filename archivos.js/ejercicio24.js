alert("Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -2.3e-1, -3e2, 23, 3.2).")

const regex = /^[0-9]+([.][0-9]+)$/;

function Expresion_Regular(nmr) {
  
  if (regex.test(nmr)) {
    alert("Los numeros ingresados son flotantes")
  } else {
    alert("Los numeros ingresados no son flotantes")
  }

}
let nmr = parseFloat(prompt("Ingrese el numero para verificar si es numero flotante o no:"))

Expresion_Regular(nmr)