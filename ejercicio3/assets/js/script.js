// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
// que la transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente información respecto a la equivalencia de las
// escalas de temperatura:
// ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// es 0 °C + 273.15 = 273.15 K
// ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
// es ( 0 °C × 9 / 5 ) + 32 = 32 °F

// Ejercicio 3
// Pedir al usuario que ingrese la temperatura en celcius
var numero1 = prompt("Ingrese la temperatura en Celcius");
//const numero1 = prompt("Ingrese la temperatura en Celcius");

// // Realizar formulas de transformacion
// Para pasar de Celcius a Kelvin
var kelvin = parseInt(numero1)+273.15;
//const kelvin = parseInt(numero1)+273.15;

// Pasar de Celcius a Fahrenheit

var  Fahrenheit = parseInt(numero1)*(9/5) + 32;

// Resultados
document.write(`
<div style="margin: 40px;">
<h2>Resultados Ejercicio 3</h2>
<h2>Temperatura Ingresada: ${numero1} °C</h2>
<h3>Temperatura de Celcius a Kelvin: ${kelvin} K°</h3>
<h3>Temperatura de Celcius a Fahrenheit: ${Fahrenheit} °F</h3>

</div>`)

