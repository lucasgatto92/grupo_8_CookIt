function $(elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function() {
    let avatarForm = $("#avatarForm");
    let inputAvatar = $("input[name='avatarUpdt']");
    let errorAvatar = $("#errorAvatar");
    let regExAvatar = /(.jpg|.jpeg|.png|.gif)$/i;

    avatarForm.addEventListener('submit', function(event) {
        event.preventDefault()

        let erroresAvatar = {}
        console.log(erroresAvatar);
        console.log(inputAvatar.value);
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
})