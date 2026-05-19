// // Introduction to Express Js 

// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
// Routes are like different rooms in a house 🏠

// Each route can have one or more handler functions, which are executed when the route is matched.

// browser by default GET request use karta haii
// GET request mai character limit hota haii and it shows the data in the URL
// POST request - to send sensitive data like username and password and big file data to server and it does not show the data in the url
// we have different type of request - GET,POST, PUT, DELETE
// GET request hum broswer se test kar sakte haiii
// BUT POST request mai hame html page create karna hota haii  under public file and it goes with the same for PUT, DELETE

// Best practise ki hum POSTMAN ka use kare - we can test any kinda of request easily 
// thunderclient - alternative and old software 
// now you are using POSTman as industry standard
// POSTman software download kiya and then login and create workspaces and new https request - localhost:3000 adn type method and can save as a collection like home ,about
// you can share this collection to anyone by exporting


// const express = require('express')
// const app = express()
// const port = 3000

// // public is the standard folder name and we can access any file like hello.txt file from the server
// // Cannot access 'app' before initialization: error
// app.use(express.static('public')) -- it is middleware
// // example- localhost:3000/hello.txt


// This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
// req, res - object

// // localhost:3000/
// app.GET('/', (req, res) => {
// 	res.send('kendall Jenner')
// })

// app.GET('/about', (req, res) => {
	// 	res.send('about')
	// })
	// // localhost:3000/about
	
	// app.GET('/contact', (req, res) => {
		// 	res.send('contact')
		// })
		// // localhost:3000/contact

// app.GET('/blog', (req, res) => {
	// 	res.send('blog')
	// })
	// // localhost:3000/blog

// // app.GET('/blog/:slug/:second', (req, res) => {
	// // 	res.send(`fashion ${req.params.slug} and ${req.params.second}`)
	// // })
	// // localhost:3000/blog/sdhsd/sdgahsgd

	// app.GET('/blog/:slug', (req, res) => {
		// 	console.log(req)
		// 	// http://localhost:3000/blog?mode=dark
		// 	// console.log(req.params) // before ? 
		// 	// console.log(req.query)  // after ? 
		// 	res.send(`fashion ${req.params.slug}`)
		// })
		// // localhost:3000/blog/sdhsd/

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`)
// })
