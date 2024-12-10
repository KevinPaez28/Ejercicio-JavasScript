function determinarSignoPorMes(mes) {
  mes = mes.toLowerCase();

  if (mes === "enero") {
    alert("Capricornio (1-19) o Acuario (20-31)");
  } else if (mes === "febrero") {
    alert("Acuario (1-18) o Piscis (19-28/29)");
  } else if (mes === "marzo") {
    alert("Piscis (1-20) o Aries (21-31)");
  } else if (mes === "abril") {
    alert("Aries (1-19) o Tauro (20-30)");
  } else if (mes === "mayo") {
    alert("Tauro (1-20) o Géminis (21-31)");
  } else if (mes === "junio") {
    alert("Géminis (1-20) o Cáncer (21-30)");
  } else if (mes === "julio") {
    alert("Cáncer (1-22) o Leo (23-31)");
  } else if (mes === "agosto") {
    alert("Leo (1-22) o Virgo (23-31)");
  } else if (mes === "septiembre") {
    alert("Virgo (1-22) o Libra (23-30)");
  } else if (mes === "octubre") {
    alert("Libra (1-22) o Escorpio (23-31)");
  } else if (mes === "noviembre") {
    alert("Escorpio (1-21) o Sagitario (22-30)");
  } else if (mes === "diciembre") {
    alert("Sagitario (1-21) o Capricornio (22-31)");
  } else {
    alert("Mes ingresado no válido. Por favor, ingresa un nombre de mes válido.");
  }
}

let mesIngresado = prompt("Ingresa el nombre del mes:");
determinarSignoPorMes(mesIngresado);
