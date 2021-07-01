delete Hammer.defaults.cssProps.userSelect

const body = document.getElementById("body")

const hammerjs = new Hammer(body)

hammerjs.on("panleft  panright", ev => {
    let form = document.getElementById("formElement")
    if (ev.pointerType === "touch") {

        if (ev.type === "panleft" && ev.distance > 100) {
            form.classList.add("active")
        }    
        if (ev.type === "panright" && ev.distance > 100) {
            form.classList.remove("active")
        }
    }
    
})