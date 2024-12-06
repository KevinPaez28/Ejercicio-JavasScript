alert("Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.")

function Velocidad_ms(velocidad , tiempo){
 
  velocidad_m = velocidad * 1000;
  tiempo_s = tiempo * 60;

  alert(`La velocidad expresada en metros es de ${velocidad_m}`)
  alert(`El tiempo expresado en segundo es de ${tiempo_s}`)
}
velocidad = parseInt(prompt("Ingrese la velocidad del carro en Km: "))
tiempo = parseInt(prompt("Ingrese el tiempo que demoro el carro: "))
Velocidad_ms(velocidad, tiempo)