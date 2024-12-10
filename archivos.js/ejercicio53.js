alert(`Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
de: Iva, Subtotal y Total de la compra de los artículos`)

function Compra(producto1,producto2,producto3,producto4,producto5 , valor) {
  
  if (valor == "subtotal") {
    
    let subtotal = producto1 + producto2 + producto3 + producto4 + producto5
    alert(`El Valor subtotal de la compra es: ${subtotal}`)
    
  }
  
  if (valor == "iva") {
    let IVA = parseInt(prompt("Agregue el IVA de la compra:"))
    let des_IVA = IVA / 100
    let IVA_total = (producto1 + producto2 + producto3 + producto4 + producto5) * des_IVA
    alert(`El Valor del IVA es de: ${IVA_total}`)
  }
  
  if (valor == "total") {
    
    let total_IVA = (producto1 + producto2 + producto3 + producto4 + producto5) + IVA_total
    alert(`El Total de la compra es de: ${total_IVA}`)
    
  }
  if (valor == "Total de la compra") {
    
    alert("El Valor subtotal de la compra es:", subtotal)
    alert("El Valor del IVA es de:", IVA_total)
    alert("El Total de la compra es de:", total_IVA)
  }
}
producto1=parseInt(prompt("Agregue el costo del producto 1:"))
producto2=parseInt(prompt("Agregue el costo del producto 2:"))
producto3=parseInt(prompt("Agregue el costo del producto 3:"))
producto4=parseInt(prompt("Agregue el costo del producto 4:"))
producto5 =parseInt(prompt("Agregue el costo del producto 5:"))
alert(`Subtotal
IVA
Total
(Total de la compra`)
valor = prompt("Que valor de la compra desea saber:")

Compra(producto1,producto2,producto3,producto4,producto5 , valor)