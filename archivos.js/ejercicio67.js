alert(` Escribir un programa que pida al usuario un número entero y muestre por pantalla un
triángulo rectángulo como el de más abajo, de altura el número introducido.`)

function Rectangulo(nmr) {
  let asteriscos = ""
  for (let i = 0; i <= nmr; i++){
    asteriscos += "*";
    console.log(asteriscos)
  }
  alert("verifique consola")
}
let nmr = parseInt(prompt("Ingrese que grande quiere que sea su triangulo"))
Rectangulo(nmr)
