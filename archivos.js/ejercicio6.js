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