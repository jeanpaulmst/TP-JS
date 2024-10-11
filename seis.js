// --- 6. ARRAYS --- //

//ejercicio 1
let numeros = []
for (let i = 0; i <= 10; i++){
    numeros.push(i)
}
console.log("Números originales: ", numeros)

let nuevoArray = []
numeros.forEach((el,index) => {
    nuevoArray.push(el*2)
});
console.log("Números multiplicados por 2: ", nuevoArray)

//ejercicio 2
let pares = []
for(let i = 0; i<=20; i++){
    if(i%2 == 0){
        pares.push(i)
    }
}
console.log("primeros 10 números pares: ", pares)