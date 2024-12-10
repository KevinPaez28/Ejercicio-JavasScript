alert(`Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60`)

function procesarNotas() {
  let notas = [];
  let notaAlta = 0;
  let notaBaja = 100;
  let cantidadMaxima = 0;
  let rangoA = 0;
  let rangoB = 0;
  let rangoC = 0;
  let rangoD = 0;

  let cantidad = parseInt(prompt("¿Cuántas notas deseas ingresar?"));
  for (let i = 0; i < cantidad; i++) {
    let nota = parseInt(prompt(`Ingresa la nota ${i + 1} (entre 1 y 100):`));

    if (nota >= 1 && nota <= 100) {
      notas.push(nota);

      if (nota > notaAlta) {
        notaAlta = nota;
      }

      if (nota < notaBaja) {
        notaBaja = nota;
      }

      if (nota === 100) {
        cantidadMaxima++;
      } else if (nota >= 90) {
        rangoA++;
      } else if (nota >= 80) {
        rangoB++;
      } else if (nota >= 70) {
        rangoC++;
      } else if (nota >= 60) {
        rangoD++;
      }
    } else {
      alert("Nota inválida, intenta de nuevo.");
      i--; // Volver a pedir la misma iteración
    }
  }

  alert(`Nota más alta: ${notaAlta}`);
  alert(`Nota más baja: ${notaBaja}`);
  alert(`Cantidad de alumnos con nota máxima (100): ${cantidadMaxima}`);
  alert(`Rango 'a' (90-99): ${rangoA}`);
  alert(`Rango 'b' (80-89): ${rangoB}`);
  alert(`Rango 'c' (70-79): ${rangoC}`);
  alert(`Rango 'd' (60-69): ${rangoD}`);
}

procesarNotas();