alert(`En una tienda de HELADO da un descuento por compra a sus clientes con membresía
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
20% de descuento.`)

function Descuentos(compra , membresia) {
  if (membresia == "tipo a") {
    let descuento = (compra * 10) / 100;
    let totalA = compra - descuento
    alert(`El descuento fue de ${descuento} y el total de la cuenta fue de ${totalA}`)
  }
  if (membresia == "tipo b") {
    let descuentob = (compra * 15) / 100;
    let totalb = compra - descuentob
     alert(`El descuento fue de ${descuentob} y el total de la cuenta fue de ${totalb}`)
  }
  if (membresia == "tipo c") {
    let descuentoc = (compra * 20) / 100;
    let totalc = compra - descuentoc
     alert(`El descuento fue de ${descuentoc} y el total de la cuenta fue de ${totalc}`)
  }
}
let compra = parseInt(prompt("Ingrese el valor de la compra"))
let membresia = prompt("Ingrese a que membresia pertenece tipo a / tipo b / tipo c")
Descuentos(compra , membresia)
