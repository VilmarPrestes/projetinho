const fs = require('fs');

let csv = fs.readFileSync(__dirname + '/teste.csv', 'utf8');

console.log(csv);
