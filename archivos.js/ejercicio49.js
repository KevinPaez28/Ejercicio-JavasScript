alert(`49.Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
positivos: área triangulo= lado * lado`)

function Area(lado1 ,lado2){
  if (lado1 >= 0 && lado2 >= 0) {
    let area = lado1 * lado2;
    alert(`El area del rectangulo es de ${area}`)
  } else {
    alert("Ingresaste un numero negativo")
  }
}
let lado1 = parseInt(prompt("Ingrese el valor de lado 1:"))
let lado2 = parseInt(prompt("Ingrese el valor de lado 2:"))
Area(lado1 ,lado2)

