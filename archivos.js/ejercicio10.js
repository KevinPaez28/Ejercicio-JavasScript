alert("La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.a.Ingredientes vegetarianos: Pimiento y tofu. b.Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija.Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están en todas las pizzas.Al final se debe mostrar por pantalla si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.")

function Sabor(sabor) {
  let ingredientes = ["Mozzarella", "tomate"];
  
  if (sabor == "vegetariana") {
    let sabores = (prompt(`Ingredientes disponibles
      1.Pimiento
      2.Tofu`))
    if (sabores == "1") {
      ingredientes.push("Pimiento")
    }
    if (sabores == "2") {
      ingredientes.push("tofu")
    }
    for (i in ingredientes) {
      { ingredientes[i] }
    }
    alert(`Los ingredientes de su pizza son ${ingredientes}`)
  }
  if (sabor == "no vegetariana") {
   let sabores = (prompt(`Ingredientes disponibles
      1.Peperoni
      2.Salmon
      3.Jamon`))
    if (sabores == "1") {
      ingredientes.push("Peperoni")
    }
    if (sabores == "2") {
      ingredientes.push("Salmon")
    }
    if (sabores == "3") {
      ingredientes.push("Jamon")
    }
    for (i in ingredientes) {
      { ingredientes[i] }
    }
    alert(`Los ingredientes de su pizza son ${ingredientes}`)
  }
 }
  
let sabor = prompt(`a.Ingredientes vegetarianos: Pimiento y tofu.
    b.Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón
Que ingredientes desea que lleve su pizza?
(Vegetariana || No Vegetariana)` ).toLowerCase();
Sabor(sabor); 
  