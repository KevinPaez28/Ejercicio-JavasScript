alert("46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.")

function Mayor(numr1, numr2 ,numr3) {
  
  if (numr1 > numr2 && numr1 > numr3) {
    alert("El numero mayor es el primer numero ingresado") 
  }
  if (numr2 > numr1 && numr2 > numr3) {
     alert("El numero mayor es el segundo numero ingresado")
  }
  if (numr3 > numr1 && numr3 > numr2) {
        alert("El numero mayor es el tecer numero ingresado")
      }
  

}
let numr1 = parseInt(prompt("Ingrese el valor de nmr1"))
let numr2  = parseInt(prompt("Ingrese el valor de nmr2"))
let numr3 = parseInt(prompt("Ingrese el valor de nmr3"))
Mayor(numr1, numr2 ,numr3) 