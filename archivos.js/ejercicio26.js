alert("26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.")

function Conversion(centigrados) {
  let formula = (centigrados * 9 / 5) + 32;

  alert(`Los grados centigrados convertidos a Fahrenheit son ${formula}`)
}
let centigrados = parseInt(prompt("Ingrese los grados centigrados"))
Conversion(centigrados)