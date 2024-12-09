alert(`4. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
en segundos.`)

function LLenado(altura,radio){
  
  let volumen = Math.PI * (radio ** 2) * altura
  let caudal = parseInt(prompt("Ingrese el caudal del deposito"))
  let tiempo = volumen / caudal;

  alert(`Un deposito con un volumen de ${volumen} tarda en llenarse ${tiempo}`)
}
let altura = parseInt(prompt("Ingrese la altura del deposito"))
let radio = parseInt(prompt("Ingrese la altura del deposito"))
LLenado(altura,radio)