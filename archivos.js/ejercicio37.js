alert(`Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
Kg transporta?`)

function Carga(peso, cajas) {
  let cargamento = peso * cajas; 
  alert(`El cargamento pesa ${cargamento}kg`)
}
let peso = 748;
let cajas = 25;
Carga(peso, cajas);