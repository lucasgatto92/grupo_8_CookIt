const fs = require('fs');
module.exports = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));