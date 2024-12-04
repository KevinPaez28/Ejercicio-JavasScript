alert("Escribir un programa que lea 4 números y calcule la media")

function media(numr1, numr2, numr3, numr4) {
  
  let media = (numr1 + numr2 + numr3 + numr4) / 4
  
  alert(`la media de los numeros agregados fueron ${media}`)

}

let numr1 = parseInt(prompt("Ingrese el numero 1")) 
let numr2 = parseInt(prompt("Ingrese el numero 2")) 
let numr3 = parseInt(prompt("Ingrese el numero 3")) 
let numr4 = parseInt(prompt("Ingrese el numero 4")) 

media(numr1, numr2, numr3, numr4);