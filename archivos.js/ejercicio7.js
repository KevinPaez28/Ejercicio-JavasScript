function Renta(renta) {
    if (renta > 10000 && renta <= 20000) {
      alert("El impositivo que le corresponde es del 5%")
    }
    if (renta > 20000 && renta <= 35000 ) {
      alert("El impositivo que le corresponde es del 10%")
    }
    if (renta > 35000 && renta <= 60000) {
      alert("El impositivo que le corresponde es del 20%")
    }
    if (renta > 60000 ) {
      alert("El impositivo que le corresponde es del 45%")
    }
  }
  let renta =parseInt(prompt("Ingrese su renta anual"))
  Renta(renta);