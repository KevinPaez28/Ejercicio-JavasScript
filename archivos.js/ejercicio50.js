alert(`Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
Normal.`)

function Alarma(presion,temperatura) {
  if (presion >= 200 || temperatura >= 100) {
    alert("ALARMA!!!!!!!!!!!!")
  } else {
    alert("Normal")
  }
}
let presion = parseInt(prompt("Ingrese la presion de la maquina"))
 let temperatura = parseInt(prompt("Ingrese la presion de la maquina"))
 Alarma(presion,temperatura) 

