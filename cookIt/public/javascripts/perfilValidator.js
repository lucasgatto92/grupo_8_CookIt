function $(elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function() {
    let avatarForm = $("#avatarForm");
    let inputAvatar = $("input[name='avatarUpdt']");
    let errorAvatar = $("#errorAvatar");
    let regExAvatar = /(.jpg|.jpeg|.png|.gif)$/i;

    let passForm = $('#passForm');
    // let inputActual = $("input[name='actual']");
    let inputNueva = $("input[name='nueva']");
    let inputNueva2 = $("input[name='nueva2']");
    // let errorActual = $("#errorActual");
    let errorNueva2 = $("#errorNueva2");

    avatarForm.addEventListener('submit', function(event) {
        event.preventDefault()

        let erroresAvatar = {}
        if (inputAvatar.value) {
            if (!regExAvatar.exec(inputAvatar.value)) {
                erroresAvatar.avatar = "Tenés que seleccionar una imagen con un formato válido"
            }
        } else {
            erroresAvatar.avatar = "Tenés que seleccionar una imagen"
        }

        if (Object.keys(erroresAvatar).length != 0) {
            errorAvatar.innerText = erroresAvatar.avatar ? erroresAvatar.avatar : "";
        } else {
            avatarForm.submit()
        }
    })

    passForm.addEventListener('submit', function(event) {
        event.preventDefault()

        let erroresPass = {}
        if (inputNueva.value.length < 6) {
            erroresPass.pass = "Tenés que ingresar una contraseña de al menos 6 caractéres"
        }
        if (inputNueva.value != inputNueva2.value) {
            erroresPass.pass = "Las contraseñas no coinciden"
        }

        if (Object.keys(erroresPass).length != 0) {
            errorNueva2.innerText = erroresPass.pass ? erroresPass.pass : "";
        } else {
            passForm.submit()
        }

    })


})