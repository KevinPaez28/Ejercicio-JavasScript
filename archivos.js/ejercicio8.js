function Sueldo(puntos) {
    if (puntos == "0.0") {
      alert("Su puntuacion es inaceptable y su sueldo es de 2.400€")
    }
    if (puntos == "0.4") {
      alert("Su puntuacion es Aceptable y su sueldo es de 4.800€")
    }
    if (puntos == "0.6") {
      alert("Su puntuacion es Meritorio y su suelo es de 7.200€")
    }
  }
  let puntos = prompt("Ingrese su puntuacion (0.0 , 0.4 , 0,6)");
  Sueldo(puntos);