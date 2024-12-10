alert(`Una empresa que contrata personal requiere determinar la edad de las personas que
solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
nacieron. Realice el código que representen el algoritmo para solucionar este problema.`)

function Nacimiento(nacimiento, año_actual) {
  
  let calcular =  año_actual - nacimiento;
  alert(`la edad que tiene el trabajador es de ${calcular}`)
}
let nacimiento = parseInt(prompt("Ingrese la fecha de nacimiento del empleado"))
let año_actual = parseInt(prompt("Ingrese la fecha del año actual"))
Nacimiento(nacimiento, año_actual)