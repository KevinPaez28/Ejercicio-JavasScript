alert(`Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
frase invertida.`)

function Invertida(palabra) {
  let invertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }
  alert(invertida)
}

let palabra =("Si el codigo funciona, No lo toques !!!")
alert(`La cadena a invertir es de: ${palabra}`)
Invertida(palabra)