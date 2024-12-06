alert("17. Escribir un programa que calcule el volumen de una esfera.")

function Volumen(radio) {
  
  let volumen = 4/3 * Math.PI * Math.pow(radio, 3)

  alert(`El volumen de la esfera es de ${volumen}`)
}

let radio = parseInt(prompt("Ingrese el radio de la esfera"))
Volumen(radio);
