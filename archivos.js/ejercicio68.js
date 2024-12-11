alert(`68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.`)
let nmr = parseInt(prompt("Ingrese un numero para ver su tabla:"));
let multp;
for (let i = 1; i <= 10; i++){
  multp = nmr * i;
  console.log(`El numero ${nmr} multiplicado por ${i} da como resultado ${multp}`)
}