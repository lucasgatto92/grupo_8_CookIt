function $(elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function() {
    let formulario = $("#logForm");

    let inputEmail = $("input[name='email']");
    let inputPass = $("input[name='pass']");

    let errorEmail = $("#errorEmail");
    let errorPass = $("#errorPass");

    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault()

        let errores = {}
        console.log(errores);

        if (!inputEmail.value.match(regExEmail)) {
            errores.email = "Tenés que insertar un email válido"
        }

        if (inputPass.value == "") {
            errores.pass = "Tenés que ingresar una contraseña";
        }

        if (Object.keys(errores).length != 0) {
            errorEmail.innerText = errores.email ? errores.email : "";
            errorPass.innerText = errores.pass ? errores.pass : "";
        } else {
            formulario.submit()
        }
    })
})