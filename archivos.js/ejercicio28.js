alert(`28. Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
  c.pago en hora.`)

function trabajo(nombre,horas,pago) {
  
  let calculo = horas * pago;
  alert(`El sueldo de ${nombre} es de ${calculo}`)
}
let nombre=prompt("Ingrese su nombre:")
let horas = parseInt(prompt("Ingrese las horas trabajadas"))
let pago = parseInt(prompt("Ingrese cuanto vale cada hora de trabajo:"));
trabajo(nombre, horas, pago);