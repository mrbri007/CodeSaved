// IMPORTANT NOTES

// Download from official site
// https://www.mongodb.com/try/download/community 

// Theory Concepts
// MangoDB- Its used for database connectivity
// Structure : database -- collection -- document [unique ID] -- object 
// data persist hota haii : data save hota haii even if we disconnect/Exist
// incogitive mode mai tab save nhi hota haii

// Mongodb Application
// connect with local device  pe connected mongodb: localhost 
// create an new datbase and collection and insert data
// Mongosh(termnial) - we can interact with database mongodb
// different commands
// show db 
// use db 

// now connect mongodb and vscode through extension [Through form] with connection string - mongodb://localhost:27017
// we can do anything like CRUD operation and it will reflect to the both ends

// this is how you can create an mongoDB playground files- 
// hello.mongodb.js
// we will create an new database, collection and all the operation related to db
// https://www.w3schools.com/mongodb/index.php


// MONGOOSE
// npm init -y and package.json : type: 'module'
// npm i mongoose
// npm i express


// https://mongoosejs.com/docs/guide.html

import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let a = await mongoose.connect('mongodb://localhost:27017/todo') // This connects to database:
const app = express()
const port = 3000

app.get('/', (req, res) => {
	const a = new todo({
		// title: "Elonmusk",
		// desc: "lorem ismpum",
		desc: 210000000000, // it will store as a string
		isDone: true,
		days: 34 // it will throw error [typevalue : number]
		// days : "sdfsdfsd" // it will throw error [typevalue : number]
	})

	// type casting failed
	a.save();  // It saves that object permanently in MongoDB
	res.send('Hello World!') //sends message to browser
})

app.get('/a', async (req, res) => {
	const data = await todo.findOne({}); //Find any one document from the collection.
	console.log(data);
	res.json({title: data.title, desc : data.desc}) //sends message to browser
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

// check if there is file inserted in db - todo