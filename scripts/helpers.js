/* 
Ajout animation

*/

let boton = document.getElementById("newTask")
let form = document.getElementById("formElement")
let botonCancel = document.getElementById("cancelForm")

boton.addEventListener("click", () => {
    form.classList.add("active")
})

botonCancel.addEventListener("click", () => {
    form.classList.remove("active")
})