function $(elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function() {
    let formulario = $("#regForm");

    let inputName = $("input[name='nombre']");
    let inputLastName = $("input[name='apellido']");
    let inputEmail = $("input[name='email']");
    let inputPass = $("input[name='pass']");
    let inputAvatar = $("input[name='avatar']");

    let errorName = $("#errorName");
    let errorLastName = $("#errorLastName");
    let errorEmail = $("#errorEmail");
    let errorPass = $("#errorPass");
    let errorAvatar = $("#errorAvatar");

    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regExAvatar = /(.jpg|.jpeg|.png|.gif)$/i;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault()

        let errores = {}
        console.log(errores);
        console.log(inputAvatar.value);

        if (inputName.value.length < 2) {
            errores.name = "El nombre debe tener al menos 2 letras"
        }

        if (inputLastName.value.length < 2) {
            errores.lastName = "El apellido debe tener al menos 2 letras"
        }


        if (!inputEmail.value.match(regExEmail)) {
            errores.email = "Tenés que ingresar un email válido"
        }

        if (inputPass.value.length < 6) {
            errores.pass = "Tenés que ingresar una contraseña de al menos 6 caracteres"
        }

        if (inputAvatar.value) {
            if (!regExAvatar.exec(inputAvatar.value)) {
                errores.avatar = "Tenés que seleccionar una imagen con un formato válido"
            }
        }

        if (Object.keys(errores).length != 0) {
            errorName.innerText = errores.name ? errores.name : "";
            errorLastName.innerText = errores.lastName ? errores.lastName : "";
            errorEmail.innerText = errores.email ? errores.email : "";
            errorPass.innerText = errores.pass ? errores.pass : "";
            errorAvatar.innerText = errores.avatar ? errores.avatar : "";
        } else {
            formulario.submit()
        }
    })
})