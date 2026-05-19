// Intialize the project with npm - npm init -y
// express install - npm i express

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.json());  //HTML FORM SUMISSION 
app.use(express.urlencoded({ extended: true })); //HTML FORM SUMISSION 

// toh is line ka matlab hua ki static file, ye path pe find karna
app.use(express.static(path.join(__dirname, 'public'))) //Public static files
// console.log(__dirname);
// __dirname : current folder path
// console.log(__dirname + '/public');
// __dirname : current folder path mai /public add ho jayega 
// now better to use path.join() method
// static file - html, js, css, media files -img ,video


app.set('view engine', 'ejs') // EJS Setup
app.get('/', (req, res) => {
	res.render('index') // you have to make index.ejs file under views folder main route
})


// : - colon ke baad jo likha haii vo dynamics routing haii
// /profile/brijesh
// /profile/maxson
// /profile/jash
// /profile/mihir
// to avoid the repeated url -  we can make it dynamics
// /profile/:kuch bhi text daalo


// frontend se data backend par and bcakend se data frontend pe
// /profile/:username - /profile/:harshhhhhh - 
// frontend data - harshhhhhh 
// now abhi harshhhhhh backend mai as a username mai saved haii and print in web page


app.get('/profile/:username', (req, res) => {
	// aisa kuch bhi jiske aage : haii
	// username haii toh username haii
	// chacha haii chacha rahega
	// res.send(req.params.username)
	res.send(`welcome ${req.params.username}`)
	// res.send('Hello World!')
})


app.get('/author/:username/:age', (req, res) => {
	// res.send(`welcome ${req.params.username} and ${req.params.age}`)
	res.send(req.params) //will get object
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


// express.static() tells Express:
// ➡️ “Make everything inside this folder available publicly to users.”
// So if you have:
// public/
//    ├── index.html
//    ├── style.css
//    ├── script.js
//    └── images/
//         └── logo.png
// Users can access them directly:
// localhost:3000/style.css
// localhost:3000/script.js
// localhost:3000/images/logo.png
// You do NOT need routes for these files.