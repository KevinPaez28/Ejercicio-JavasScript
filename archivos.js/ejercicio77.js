  alert(`Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
* 5, nos debe mostrar el resultado para las demás multiplicaciones.`)

    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Omite el ciclo cuando i es igual a 5
        }
        console.log(`5 * ${i} = ${5 * i}`);
    }


