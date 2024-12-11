 alert(`Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
dura la inversión`)

function Inversion(inversion,interes_anual,años) {
  let ganancias = (inversion * interes_anual) / 100;
  let total = (inversion + ganancias) * años;

  alert(`El total de las ganancias con una inversion de ${inversion} en un total de ${años} años con ${interes_anual} de interes anual da una ganancias de ${total}: `)
}
let inversion = parseInt(prompt("Ingrese la inversion"))
let interes_anual = parseInt(prompt("Ingrese los intereses anuales"))
let años = parseInt(prompt("Ingrese la cantidad de años que dura la inversion"))
Inversion(inversion,interes_anual,años)