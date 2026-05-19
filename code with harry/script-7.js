// EJS template in EXPRESS JS 
// EJS = Embedded JavaScript- that can run JavaScript inside HTML.

// How to use EJS in Express
// 1. Install EJS
// npm install ejs
// 2. Set view engine
// app.set('view engine', 'ejs');
// 3. Create views/index.ejs
// <h1>Welcome <%= username %></h1>
// 4. Send data from route
// app.get("/", (req, res) => {
//   res.render("index", { username: "Brijesh" });
// });

// npm init -y
// npm i express
// template copy/paste


const express = require('express')
const app = express()
const port = 3000

// step-1
app.set('view engine', 'ejs');

// render a view template
// app.get('/', (req, res) => {
//   res.sendFile('Bootstrap/index.html', {root:__dirname})
// })

// EJS 
// this is how you can pass the varibale value into html
// app.get("/", (req, res) => {
//   res.render("index", { username: "Brijesh" });
// });
app.get("/", (req, res) => {
	let num = "Brijesh";
	let arr = [1, 2, 3]
	// res.render("index", { username: num });
	res.render("index", { username: num, arr });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

// npm i bootstrap@5.3.8

// https://ejs.co/  --> website
// npm install ejs  --> npm package

// how to use EJS with express
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// we can make an components like navabr and then use it in you main folder