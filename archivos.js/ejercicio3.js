alert("Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si el divisor es cero el programa debe mostrar un error, se debe manejar mediante excepciones y el mensaje debe se personalizado")

function Division(divisor, dividendo) {
    try{
    if (divisor == 0) {
      alert("No se puede dividir entre cero")
      throw new exception();
      }
    let division = dividendo / divisor
    alert(`La division entre ${dividendo} y ${divisor} es ${division}`)

    } catch (error) {
     alert(error);
    } 
  }
  dividendo = parseInt(prompt("Ingrese el numero que se va a dividir"))
  divisor = parseInt(prompt("Ingrese el numero por el cual va a dividir"))

  Division(divisor , dividendo)