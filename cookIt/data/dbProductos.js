const fs = require('fs');
module.exports = dbProductos = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));