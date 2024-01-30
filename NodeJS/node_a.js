const fs = require('node:fs');

console.log('start');
fs.readFileSync('./constitucion-politica-col.pdf');
console.log('first file has been checked');
fs.readFileSync('./constitucion-politica-col.pdf');
console.log('both reads are finished');