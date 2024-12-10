alert(`Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
de cursos es mayor que 6 el pago será únicamente de $1.200.000.`)

function Curso(curso) {
  
  if (curso <= 6) {
    
    let pago= curso* 2000000
    alert(`EL pago es de ${pago}`)
  }
  
  if (curso > 6) {
   let pagos= curso * 1200000
    alert(`El pago es de:${pagos}`)
  }
}
let curso = float(input("Ingrese los curso:"))
Curso(curso)