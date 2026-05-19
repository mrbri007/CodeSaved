const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// Tells Express that EJS is used as the template / view engine and Allows you to render .ejs files
// Express automatically looks for EJS files inside:
app.set("view engine", "ejs"); 

// Parses JSON data coming from the client 
app.use(express.json());

// Parses form data 
app.use(express.urlencoded({ extended: true }));

// Serves static files (CSS, JS, images)
// Makes them accessible to the browser
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Hello World!') 
	// res.render(index)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})








// Frontend (React)
//      ↓
// User clicks "Show Users"
//      ↓
// → Sends request to backend API (example: GET /api/users)
//      ↓
// Application Server (Node.js + Express)
//      ↓
// Controller function runs:
//    - It prepares createUser query
//    - Talks to the database (MongoDB)
//      ↓
// Database Server (MongoDB)
//      ↓
// Returns the data to Application Server
//      ↓
// Application Server sends response → Frontend
//      ↓
// Frontend displays data to userModels
