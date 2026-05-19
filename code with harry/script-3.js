// Module-3 : Nodejs Fundamental
// Working with fs and Path modules

// Callback example - CJS Module or ESM module
// const fs = require('fs');
// console.log(fs);
// Write to file
// fs.writeFile('example.txt', 'This is sample content.', (err) => {
//   if (err) throw err;
//   console.log('File created!');
//   // Read the file
//   fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('File says:', data);
//   });
// });

// Promise example - ESM Module or CJS Module
// import * as fs from 'node:fs/promises';
// let a = await fs.readFile('example.txt')
// console.log(a);
// {/* <Buffer 54 68 69 73 20 69 73 20 73 61 6d 70 6c 65 20 63 6f 6e 74 65 6e 74 2e> */}
// console.log(a.toString());

// import path from 'node:path';
// // console.log(path);
// let a = 'C:\Users\babloo gupta\OneDrive\Desktop\code with harry\example.txt'
// console.log(path.extname(a));
// console.log(path.dirname(a));
// console.log(path.basename(a));
// console.log(path.join('c://', "program\\example.txt"));

