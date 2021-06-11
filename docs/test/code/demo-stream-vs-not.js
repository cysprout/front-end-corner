const {createServer} = require('http');
const {readFile, createReadStream} = require('fs');
const {resolve} = require('path');

const filePath = resolve(__dirname,'big.txt')

// not use stream
createServer((req, res) => {
  readFile(filePath , (err, data) => {
    res.end(data);
  });
}).listen(3000);

// curl（或者 浏览器中访问） 127.0.0.1:3000
// lsof -i:3000
// top -pid xxxx

// use stream
// createServer((req, res) => {
//     createReadStream(filePath).pipe(res)
//  }).listen(4000);