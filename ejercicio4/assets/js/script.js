// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número
// decimal.

// ejercicio 4

// pedir al usuario que ingrese la cantidad de dias que desea calcular
// validando que sea mayor que cero

var valid = false;
//validacionde que ingreso sea mayor a cero
do{
    var dias = prompt("Ingrese Cantidad de Dias Mayor a Cero");
//    const dias = prompt("Ingrese Cantidad de Dias Mayor a Cero");
    if (dias <=0 || isNaN(dias)){
        alert("Debe ingresar un Numero Valido");
        }else {
            valid = true;
        }
}
while (!valid)

// transformar los dias a años, meses y dias
// si dias mayor a 365, se calcula cantidad de dias por año
// de lo contrario de realiza calculo con dias ingresados
if(dias>365){
    var año = Math.floor(dias/365);
}else{
    saldodias=dias
    año=0;
}

if(dias>365){
    var saldodias = dias-365
    var semana = Math.floor(saldodias/7);
}else{
    if(dias>6){
//        saldodias = dias
        var semana = Math.floor(saldodias/7);
    }else{
        semana = 0
    }
}

if(semana>0){
    var dia = saldodias-(semana*7)
}else{
    dia=dias

}
//var dia = 

// Mostrar Resultados

document.write(`
<div style="margin: 40px;">
<h2>Resultados Ejercicio 4</h2>
<h2>Dias Ingresados: ${dias}</h2>
<h3>Años resultantes: ${año}</h3>
<h3>Semanas resultantes: ${semana}</h3>
<h3>Dias resultantes: ${dia}</h3>
</div>`)


