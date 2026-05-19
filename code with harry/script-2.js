// Module-2 : Nodejs Fundamental

// nodejs mai hum 2 way se modeule use kar sakte haii
// 1. ESCM
// 2. CommonJS module

// hame package.json mai defein karna hota haii type
// // "type": "commonjs" - we use require function to import package
// // "type": "module" - this is import and export things we have learnt this thing in JS

// // server ko bar bar restart na karna pade i mean command likhna pade we have used nodemon package and ye hame features provide karta haii : jo bhi hum change skarenge vo automatically chnage hoga frontend side pe - no nned to write command and to see changes in terminal - you need to refresh it
// command : npm i --global nodemon
// command : nodeman './script-1.js'


// // require ke help se module import karte haii

// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// const { createServer } = require('node:http');
// const { log } = require('node:console');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>hello world </h1> ');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

