alert(`3. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad)`)   

function Edad(edad) {
  for (let i = 1; i <= edad; i++){
    alert(`Los años que has cumplido son ${i}`)
  }
}
let edad = parseInt(prompt("Ingrese su edad:"))
Edad(edad)