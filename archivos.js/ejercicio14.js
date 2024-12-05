alert("14. Escribir un programa que calcule el área de un triángulo.")

function area(base, altura) {
  let area = (base * altura) / 2;
  
  alert(`El area del rectangulo es de${area}`)
}
let base = parseInt(prompt("Ingrese la base del triangulo"));
let altura = parseInt(prompt("Ingrese la altura del triangulo"));