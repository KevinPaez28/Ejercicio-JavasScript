alert("18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b")

function Expresion(a,b,c) {
  let expresion = (a + 7 * c) / (b + 2 - a) + 2 * b
  
  alert(`El resultado de la expresion es de:${expresion}`)
}

let a =parseInt(prompt("Ingrese el valor de a"))
let b =parseInt(prompt("Ingrese el valor de a"))
let c = parseInt(prompt("Ingrese el valor de a"))


Expresion(a,b,c)