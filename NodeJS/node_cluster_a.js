const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const express = require('express');
const process = require('node:process');

const PORT = 3000; 

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
	const express = require('express')
  	const app = express()
  	// define our endpoints here
	app.get('/echo', (req, res) => {
  		const response = JSON.stringify({msg: 'file processed'});
  		res.send(response)
	})
  	app.listen(PORT)
  	console.log(`Process ${process.pid} started`)
}