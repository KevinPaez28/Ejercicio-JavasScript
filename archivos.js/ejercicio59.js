alert(`En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.`)

function Equipo(edad, peso, altura) {
  if (peso >= 75 && peso <= 80 && edad <= 19 && altura > 1.75) {
    alert("Felicidades...entras a la seleccion")

  } else {
    alert("Lo siento... no estas apto para la seleccion")
  }
}
edad=parseInt(prompt("Agregue su edad:"))
peso=parseInt(prompt("agregue su Peso:"))
altura=parseInt(prompt("Aguregue su Altura:"))
Equipo(edad, peso , altura)