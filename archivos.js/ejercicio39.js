alert(`Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
Considere que se cobra por m2 y realice el código que representen el algoritmo que le
permita ir generando presupuestos para cada cliente.`)

function Pintura(cantidad_metros) {
  let calculo = cantidad_metros * 12000;
  alert(`El valor de ${cantidad_metros} equivale ${calculo}`)
}
let cantidad_metros = parseInt(prompt("Ingrese la cantidad de clientes:"))
alert("El m2 equivale a 12000")
Pintura(cantidad_metros);