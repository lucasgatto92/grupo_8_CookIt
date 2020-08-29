var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); //modulo para el manejo de cookies

//var bodyParser = require('body-parser')

var logger = require('morgan');

const { check, validationResult, body } = require('express-validator'); //REQUIERO EXPRESS VALIDATOR USANDO DESTRUCTURING PARA ARMAR VARIAS CONSTANTES A LA VEZ DONDE CADA UNA DE ELLAS ES UN OBJETO LITERAL

let session = require('express-session'); //REQUIERO EXPRESS-SESSION LUEGO DE HABERLO INSTALADO

const methodOverride = require('method-override') //instalé y requerí este módulo para trabajar en los formularios los métodos PUT y DELETE


//ruteadores por defecto
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//RUTEADORES PROPIOS
let mainRouter = require('./routes/main');
let productosRouter = require('./routes/productos');
let adminRouter = require('./routes/admin');
//let usuariosRouter = require('./routes/usuarios');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({ secret: "mi frase secreta" })) //uso express-session como middleware de aplicacion pasandole por parametro una frase secreta
app.use(cookieParser()); //uso cookieParser como middleware de aplicacion

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));
//app.use(bodyParser.json())

//rutas por defecto
app.use('/index', indexRouter);
app.use('/users', usersRouter);

//RUTAS PROPIAS
app.use('/', mainRouter);
app.use('/productos', productosRouter);
app.use('/admin', adminRouter);
//app.use('/usuarios', usuariosRouter);
//app.use('/carga', cargaRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;