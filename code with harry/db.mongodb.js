// CREATE DATABASE
use('schoolDB');

// CREATE COLLECTION
// db.createCollection("students")

// // INSERT DATA
// db.students.insertOne({
//   name: "Brijesh",
//   age: 20
// });
// db.students.insertMany([
//   {
//     name: "Brijesh",
//     age: 20
//   },
//   {
//     name: "Rahul",
//     age: 21
//   },
//   {
//     name: "Priya",
//     age: 19
//   }
// ]);


// READ DATA
// let a = db.students.find({age : 20})
// let a = db.students.findOne({age : 20})
// console.log(a);
// console.log(a.toArray());
// console.log(a.count()) ;

// UPDATE DATA
// db.students.updateOne(
//   { name: "Brijesh" }, 
//   { $set: { name: "Kendall Jenner" } }
// )
// db.students.updateMany(
//   { name: "Brijesh" }, 
//   { $set: { name: "Kendall Jenner" } }
// )

// DELETE DATA
// It will delete the documents
// db.students.deleteOne(
//   { name: "Rahul" }
// )
// db.students.deleteMany(
//   { name: "Kendall Jenner" }
// )

// we will use special operator in mongoDB