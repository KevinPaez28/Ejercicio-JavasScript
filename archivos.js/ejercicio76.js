alert(`Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
en la consola.`)

function contarSilabas(frase) {
    const palabras = frase.split(' ');
    const regex = /[aeiouáéíóú]/gi;

    palabras.forEach(palabra => {
        const silabas = palabra.match(regex);
        console.log(`La palabra "${palabra}" tiene ${silabas ? silabas.length : 0} sílabas.`);
    });
}

const frase = "Crea una función para calcular cuantas silabas tiene cada palabra";
contarSilabas(frase);