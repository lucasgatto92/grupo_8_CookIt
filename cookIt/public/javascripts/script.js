


window.onload = function () {
    fetch ("https://apis.datos.gob.ar/georef/api/provincias")
       .then ( response => response.json ())
 
       .then (data => {
           let elem = document.getElementById ('elem')
         data.provincias.sort (function (prev, next ){
            return prev.id - next.id
         })
         for (let i = 0; i < data.provincias.length; i++){
            elem.innerHTML += `<option> ${data.provincias[i].nombre}  </option>`
 
       console.log (data.provincias[i].nombre) //console.log para ver que es lo que nos trae por medio de la consola
            }       
       })
       .catch (error => console.log (error))
    }