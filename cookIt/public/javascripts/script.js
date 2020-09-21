var state = document.getElementById('state');
var provinciaInput = document.getElementById('provincia');
var provinciasSelect = document.getElementById('provincias');

      fetch('https://apis.datos.gob.ar/georef/api/provincias') //la direccion donde está la api

      .then(function(provincias) { //recibe los datos que vienen de la pagina antes invocada
        
        return provincias.json() // retorna los datos pasados a json
         })

      .then(function(arrayProvincias) //pasa el objeto a un array
      {

        var todasProvincias = arrayProvincias.provincias

        function ordenarAsc(p_array_json, p_key)
        {
        p_array_json.sort(function (a, b) {
            return a[p_key] > b[p_key];
        });
        }
        ordenarAsc(todasProvincias,'nombre');
        

        for (provincia of todasProvincias)
        {
        var optionProvincia = document.createElement('option') //crea el elemento
        provinciasSelect.appendChild(optionProvincia)
        optionProvincia.setAttribute('value',provincia.nombre)
        optionProvincia.setAttribute('id','opProv')
        var nombreProvincia = document.createTextNode(provincia.nombre)
        optionProvincia.appendChild(nombreProvincia)
        }
    })

state.onclick = function()
{
    if (provinciaInput.style.display != 'none') {
        provinciaInput.style.display = 'none';
        provinciasSelect.style.display = 'block';
    } else {
        provinciaInput.style.display = 'block';
        provinciasSelect.style.display = 'none';
    }

}

provincia.onclick = function()
{
    provinciaInput.style.display = 'none';
    provinciasSelect.style.display = 'block';
}

provinciasSelect.onchange = function()
{
    var optionProvincia = provinciasSelect.options[provinciasSelect.selectedIndex].value;
    var provinciaSel = optionProvincia
    provinciaInput.setAttribute('value', provinciaSel)
    provinciaInput.style.display = 'block';
    provinciasSelect.style.display = 'none';

    var select = document.getElementById("localidades");

    for (let i = select.options.length; i >= 0; i--) {
        select.remove(i);
    }

    console.log(select)

    fetch('https://apis.datos.gob.ar/georef/api/localidades?formato=json&max=5000') //la direccion donde está la api
    
    .then(function(localidades) //recibe los datos que vienen de la pagina antes invocada
        {
            return localidades.json() // retorna los datos pasados a json
        })
    .then(function(arrayLocalidades) //pasa el objeto a un array
        {
            var arrayCompleto = arrayLocalidades.localidades
            // console.log(todasLocalidades[0].provincia.nombre)
            var provincia = document.getElementById('provincia'); //atrapo el input
            var provincia = provincia.value; //atrapo el valor del input
            var ciudades = new Array(); //creo un nuevo array
    
            for (localidad of arrayCompleto) //recorro el array que viene de la api
            {
                if(localidad.provincia.nombre == provincia) //chequeo que la localidad corresponda con la provincia
                {
                    ciudades.push(localidad.nombre) //voy agregando en el nuevo array las ciudades
                }
            }
            ciudades.sort(); //ordeno el array
    
            for (ciudad of ciudades) { //recorro el array para formar las opciones del select
                var optionLocalidad = document.createElement('option') //crea el elemento
                localidadesSelect.appendChild(optionLocalidad) //añade el option al select
                optionLocalidad.setAttribute('value',ciudad)
                var nombreLocalidad = document.createTextNode(ciudad)
                optionLocalidad.appendChild(nombreLocalidad)
            }
    
        })
        }
    
    var state = document.getElementById('city');
    var localidadInput = document.getElementById('localidad');
    var localidadesSelect = document.getElementById('localidades');
    
    fetch('https://apis.datos.gob.ar/georef/api/localidades?formato=json&max=5000') //la direccion donde está la api
    
    .then(function(localidades) //recibe los datos que vienen de la pagina antes invocada
        {
            return localidades.json() // retorna los datos pasados a json
        })
    .then(function(arrayLocalidades) //pasa el objeto a un array
        {
            var arrayCompleto = arrayLocalidades.localidades
            // console.log(todasLocalidades[0].provincia.nombre)
            var provincia = document.getElementById('provincia'); //atrapo el input
            var provincia = provincia.value; //atrapo el valor del input
            var ciudades = new Array(); //creo un nuevo array
    
            for (localidad of arrayCompleto) //recorro el array que viene de la api
            {
                if(localidad.provincia.nombre == provincia) //chequeo que la localidad corresponda con la provincia
                {
                    ciudades.push(localidad.nombre) //voy agregando en el nuevo array las ciudades
                }
            }
            ciudades.sort(); //ordeno el array
    
            for (ciudad of ciudades) { //recorro el array para formar las opciones del select
                var optionLocalidad = document.createElement('option') //crea el elemento
                localidadesSelect.appendChild(optionLocalidad) //añade el option al select
                optionLocalidad.setAttribute('value',ciudad)
                var nombreLocalidad = document.createTextNode(ciudad)
                optionLocalidad.appendChild(nombreLocalidad)
            }
    
        })
    
    city.onclick = function()
    {
        if (localidadInput.style.display != 'none') {
            localidadInput.style.display = 'none';
            localidadesSelect.style.display = 'block';
        } else {
            localidadInput.style.display = 'block';
            localidadesSelect.style.display = 'none';
        }
    
    }
    
    localidad.onclick = function()
    {
        localidadInput.style.display = 'none';
        localidadesSelect.style.display = 'block';
    }
    
    localidadesSelect.onchange = function()
    {
    
        var optionLocalidad = localidadesSelect.options[localidadesSelect.selectedIndex].value;
        var localidadSel = optionLocalidad
        localidadInput.setAttribute('value', localidadSel)
        localidadInput.style.display = 'block';
        localidadesSelect.style.display = 'none';
    }