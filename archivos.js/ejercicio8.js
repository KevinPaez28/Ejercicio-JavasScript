alert("En una determinada empresa, sus empleados son evaluados al final de cada año. Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando, traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas. A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación. a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la puntuación del nivel. b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento, así como la cantidad de dinero que recibirá el usuario.")

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
  
