// Crear un programa que solicite al usuario 5 números y realice los cálculos que se
// piden a continuación.
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

// Ejercicio 5
// Pedir al usuario que escriba 5 numeros 
// se depuro para que fuera en un ciclo

var valor = []
var suma = 0
var f = 0
var i = 0

for( i = 1; i<6; i++){
    valor[i] = prompt("Ingrese valor " + i)
    if (isNaN(valor[i])){
        do {
            valor[i] = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
        }while (isNaN(valor[i]));
    }
}

f=i-1

/*
var valor1 = prompt("Ingrese primer valor")
if (isNaN(valor1)){
    do {
    var valor1 = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
} while (isNaN(valor1));
}

var valor2 = prompt("Ingrese segundo valor")
if (isNaN(valor2)){
    do {
    var valor2 = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
} while (isNaN(valor2));
}

var valor3 = prompt("Ingrese tercer valor")
if (isNaN(valor3)){
    do {
    var valor3 = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
} while (isNaN(valor3));
}

var valor4 = prompt("Ingrese cuarto valor")
if (isNaN(valor4)){
    do {
    var valor4 = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
} while (isNaN(valor4));
}

var valor5 = prompt("Ingrese quinto valor")
if (isNaN(valor5)){
    do {
    var valor5 = Number (prompt ("No es un numero, vuelve a introducir el primer valor"));
} while (isNaN(valor5));
}

*/

// se hace la suma y se saca el promedio correspondiente


//var suma = valor[1] + valor2 + valor3 + valor4 + valor5
i=1
var valores=""
do{
//    alert(i,valor[i])
    suma=suma+parseFloat(valor[i])
    valores = valores + valor[i] + "," + " "
    i=i+1
}while(i<=f)

var promedio = suma/5
//<h2>Números Ingresados: ${valor1}, ${valor2}, ${valor3}, ${valor4} y ${valor5} </h2>

 // Imprimir Resultados
 document.write(`
 <div style="margin: 40px;">
 <h2>Resultados Ejercicio 5</h2>
 <h2>Números Ingresados: ${valores} </h2>
 <h3>Suma total de números: ${suma}</h3>
 <h3>Promedio números: ${promedio}</h3>
 </div>`)
