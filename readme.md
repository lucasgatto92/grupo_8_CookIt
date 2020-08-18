# :fork_and_knife: COOK IT 
*Choose it. Take it. Cook it.*

![logotipo](/design/logos/casita.png)

## :pushpin: Primer Sprint (24/05)


## Integrantes

### :woman: Fernández, Guadalupe
- 26 años
- Camarera


### :man: Gatto, Lucas
- 27 años
- Técnico especializado en planta externa - Movistar


### :man: Mena, Eric
- 44 años
- Desarrollador web



## :speech_balloon: Temática del sitio y audiencia

El sitio comercializará productos alimenticios envasados al vacío para su posterior preparación y consumo. Los kits de alimentos iran acompañados por instructivos o recetas para su posterior preparación.

La audiencia objetivo serán personas adultas ya sean familias o individuos que trabajan o estudian y carecen de tiempo para preparar su comida diaria, o simplemente no les gusta hacerlo, pero desean alimentarse adecuadamente y con una dieta variada sin salir de su casa, en cualquier horario y sin esperar un delivery.

## :page_facing_up: Listado de 5 páginas referentes 

- [Juliana Lopez May](https://www.julianalopezmaytienda.com.ar)
- [La Fueza](https://www.lafuerza.com.ar)
- [Blue Apron](https://www.blueapron.com/)
- [Hello Fresh](https://www.hellofresh.com)
- [Simpleat](https://www.simpleat.com.ar/)
- [Arcor](https://www.arcorencasa.com)

Las páginas que utilizamos como referentes estan vinculadas no sólo con la temática del sitio y con el público objetivo, sino también por su diseño, las imagenes, el frond-end que utilizan, la experiencia del usuario. Recopilamos distintos elementos de cada una de las páginas.


## :open_file_folder: Wireframe

- [Home](https://github.com/lucasgatto92/-grupo_8_CookIt/blob/master/wireframe/home.png)
- [Detalle de producto](https://github.com/lucasgatto92/-grupo_8_CookIt/blob/master/wireframe/detalleProducto.png)
- [Carrito de compras](https://github.com/lucasgatto92/-grupo_8_CookIt/blob/master/wireframe/carritoCompras.png)
- [Formulario de registro](https://github.com/lucasgatto92/-grupo_8_CookIt/blob/master/wireframe/register.png)
- [Formulario de carga de producto](https://github.com/lucasgatto92/-grupo_8_CookIt/blob/master/wireframe/ingresoProductos.png)


## :pencil2: Diseño (en proceso)

- [Logos](https://github.com/lucasgatto92/-grupo_8_CookIt/tree/master/design/logos)
- [Colores](https://github.com/lucasgatto92/-grupo_8_CookIt/tree/master/design/colors)
- Fuentes:
    - [Faustina](https://fonts.google.com/specimen/Faustina?query=faustina&preview.text=Cook+it&preview.text_type=custom)
    - [Gayathri](https://fonts.google.com/specimen/Gayathri?query=gaya&preview.text=Cook+it&preview.text_type=custom)
    - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display?query=playfa&preview.text=Cook+it&preview.text_type=custom)
    - [Reem Kufi](https://fonts.google.com/specimen/Reem+Kufi?query=reem&preview.text=Cook+it&preview.text_type=custom)


## :pushpin: Segundo Sprint (10/07)

### :clipboard: [Tablero de Trabajo](https://trello.com/b/g6PQOvmo/proyecto-integrador)

### :mag_right: Retrospectiva: [retro.md](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/retro.md)

### :page_facing_up: Páginas (views)
- HOME: home.ejs
- DETALLE PRODUCTO: detalle.ejs        
- CARRITO DE COMPRAS: carrito.ejs      
- CARGA DE PRODUCTOS: carga.ejs         
- REGISTRO DE USUARIOS: registro.ejs    

## :pushpin: Tercer Sprint (24/07)

### :mag_right: Retrospectiva: [retro.md](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/retro.md)

### :calendar: Daily [daily.md](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/daily.md)

### :clipboard: [Tablero de Trabajo](https://trello.com/b/g6PQOvmo/proyecto-integrador)

### :briefcase: Archivos [products.json](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/cookIt/data/products.json) y [users.json](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/cookIt/data/users.json)

### :fire: Aplicación Node + Express + EJS
- Home
- Listado de productos                          /productos
- Detalle del producto                          /productos/:id
- Formulario de carga y edición de productos    /productos/create   &   /productos/:id/edit
- Formulario de registro y login                /users/registro

### :scroll: Funcionalidad de listado, detalle, alta, modificación y baja de productos.

- /productos :arrow_right: (GET) muestra una lista de todos los productos. Se puede acceder desde la categoría "española" en el home o desde el header "nuestras delicias" y luego "ver todos".
- /productos/:id :arrow_right: (GET) muestra el detalle de un producto. Se puede acceder desde el menú "NUESTRAS DELICIAS" o desde el listado de productos clickeando en el nombre de cada uno.
- /productos/create :arrow_right: (GET) muestra el formulario de carga de productos. Se puede acceder al mismo en el menú "ADMINISTRACIÓN" , "Añadir producto".
- /productos :arrow_right: (POST) Método que guarda los datos luego de haber cargado los mismos a través del formulario.
- /productos/:id/edit :arrow_right: (GET) muestra el formulario de edición de producto. Se accede al mismo desde el botón :pencil2: (editar) en el listado de productos.
- /productos/:id :arrow_right: (PUT) método que actualiza la base de datos. (pendiente actualizar la imagen del producto).
- /productos/:id :arrow_right: (DELETE) método que se ocupa de borrar un registro en particular. Se utiliza desde el listado de productos con el boton eliminar (pendiente eliminar la imagen del producto).

## :pushpin: Cuarto Sprint (11/08)

### :clipboard: [Tablero de Trabajo](https://trello.com/b/g6PQOvmo/proyecto-integrador)

### :mag_right: Retrospectiva: [retro.md](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/retro.md)

### :calendar: Daily [daily.md](https://github.com/lucasgatto92/grupo_8_CookIt/blob/master/daily.md)

### :bust_in_silhouette: Registro de usuarios

- Accesible desde /users/registro o desde el header, ingresando al login y luego a "soy nuevo", permite al usuario registrarse completando los datos, se verican que los mismos sean correctos y en caso de no serlo devuelve los errores debajo de cada campo del formulario, permite subir una imagen de perfil (si el usuario no lo hace se le asigna una por defecto), la contraseña es encriptada antes de guardarse en en JSON de usuarios

### :closed_umbrella: Login de usuarios

- Accesible desde /users/login o desde el link homonimo en el header. Se verifica la información enviada por el usuario y en caso de haber un error lo devuelve debajo del input donde se produjo, en caso de login correcto, se redirije al home y en el caso de que el usuarios tenga privilegios de administrador le mostrara en el header un menú de "Administración"
- Función de recordar usuario implementada

### :vertical_traffic_light: Rutas de huéspedes y de usuarios

- Los huéspedes pueden, por el momento sólo acceder al home y al login/registro, cualquier otra acción los redirige al login
- Los usuarios logueados pueden acceder al detalle de los productos, y al carrito
- Los usuarios logueados como administrador pueden acceder a todo lo anterior + el menu de administración

