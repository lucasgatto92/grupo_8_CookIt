var express = require('express');
var router = express.Router();

let db = require('../database/models');

/* GET home page. */
router.get('/', function(req, res) {
    db.Usuario.findAll() //valor de retorno de esta consulta es una promesa
        .then(function(result) {
            res.send(result)
        })
});

module.exports = router;