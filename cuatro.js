// --- 4. FUNCIONES EN JS --- //

//ejercicio 1
const esPar = (number) => {
    if((number % 2) == 0){
        return true
    }else{
        return false
    }
}
console.log("El numero 8 es par: " + esPar(8))
console.log("El numero 7 es par: " + esPar(7))

//ejercicio 2
const convertirCelsiusAFahrenheit = (valorCelcius) => {
    let farenheit = valorCelcius*1.8 + 32
    return farenheit
}
console.log("30°C son equivalentes a " + convertirCelsiusAFahrenheit(30) + "°F")