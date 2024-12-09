alert(`32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
producto y el total de la compra.`)


function Descuento(producto1, producto2, producto3, producto4,producto5){
  
  let porcentajepro1 = (producto1 * 5) / 100;
  let descuentopro1 = producto1 - porcentajepro1
  let porcentajepro2 = (producto2 * 5) / 100;
  let descuentopro2 = producto1 - porcentajepro2
  let porcentajepro4 = (producto4 * 2) / 100;
  let descuentopro4 = producto4 - porcentajepro4
  let porcentajepro5 = (producto4 * 2) / 100;
  let descuentopro5 = producto5 - porcentajepro5

  let total = descuentopro1 + descuentopro2 + descuentopro4 + descuentopro5 + producto3;

  alert(`El descuento del producto 1 es de ${porcentajepro1} y queda costando ${descuentopro1}`)
  alert(`El descuento del producto 2 es de ${porcentajepro2} y queda costando ${descuentopro2}`)
  alert(`El descuento del producto 3 es de ${porcentajepro4} y queda costando ${descuentopro4}`)
  alert(`El descuento del producto 4 es de ${porcentajepro5} y queda costando ${descuentopro5}`)
    alert(`El total de la compra es de ${total}`)

}
let producto1 = parseInt(prompt("Ingrese el valor del producto 1"))
let producto2 = parseInt(prompt("Ingrese el valor del producto 2"))
let producto3 = parseInt(prompt("Ingrese el valor del producto 3"))
let producto4 = parseInt(prompt("Ingrese el valor del producto 4"))
let producto5 = parseInt(prompt("Ingrese el valor del producto 5"))
Descuento(producto1, producto2, producto3, producto4, producto5);