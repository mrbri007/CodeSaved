// // Schema → Model → Document 

// // Schema- It defines structure of data
// // What fields exist
// // Their data types
// // Validation rules
// // Default values

// // Model- It defines:
// Created using a Schema
// Represents a collection in MongoDB
// Used to perform CRUD operations

// What is a Document?
// One record inside a collection
// Created using a Model

// // Simple words:
// // Document = Actual data stored in DB
// // When you create data using a model, you create a document.

// mongoose ko require karenge
const mongoose = require("mongoose");

// // This works, but no error handling.
// we have connected our local host database 

mongoose.connect("mongodb://127.0.0.1:27017/mongodbfile");

// // mongoose.connect("mongodb://127.0.0.1:27017/mongodbfile")
// // .then(() => console.log("MongoDB Connected"))
// // .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
	username: String,
	email: String,
	age: Number,
});

module.exports = mongoose.model("User", userSchema);

// // const userSchema = new mongoose.Schema({
// // 	username: {
// // 		type: String,
// // 		required: true,
// // 		trim: true
// // 	},
// // 	email: {
// // 		type: String,
// // 		required: true,
// // 		unique: true
// // 	},
// // 	age: {
// // 		type: Number,
// // 		min: 0
// // 	}
// // }, { timestamps: true });


// const User = mongoose.model("User", userSchema);

// models ke through hum crud operation karenge otherwise we can't	
// // we can do CRUD operation from here but hum route pe CRUD operation karenge so we will export


// In Mongoose, the model name is written in singular form, and Mongoose automatically pluralizes it to create the collection name in MongoDB, such as User becoming users.

// This is about Mongoose naming conventions.
// 👉 You write "User" (singular)
// 👉 MongoDB automatically creates/uses "users" (plural)

// "User" = Model name
// Model name is always singular & capitalized by convention