alert(`Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
los $130.000 el descuento será del 15%, de lo contrario no hay descuento.`)

function Descuento(factura){
  if (factura >= 130000) {
    let descuento = (factura * 15) / 100;
    let totaldes =   factura - descuento
    alert(`El valor de la compra con descuento es de${totaldes}`)
  } else {
    alert(`No cumplio con el valor minimo para aplicar al descuento de la compra`)
  }
}
let factura = parseInt(prompt("Ingrese el valor de la factura:"));
Descuento(factura)
