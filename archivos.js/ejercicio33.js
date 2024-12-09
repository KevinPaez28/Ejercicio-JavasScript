alert("Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.")

function Edad(madre, hijo) {
  let calculo = madre - hijo; 
  alert(`La edad de la madre al momento de dar a luz es de ${calculo}`)
}
let madre = parseInt(prompt("Ingrese la edad de la madre"))
let hijo = parseInt(prompt("Ingrese la edad del hijo"))
Edad(madre, hijo)