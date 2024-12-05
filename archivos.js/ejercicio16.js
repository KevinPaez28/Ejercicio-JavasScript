alert(" Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5 minutos, exprese el resultado en metros/segundo")

function Proyectil(distancia , tiempo) {
  let kilometros_metros = distancia * 1000  //Multiplicamos la distancia por 1000 metros para convetir a metros
  let tiempo_segundos = tiempo * 60  // Multiplicamos el tiempo por 60s para convetir a segundos
  alert(`los kilometros convertidos a metros son: ${kilometros_metros} metros`)
  alert(`los minutos convertidos a segundos son: ${tiempo_segundos} segundos`)
  let velocidad = kilometros_metros / tiempo_segundos;

  alert(`La velocidad del proyectil expresada en metros segundos es de ${velocidad} m/s`)

}
distancia = 2;
tiempo = 5;
Proyectil(distancia, tiempo);