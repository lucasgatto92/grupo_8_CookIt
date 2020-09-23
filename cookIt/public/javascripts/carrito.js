window.addEventListener('load', function() {
    function $(elemento) {
        return document.querySelector(elemento)
    }
    let cantidad = $("#cantidad");
    let precio = $('#precio');
    let total = $('#total');
    let indice = $('#indice');

    cantidad.addEventListener('change',function(){
        let cantidadSelect = this.options[cantidad.selectedIndex];
        console.log(cantidadSelect.value);
        console.log(precio.innerHTML)

        total.innerHTML = cantidadSelect.value * precio.innerHTML
    })
})