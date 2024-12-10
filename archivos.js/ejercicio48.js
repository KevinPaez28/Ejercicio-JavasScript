alert(`Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio* radio`)
function Area(figura) {

  if (figura == "T") {
    let Base =prompt("Agregue el valor de la Base:")
    let Altura = prompt("Agregue el valor de la altura:")
    let triangulo = Base * Altura / 2
    alert(`El area del Triangulo es ${triangulo} `)
  }
  if (figura == "C") {
    radio = prompt("Agregue el radio del circulo:")
    circulo = 3.1416 * radio ** 2
    alert(`El area del Circulo es${circulo}`)
  }
  
}
let figura = prompt("Elija la figura que quiera calcular T/C:")
Area(figura);
