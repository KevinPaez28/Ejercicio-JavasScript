function verificarParImpar() {
    let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numero = lista(Math.random() * lista.length);
    
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

let resultado = verificarParImpar();
