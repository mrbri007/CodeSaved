// Database types - NO SQL AND SQL 
// NOSQL - data object ke form mai store hota haii ] MongoDB
// SQL - data table ke form mai store hota haii [rows and coloums]] mysql

const moongoose = require("moongoose");

// Database>Collection>Document>fields?ID
// Documents are JSON-like (BSON)
// MongoDB stores BSON (Binary JSON), not plain JSON.

// Install & Setup
// MongoDB Community Server - DOWNLOAD [MongoDB Compass]
// Mongo Shell (mongosh) Commands-
// show dbs
// use ecommerce
// db
// show collections
// CRUD:
// db.users.insertOne()
// db.users.find()
// db.users.findOne()
// db.users.updateOne()
// db.users.deleteOne()

// Filtering & Operators (VERY IMPORTANT)
// db.users.find({ age: { $gte: 18 } })
// Projection (Return Selected Fields)
// Sorting, Limiting, Pagination

// MongoDB Atlas (Cloud) - to host database on cloud

// request sabse pahele application server ke pass jata haii and do the operation and if needed data related query and then perform database server operation

// 2 types of server in Backend 
// 1. Application Server- route ko manage karta haii [req-res]
// 2. Database Server - data se related operation karta haii

// moogoose ke helps se, we connect both server [Application and Database] like we set up communication between them.

// code and example
// moongoose.connect  -> database create 
// model create  = database mai collection create hota haii
// create = document create hota haii

// npm init -y
// npm i express
// npm i nodemon
// npm i moongoose

// GET → read
// POST → create
// PUT/PATCH → update
// DELETE → delete