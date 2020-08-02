const fs = require('fs');
module.exports = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));