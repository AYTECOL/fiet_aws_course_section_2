const express = require('express');
const fs = require('node:fs');
const { readFile } = require('node:fs/promises');

const app = express()
const port = 3055

app.get('/async', async (req, res) => {
  const response = JSON.stringify({msg: 'file processed'});
  const fileData = await readFile('./constitucion-politica-col.pdf');
  res.send(response)
})

app.get('/sync', (req, res) => {
  const response = JSON.stringify({msg: 'file processed'});
  const fileData = fs.readFileSync('./constitucion-politica-col.pdf');
  res.send(response)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
