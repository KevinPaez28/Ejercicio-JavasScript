alert("19. Escribir un programa que calcule el área y el volumen de un cilindro.")

function Volumen_Area(radio,altura){
  
  let area_rectangulo = 2 * Math.PI * radio * altura; 
  let area_base = 2 * Math.PI * Math.pow(radio, 2); // 2 calculan 2 bases

  let volumen = Math.PI * Math.pow(radio, 2) * altura;

alert(`El area del rectangulo es de: ${area_rectangulo}`)
alert(`El area total de las 2 bases y el cilindro es de ${area_base}`)
alert(`El volumen del cilindro es de ${volumen}`)


}
let radio = parseInt(prompt("Ingrese el radio del cilindro"))
let altura = parseInt(prompt("Ingrese la altura del cilindro"))

Volumen_Area(radio, altura);