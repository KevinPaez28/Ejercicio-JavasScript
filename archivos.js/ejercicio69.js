alert(`Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
número primo o no.`)
let numero = 2; 
let cantidadprimos = 0; 
let contador = 0; 

while (cantidadprimos <= 10) {
  for (let a = 0; a <= numero; a++){
    if (numero % a == 0) {
      contador++;
     }
  } 
  
  if (contador <= 2) {
    console.log(numero)
    cantidadprimos++;
  }

  numero++
  contador = 0;
}