alert("los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde")

function Grupos(nombre, sexo) {
    if (nombre[0] >= "n" && sexo == "hombre" || nombre[0] <= "m" && sexo == "mujer" ) {
      alert("Perteneces al grupo A")
    } else {
      alert("perteneces al grupo B")
    }
  }
  let nombre = prompt("Ingrese su nombre")
  let sexo = prompt("Ingrese su sexo (hombre o mujer)")
  Grupos(nombre, sexo);