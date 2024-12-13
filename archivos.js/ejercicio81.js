alert(`• Genera un patrón de asteriscos en forma de pirámide.`)
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