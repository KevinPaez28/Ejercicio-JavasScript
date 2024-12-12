alert(`Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
por pantalla el número de veces que aparece la letra en la frase.`)

const frase = prompt("Por favor, ingresa una frase:");
const letra = prompt("Ingresa la letra que deseas buscar en la frase:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
    }
}

alert(`La letra '${letra}' aparece ${contador} veces en la frase.`);
