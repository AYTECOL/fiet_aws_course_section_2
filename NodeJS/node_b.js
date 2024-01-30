const fs = require('node:fs');

fs.readFile('constitucion-politica-col.pdf', (err, content) => {
   if (err) console.error('Error first read: ', err); 
   console.log('content: ', content);
})

fs.readFile('constitucion-politica-col.pdf', (err, content) => { 
   if (err) console.error('Error second read: ', err); 
   console.log('content: ', content);
})

console.log('This wil happen before 🤯')