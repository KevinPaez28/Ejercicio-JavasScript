alert("11. Escribir un programa que sume, resta, multiplique y divida dos números.")

function Calculadora(numr1, numr2) {
  suma = numr1 + numr2;
  multiplicacion = numr1 * numr2;
  resta = numr1 - numr2;
  alert(`El resultado de las operaciones son:
    Suma:${suma}
    Multiplicacion:${multiplicacion}
    Resta:${resta}`)
  
  try {
    
    if (numr2 != 0) { 
      division = numr1 / numr2
      alert(`Division:${division}`)
    }
    else {
      throw "No se puede dividir por 0"
    }
  } catch (error) {
    alert(error)
  }


}
let numr1 = parseInt(prompt("Ingrese el numero 1"))
let numr2 = parseInt(prompt("Ingrese el numero 2"))
Calculadora(numr1 , numr2);