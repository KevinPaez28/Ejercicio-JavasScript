alert(` Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
constante el valor de una moneda.`)

function Conversion(pesos) {
  const euro = 4658;
  const dolar = 4413;

  let conversiondolar =  pesos * euro;
  let conversioneuro =  pesos * dolar;

  alert(`La conversion de los pesos a dolar es de ${conversiondolar}`)
  alert(`La conversion de los pesos a euro es de ${conversioneuro}`)
} 
let pesos = parseInt(prompt("Ingrese la cantidad de dinero a convertir:"))
Conversion(pesos)