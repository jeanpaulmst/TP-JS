// --- 1. INTRODUCCIÓN A JS --- //
//ejercicio 2
let a = 10;
let b = 5;
let c = a + b;
console.log("La suma de a y b es: " + c)

//ejercicio 3
let nombre = window.prompt("¿Cuál es tu nombre?")
console.log("Hola, " + nombre + "!")


// --- 2. OPERADORES LOGICOS Y CONDICIONALES --- //

//ejercicio 1
let d = 5;
let e = 7;
let f = 9;
let mayor;

if(d > e && d > f){
  mayor = d;
}
else if(e > d && e > f){
  mayor = e;
}
else{
  mayor = f;
}
console.log("El mayor de los tres numeros es: " + mayor);

//ejercicio 2
let numero = window.prompt("Ingrese un número y te dire si es par o impar")
if((numero % 2) == 0){
  console.log("El numero " + numero + ", es par")
}else{
  console.log("El numero " + numero + ", es impar")
}



