alert(`Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.`)


function Banco(sueldo) {
  if (sueldo <= 1000000) {
    let interes = (sueldo * 3) / 100;
    let total = sueldo - interes; 
    alert(`Los interes pagados son ${interes} y el sueldo final queda en ${total}`)
  }
  if (sueldo > 1000000) {
    let intere = (sueldo * 4) / 100;
    let totalidad = sueldo - intere; 
    alert(`Los interes pagados son ${intere} y el sueldo final queda en ${totalidad}`)
  }
}
let sueldo = parseInt(prompt("Ingrese su sueldo por favor"))
Banco(sueldo)