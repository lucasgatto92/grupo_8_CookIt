function $(elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function() {
    let formulario = $("#prodForm");

    let inputName = $("input[name='nombre']");
    let inputDescripcion = $("#descripcion");
    let inputFotos = $("input[name='images']");
    let inputReceta = $("input[name='receta']");

    let errorName = $("#errorNombre");
    let errorDescripcion = $("#errorDescripcion");
    let errorFotos = $("#errorFotos");
    let errorReceta = $("#errorReceta");

    let regExAvatar = /(.jpg|.jpeg|.png|.gif)$/i;
    let regExReceta = /(.pdf)$/i;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault()

        let errores = {}
        console.log(errores);
        console.log(inputFotos.value);

        if (inputName.value.length < 5) {
            errores.nombre = "* El nombre debe tener al menos 5 caracteres"
        }

        if (inputDescripcion.value.length < 20) {
            errores.descripcion = "* La descripción debe tener al menos 20 caracteres"
        }

        if (!inputFotos.value) {
            errores.fotos = "* Tenés que seleccionar por lo menos una imágen"
        }

        if (inputFotos.value) {
            if (!regExAvatar.exec(inputFotos.value)) {
                errores.fotos = "* Sólo se admiten imágenes .jpg .jpeg .png .gif"
            }
        }

        if (!inputReceta.value) {
            errores.receta = "* Tenés que seleccionar una receta"
        }

        if (inputReceta.value) {
            if (!regExReceta.exec(inputReceta.value)) {
                errores.receta = "* El archivo tiene ser .pdf"
            }
        }

        if (Object.keys(errores).length != 0) {
            errorName.innerText = errores.nombre ? errores.nombre : "";
            errorDescripcion.innerText = errores.descripcion ? errores.descripcion : "";
            errorFotos.innerText = errores.fotos ? errores.fotos : "";
            errorReceta.innerText = errores.receta ? errores.receta : "";
        } else {
            formulario.submit()
        }
    })
})