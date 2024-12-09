alert(`Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
solución, por favor utilizar funciones matemáticas para ello.:
a. rc((x2-x1)^2 + (y2-y1)^2).
`)

function Distancia(x1, x2, y1, y2) {
  let distancias = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2 )
  alert(`La distancias entres los puntos son ${distancias}`);
}
let x1 = parseInt(prompt("Ingrese el valor de x1"))
let x2 = parseInt(prompt("Ingrese el valor de x2"))
let y1 = parseInt(prompt("Ingrese el valor de y1"))
let y2 = parseInt(prompt("Ingrese el valor de y2"))
Distancia(x1, x2, y1, y2);