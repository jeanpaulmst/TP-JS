// --- 7. INTRODUCCIÓN AL DOM --- //

//ejercicio 1
let sect1 = document.querySelector("#section1")

let changeBlueBtn = document.querySelector("#blueButton")
changeBlueBtn.addEventListener("click", () =>{
    let parrafos = document.querySelectorAll("p")
    parrafos.forEach((el) => {
        el.style.color="blue";
    })
})

//ejercicio 2
let sect2 = document.querySelector("#section2")

let input = document.querySelector("#inputText")
let boton = document.querySelector("#submitButton1")

boton.addEventListener("click", () => {
    let inputValue;
    inputValue = input.value

    alert("se ha ingresado: " + inputValue)
})



