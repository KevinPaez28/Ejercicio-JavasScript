alert("escribir un programa que almacene la cadena de caracteres contraseña de una variable,pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducidapor el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos. ")

let contrasena = prompt("Ingrese una contraseña a guardar");
  let adivinarcontra = prompt("Ingrese la contraseña para auntenticar");
  if (contrasena == adivinarcontra) {
    alert("Bienvenido Ingresaste la clave correcta")
  } else {
    alert("Contraseña incorrecta")
  }