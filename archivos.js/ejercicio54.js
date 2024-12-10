alert(`Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
segundo, en caso contrario indicar con un mensaje que la operación no es posible
realizarla.
`)  

function Resta(primer_numero , segundo_numero) {
  
  if (primer_numero >= segundo_numero){
    let resta=primer_numero - segundo_numero
    alert(`EL resultado es de:${resta}`)
    
  } else {
    alert("NO es posible hacer la operacion..el primer numero tiene que ser menor")
  }
  
}
primer_numero=parseInt(prompt("Digite el un numero:"))
segundo_numero=parseInt(prompt("Digite otro numero:"))
Resta(primer_numero , segundo_numero)
