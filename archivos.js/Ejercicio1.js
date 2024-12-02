alert("En este archivo estan los ejercicios del 1 al 10;");
let ejercicio = parseInt(prompt("Que ejercicio desea ejecutar?:"));

if (ejercicio == 1) {
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
    
}


  


