alert("Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o menor de edad, el programa debe validar que solo se puedan ingresar números positivos ")
 
  let edad = parseInt(prompt("Ingrese su edad:"))
  if (edad >= 18 && edad >= 0) {
    alert("usted es mayor de edad")
  }
  if (edad > 18) {
    alert(" Usted es menor de edad")
  
  }
  if (edad < 0) {
    alert("No puede ingresar numeros negativos")
  }
    


  


