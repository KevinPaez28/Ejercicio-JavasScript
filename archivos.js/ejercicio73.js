alert(`Crea una función que reciba dos números como parámetros y devuelva el mayor de
ellos.`)

function Mayor(a, b) {
  if (a > b) {
    alert("el numero mayor es el primer numero ingresado")
  }
  if (b > a) {
    alert("el numero mayor es el segundo numero ingresado")
  }
}
let a = parseInt(prompt("Ingrese un numero"))
let b = parseInt(prompt("Ingrese un numero"))
Mayor(a, b);