alert(`27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final.`)

function Promedio(parcial1,parcial2,parcial3,examen_final,trabajo_final) {

  let promedio = (parcial1 + parcial2 + parcial3) / 3;
  let porcenparcial = (promedio * 55) / 100;
  let porcenexamen = (examen_final * 30) / 100;
  let porcen_final = (trabajo_final * 15) / 100;
  let promfinal = porcenparcial + porcenexamen + porcen_final;
  alert(`El promedio final de la materia es de ${promfinal  }` )


}
let parcial1 = parseInt(prompt("Ingrese la nota del parcial 1:"))
let parcial2 = parseInt(prompt("Ingrese la nota del parcial 2:"))
let parcial3 = parseInt(prompt("Ingrese la nota del parcial 3:"))
let examen_final = parseInt(prompt("Ingrese la nota del examen final:"))
let trabajo_final = parseInt(prompt("Ingrese la nota del trabajo final:"))
Promedio(parcial1,parcial2,parcial3,examen_final,trabajo_final)