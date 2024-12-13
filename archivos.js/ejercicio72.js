alert(`4. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
usuario escriba “salir” que terminará`)



let palabras = [];
let palabra;

do {
  palabra = prompt("Ingrese palabras, para terminar ingrese 'salir':");
  if (palabra != "salir") {
    palabras.push(palabra);
  }
} while (palabra !== "salir");

alert(`Las palabras ingresadas fueron: ${palabras.join(", ")}`)