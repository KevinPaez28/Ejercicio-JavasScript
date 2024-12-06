alert("21. Escribir un programa que calcule el volumen de un elipsoide.")

function Area_elipsoide(a,b,c) {
  let area = 4 / 3 * Math.PI * a * b * c;
  alert(`El area del elipsoide es de ${area}`);
}
let a=parseInt(prompt("Ingrese el valor de a"))
let b=parseInt(prompt("Ingrese el valor de b"))
let c = parseInt(prompt("Ingrese el valor de c"))
Area_elipsoide(a, b, c);