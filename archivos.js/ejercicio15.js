alert("15. Escribir un programa que calcule la longitud y el área de una circunferencia.")


function Area_longitud(longitud,radio){

  let formula_longitud= 2 * Math.PI * radio; 
  let formu_area = Math.PI * 5 * Math.pow(radio, 2);

  alert(`La longitud de la circunferencia es: ${formula_longitud}`);
  alert(`El área de la circunferencia es: ${formu_area}`);


}
let longitud = parseInt(prompt("Ingrese la longitud"))
let radio = parseInt(prompt("Ingrese el radio "))

Area_longitud(longitud, radio);
