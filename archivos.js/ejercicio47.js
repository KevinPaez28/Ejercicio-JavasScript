alert(" Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales.")

function Mayor(numr1, numr2, numr3) {
  if (numr1 === numr2 && numr2 === numr3) {
    alert("Los tres números son iguales.");
  } else {
    let mayor = Math.max(numr1, numr2, numr3);
    let menor = Math.min(numr1, numr2, numr3);

    if (mayor === numr1) {
      alert(`El número mayor es el primer número ingresado: ${numr1}`);
    } else if (mayor === numr2) {
      alert(`El número mayor es el segundo número ingresado:${ numr2}`);
    } else {
      alert(`El número mayor es el tercer número ingresado: ${numr3}`);
    }

    if (menor === numr1) {
      alert(`El número menor es el primer número ingresado: ${numr1}`);
    } else if (menor === numr2) {
      alert(`El número menor es el segundo número ingresado: ${numr2}`);
    } else {
      alert(`El número menor es el tercer número ingresado: ${numr3} `);
    }
  }
}
let numr1 = parseInt(prompt("Ingrese el valor de nmr1"))
let numr2  = parseInt(prompt("Ingrese el valor de nmr2"))
let numr3 = parseInt(prompt("Ingrese el valor de nmr3"))
Mayor(numr1, numr2 ,numr3) 