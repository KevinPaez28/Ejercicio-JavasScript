alert(`Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
Después de pagar le sobran $91000. ¿Cuánto dinero tenía?
`)

function Dinero(llaves, bomba, pernos) {
 
  let calculollaves = llaves * 5;
  let calculopernos = pernos * 3;
  let vueltos = 91000;
  total = calculollaves + calculopernos + bomba + vueltos ;

  alert(`El dinero que tenia es de ${total57500 }`)

}
let llaves = 11500;
let bomba = 1168000;
let pernos = 87000;
Dinero(llaves, bomba, pernos);