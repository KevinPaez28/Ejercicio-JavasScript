alert(`Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
monto total de la venta, según la cantidad de artículos solicitados durante el día.`)

function Totalidad(libros,cuadernos,lapiceros) {
  let totalLibros = libros * 10000;
  let totalcuadernos = cuadernos * 7550;
  let totallapiceros = lapiceros * 5550;

  alert(`El total de ${libros} libros equivale a ${totalLibros}`)
  alert(`El total de ${cuadernos} cuadernos equivale a ${totalcuadernos}`)
  alert(`El total de ${lapiceros} lapiceros equivale a ${totallapiceros}`)

}
alert("Los libros tienen un precio de 10.000")
let libros = parseInt(prompt("Ingrese la cantidad de libros que desea llevar"))
alert("Los cuadernos tiene un valor de 7.550")
let cuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos que desea llevar"))
alert("los lapiceros tienen un valor de 5.550")
let lapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros que desea llevar"))
Totalidad(libros, cuadernos, lapiceros);