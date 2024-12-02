function Division(divisor,dividendo) {
    try{
    if (divisor == 0) {
      alert("No se puede dividir entre cero")
      return
      }
    let division = dividendo / divisor
    alert(`La division entre ${dividendo} y ${divisor} es ${division}`)

    } catch (error) {
     alert("Ocurrió un error:" + error.message);
    } 
  }
  dividendo = parseInt(prompt("Ingrese el numero que se va a dividir"))
  divisor = parseInt(prompt("Ingrese el numero por el cual va a dividir"))

  Division(divisor , dividendo)