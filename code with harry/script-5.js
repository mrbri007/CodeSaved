// Introduction to Express Js 
// Response, Request and Routers in Express

// Step-1
// script file - main.js and add the template from the below link
// https://expressjs.com/en/starter/hello-world.html
// npm init -y 
// npm i express
// npm i --global nodemon
// nodemon scriptfile.js


const express = require('express')
const app = express()
const port = 3000


// we can assign the middleware to specific routes
// we will create an folder named routes and two file blog.js and shop.js
// then all routes belongs to blogs will be handled blog.js file
const blog = require('./Routes/blog')
const shop = require('./Routes/shop')

app.use('/blog', blog); 
app.use('/shop', shop); 


// you will get this command from this link
// https://expressjs.com/en/starter/static-files.html 
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send('This is GET request')
	console.log("GET request");
})

// Need HTML file under Public folder to test the POST request
app.post('/', (req, res) => {
	res.send('This is POST request')
	console.log("POST request");
})

// Need HTML file under Public folder to test the PUT request
app.put('/', (req, res) => {
	res.send('This is PUT request')
	console.log("PUT request");
})

// Need HTML file under Public folder to test the PUT request
app.delete('/', (req, res) => {
	res.send('This is delete request')
	console.log("delete request");
})

// Serving HTML FILES 
// we have seen this 
app.get('/dummy', (req, res) => {
	res.send('Hello worldddddddddddddd')
	console.log("Hello worldddddddddddddd");
})

// but i want to render HTML page
app.get('/dummy', (req, res) => {
	res.sendFile('templates/dummy.html', {root:__dirname})
	console.log("Hello world");
})

// send a JSON response 
app.get('/api', (req, res) => {
	res.json({a:10,b:45})
	console.log("Hello world");
})

// Need HTML file under Public folder to test the DELETE request
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
