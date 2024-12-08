alert("Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa que ingresando el costo de los medicamentos calcule el descuento y el precio final.")

function Drogueria(precio) {
  let descuento = precio * 0.1;
  let total =  precio - descuento;

  alert(`El descuento es de: ${total}`)
}
let precio = parseInt(prompt("Ingrese el valor del medicamento:"))
Drogueria(precio);