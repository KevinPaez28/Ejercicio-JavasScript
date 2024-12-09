alert("Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.")

function Promedio(nota1 , nota2 , nota3, nota4 ) {
  if (nota1 >= 1 && nota1 <= 5 && nota2 >= 1 && nota2 <= 5 && nota3 >= 1 && nota3 <= 5 && nota4 >= 1 && nota4 <= 5) {
    promedio = (nota1 + nota2 + nota3 + nota4) / 4;

    alert(`El promedio de los examenes: ${promedio}`)
  } else {
    alert("Ingresaste un numero menor a 0 o mayor a 5")
  }

}
let nota1 = parseInt(prompt("Ingrese Su nota 1"))
let nota2 = parseInt(prompt("Ingrese Su nota 2"))
let nota3 = parseInt(prompt("Ingrese Su nota 3"))
let nota4 = parseInt(prompt("Ingrese Su nota 4"))
Promedio(nota1 , nota2 , nota3, nota4 )