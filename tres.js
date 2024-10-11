// --- 3. OPERADORES DE ASIGNACIÓN Y BUCLES --- //

//ejercicio 1
let variable = 10;

while(variable > 0){
    console.log(variable)
    variable = variable -1;
}

//ejercicio 2
let numero
do{
   numero = window.prompt("Ingrese un numero mayor de 100")

} while(numero < 100)
console.log("Ingresaste un numero mayor a 100: " + numero)
