// --- 8. EVENTOS EN EL DOM --- //

//ejercicio 1
let sect3 = document.querySelector("#section3")
sect3.innerHTML = `
<h2>Ejercicio 1: Lista con Elementos</h2>
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    <li>Elemento 4</li>
</ul>
`

let elements = sect3.querySelectorAll("li")

elements.forEach((el) => {
    el.addEventListener("click", () =>{
        console.log(el.innerText)
    })
})

//ejercicio 2
let sect4 = document.querySelector("#section4")

let buttonDisable = document.getElementById("disableButton")
let buttonEnable = document.getElementById("enableButton")
let inputEnabledDisabled = document.querySelector("#inputEnabledDisabled")

buttonDisable.addEventListener("click", ()=>{ 
    console.log("click!")
    inputEnabledDisabled.disabled = true
})
buttonEnable.addEventListener("click", ()=>{
    console.log("click!")
    inputEnabledDisabled.disabled = false
})
