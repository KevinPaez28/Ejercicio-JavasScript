alert("Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 pesos y un IVA 20%.")

function Llamada(minutos) {

  let calculo = minutos * 355;
  let IVA = calculo * 0.2;
  let total = calculo + IVA

  alert(`El costo de la llamada es de: ${calculo}`)
  alert(`El costo de la llamada mas el iva es de: ${total}`)
  
}
let minutos = parseInt(prompt("Ingrese cuando minutos hablaron en llamadas:"));
Llamada(minutos);