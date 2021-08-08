// Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
// números, calcular lo siguiente:
// ● Suma
// ● Resta
// ● División
// ● Multiplicación
// ● Módulo

// Ejercicio 1 / Solución

// Se le debe pedir al usuario que ingrese 2 numeros
// definir constantes

// variable para validar

var valid = false;

do{
    var numero1 = prompt("Ingrese Primer Numero Mayor a Cero");
    if (numero1 <=0 || isNaN(numero1)){
        alert("Debe ingresar un Numero Valido");
        }else {
            valid = true;
        }
}
while (!valid)

valid = false

do{
    var numero2 = prompt("Ingrese Segundo Numero Mayor a Cero");
    if (numero2 <=0 || isNaN(numero2)){
        alert("Debe ingresar un Numero Valido");
        }else {
            valid = true;
        }
}
while (!valid)

// Calculos
//suma

var suma = parseInt(numero1)+parseInt(numero2)

//resta

var resta = parseInt(numero1)-parseInt(numero2)

//division

var division = parseInt(numero1)/parseInt(numero2)

//multiplicación

var multiplicacion = parseInt(numero1)*parseInt(numero2)

//modulo

var modulo = parseInt(numero1)%parseInt(numero2)

// Imprimir los resultado
document.write(`
<div style="margin: 40px;">
<h2>Resultados Ejercicio 2</h2>
<h2>Numeros ingresados: N°1 = ${numero1} y N°2 = ${numero2}</h2>
<h3>Suma: ${suma}</h3>
<h3>Resta: ${resta}</h3>
<h3>Multiplicación: ${multiplicacion}</h3>
<h3>División: ${division}</h3>
<h3>Módulo: ${modulo}</h3>
</div>`)
