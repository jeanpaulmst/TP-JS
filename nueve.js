// --- 9. LOCALSTORAGE --- //

//ejercicio 1

let sect5 = document.querySelector("#section5")

let formInfoPersistida = document.querySelector("#formEliminacion")
let buttonSubmit = document.querySelector("#saveEmail")
let inputEmail = document.querySelector("#emailInput")

buttonSubmit.addEventListener("click", () => {
    let dataInputEmail = inputEmail.value
    localStorage.setItem('email', JSON.stringify(dataInputEmail))

    let valorPersistido = localStorage.getItem('email')

    formInfoPersistida.innerHTML = `
    <a>Correo Guardado: ${valorPersistido}</a>
    <button class="deleteEmail" type="button">Eliminar Correo Guardado</button>
    `

    if(localStorage.getItem('email') != null){
        agregarEventoDelete()
    }

})

function agregarEventoDelete() {
    let buttonDeleteEmail = document.querySelector(".deleteEmail")
    
        buttonDeleteEmail.addEventListener("click", () =>{
        
            localStorage.removeItem('email');
            formInfoPersistida.innerHTML = ""
    
        })
}


