// From Sheriyans Coding School Playlist

// Module-1
// Fundamental Of JS before starting the Backend Development 

// array and object
// function Return
// Async Js
// var arr = [1, 2, 3, 4, 5] // it can contain different datatypes value
// Array : map, filter , find , foreach, indexof
// arr ke har ek element pe iterate hoga
// arr.forEach(function(val){
// 	console.log(val);
// 	console.log(val + 100);
// 	console.log(val + 'Hello');
// })
// when you have to create a new array from the existing one
// var newArr = arr.map(function (val) {
// 	return val
// 	// return val*3
// 	// return 12
// })
// console.log(newArr);
// when you have to filter from the array 
// var newArr = arr.filter(function (val) {
// 	if (val > 3) {
// 		return true; // true karne se value new array mai jayegi
// 	} else {
// 		return false; //optional
// 	}
// })
// console.log(newArr);
// when you have to find first element from the array 
// var arr = [1, 2, 2, 3, 4, 5]
// var newArr = arr.find(function (val) {
// 	if (val == 2) { return val; }
// 	if (val == 12) { return val; } // undefined
// })
// console.log(newArr);
// console.log(arr.indexOf(2)); //1 :true
// console.log(arr.indexOf(12)); //-1 :false
// var obj = {
// 	name : "kendall",
// 	age : 12
// }
// // console :  obj
// // console :  obj.name
// // console :  obj.age
// // obj.age = 17; // value update ho gyi
// // console :  obj.age
// // you can freeze thr obj value 
// // now you cant update the value 
// // Object.freeze(obj);
// // obj.age = 89;
// main stack - sync nature code [first execute]
// // side stack mai processing hota haii but execute - async nature code [then they go to main stack and run ]
// async function hello(){
// 	var a = await fetch(`https://randomuser.me/api/`);
// 	var b = await a.json();
// 	// console.log(b); // value hame object ke form mai milta haii
// 	// console.log(b.results);
// 	console.log(b.results[0].name);
// }
// hello()


// Module- 2 
// Install NodeJs and Sysytem file operation

// js se backend nahi ban sakta
// kyuki js ke paas wo functionalities nahi hai jinse backend banta hai”

// node js nhi haii koi framework , library, technologies ,programming language
// nodejs - js runtime environment haii and isko install karna padta haii
// iski helps se hum JS se server create karte haii  and jab tak ye active rahta haii tab tak we can use it 
// npm : like an playstore where we downlaod packages [wriiten code by someone else] and can use it in our code

// to start with backend development , we run this command
// npm init 

// To use the promise-based APIs:
// const fs = require('node:fs/promises');
// To use the callback and sync APIs:
// const fs = require('node:fs');

// we are using  
// const fs = require('node:fs');
// const fs = require('fs'); // It still works

// node se hamne fs module ko nikala and transfer it into const Fs mai like capabilities or power ko transfer kar diya and we can use it in our code
// fs se hum bohot sari cheeze kar sakte haii like below and we will use the most common properties 
// Callback API
// fs.access(path[, mode], callback)
// fs.appendFile(path, data[, options], callback)
// fs.chmod(path, mode, callback)
// File modes
// fs.chown(path, uid, gid, callback)
// fs.close(fd[, callback])
// fs.copyFile(src, dest[, mode], callback)
// fs.cp(src, dest[, options], callback)

// lets get started 
// fs : file system

// fs.writeFile(file, data[, options], callback) // to create an file

// fs.writeFile('hello.txt', 'This is random text', function(err){
// 	if(err) console.error(err); // it contains the error if occurred
// 	else console.log('Done');
// })

// fs.appendFile('hello.txt', 'it will add the tetx on the existing file', function(err){
// 	if(err) console.error(err);
// 	else console.log('Done');
// })

// fs.rename('hello.txt', 'newfile.txt', function(err){
// 	if(err) console.error(err);
// 	else console.log('Done');
// })

// Exiting Folder
// fs.copyFile('newfile.txt', './newcopyfile.txt', function(err){
	// 	if(err) console.error(err);
	// 	else console.log('Done');
	// })
	
// New folder
// fs.copyFile('newfile.txt', './copy/newcopyfile.txt', function(err){
// 	if(err) console.error(err);
// 	if(err) console.error(err.message);
// 	else console.log('Done');
// })

// to delete the file
// fs.unlink('newfile.txt', function(err){
// 	if(err) console.error(err);
// 	else console.log('Done');
// })

// to remove the directory 
// fs.rmdir('./delete', function(err){
// 	if(err) console.error(err.message);
// 	else console.log('Done');
// })


// directory should be empty but there is solution 
// use rm - its updated one and works with recrusive method

// fs.rmdir('./copy', function(err){
// 	if(err) console.error(err.message);
// 	else console.log('Done');
// })

// fs.rm('./copy',{recursive:true}, function(err){
// 	if(err) console.error(err.message);
// 	else console.log('Done');
// })

// fs.readFile('newcopyfile.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File content:', data);
// });


// this is how an server is created
// const http = require('http');
// const server = http.createServer((req, res) => {
// //   res.statusCode = 200;         // HTTP status
// //   res.setHeader('Content-Type', 'text/plain');  
//   res.end('Hello, this is my first Node.js server!');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });

// termainal : node index.js


// Module -3
// Npm Basic to Advanced 

// npm init --> package.json create hota haii and it contains Documentation about your project like dependency and script file

// npm - node package manager like an playstore where u can download package(code written by someone else for specific purpose and you can write your own package and download and use it through npm) related to node

// node js download karne par jo file crate hota hai vo modules ke form mai hota haii
// npm ke through jo download hota hai vo package hota haii and it creates dependecy 

// npm ke through agr package downlaod karna hai toh this is the command we gonna use
// install --> npm i packagename
// uninstall --> npm unistall packagename

// koi specific version ka package kaise download kare 
// npm i packagename@version 

// console.log('Hello world');



// dependecies - it contains package and package ki dependecies
// devdependecies - ye dependcies development ke time kaam aati hai and we can remove thta dependecy after deployment [hosting or production]
// we can shift depedenetcy package to devdependecy
// jab node js install karte haii tab ye os ke path pe defined hote haii so that they can recongize when we are using it 
// npm start
// npm test 
// we can create our own custom script adn run with this command
// - npm run chhacha
// jab tum package install karte ho toh uske sath dependecy create hoti haii and uska bhi dependecy ho sakta haii [it depends on another pacakge]
// i mean jab koi package install karte ho toh uske sath jo bhi package dependednt haii vo bhi downlaod ho jati haii aur vo sari node modules mai dikhte haii
// like node express
// protocol : internet ko use karne ke liye hum rules and regulation follow karna hote haii jise hum protocol kehte hai 
// like https : used to send and receive file between devices
// aur ye networking protocol hota haii os mai pre-installed aata haii











