// MongoDB Atlas - YOU can connect remote database via compass or monogoshell and they provide server and manage everything related to database 

// Atlas - Building
// cluster - Flat

// 1. Go to ATLAS
// https://www.mongodb.com/cloud/atlas/register

// create a new cluster with FREE TIER
// choose AWS/Google/Azure provider

// COPY THE STRING AND CONNECT WITH MONGODB COMPASS
// now create an new database in cluster folder and you will see the result in MONGODB cluster 
// you can do the CRUD operation in both ends

// use('ecommerce');
// db.sales.insertMany([
// { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);

// Example structure:
// db.sales.aggregate([
// { /* stage 1 */ },
// { /* stage 2 */ },
// { /* stage 3 */ }
// ]);

// This is how you add multiple stages and get desired output
// Used in huge data collection
// we go through multiple stages and get desired output

// Example- Manufacturing car factory
// there are multiple stages like from raw to final output
// step 1 : Output --> Step 2 --> Input
// step 1 ka output stpe 2 ke liye input hota haii cus it helps to each stages 



// Aggregation Pipeline Example 1: 
// $match : Filter documents

// db.sales.aggregate([
// { $match: { category: "Fruit" } },
// { $project: { _id: 0, item: 1, price: 1 } }
// ]);

// $project : Select specific fields 
// db.sales.aggregate([
// { $project: { _id: 0, item: 1, price: 1 } }
// ]);


// $group : Group and calculate totals
// db.sales.aggregate([
// {
//  $group: {
//  _id: "$category",
//  totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
// }}
// ]);


// these operation is more optimized
