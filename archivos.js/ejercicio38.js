alert(`Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
parte le corresponde a Lorena?`)

function Repartir(Martin,jairo,total) {
  let part_lore = total - (Martin + jairo);
  alert(part_lore)
}
let Martin = 2 / 3;
let jairo = 1 / 4;
let total = 1;

Repartir(Martin, jairo, total);
