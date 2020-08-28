const fs = require('fs');
module.exports = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));