// --- 5. OBJETOS EN JS --- //

//ejercicio 1
let persona = {
    nombre : "Ana",
    edad : 30,
    ciudad : "Mendoza",
    setCiudad: function(newCiudad){
        this.ciudad = newCiudad
        console.log(persona)
    }
}

persona.setCiudad("Barcelona")

//ejercicio 2
let libro = {
    titulo: "Harry Potter",
    autor: "JK Rowling",
    año: 1995,
    moraThanTenYrOld: function(){
        if((2024-this.año) >= 10){
            return true
        }else{
            return false
        }
    }
}

let isOld = libro.moraThanTenYrOld()
console.log("El libro " + libro.titulo + " es antiguo: " + isOld)