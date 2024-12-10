alert(`En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
horas trabajadas.`)


function Trabajada(trabajador , horas) {
  if (trabajador == "planta") {
    let total = horas * 20000; 
    alert(`El total de las horas trabajadas es de ${horas} y tienen un costo de ${total}`)
  }
  if (trabajador == "administrativa") {
    let totalad = horas * 10000; 
    alert(`El total de las horas trabajadas es de ${horas} y tienen un costo de ${totalad}`)
  }
}
let trabajador = prompt("Ingrese a que area pertenece? administrativa/planta")
let horas = parseInt(prompt("Ingrese las horas trabajadas"))
Trabajada(trabajador , horas)