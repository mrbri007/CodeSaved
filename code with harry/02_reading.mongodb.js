use('ecommerce');

// to READ data from the docuements created under collection, we have to find() 

// Gets all documents
// db.products.find()

// Show me all products in a clean, beautiful format.
// db.products.find().pretty()

// Without pretty() 
// { "_id" : ObjectId("..."), "name" : "Wireless Mouse", "price" : 799 }

// With pretty() 
// {
//   "_id" : ObjectId("..."),
//   "name" : "Wireless Mouse",
//   "price" : 799,
//   "category" : "Electronics"
// }

// Filter by Field
// db.products.find({category : "Electronics"})

// We will get an error if we try to specify both 0 d 1 in the same object.an
// It will only display the name and price fields
// db.products.find({}, {name: 1, price: 1})    

// Using Comparison Operators
// db.products.find({ price: { $gt: 1000 } }) 

// AND OPERATOR 
// db.products.find({ price: { $gte: 1000, $lte: 50000 } })

// OR OPERATOR
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// Logical Operators
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// Projection (Select Specific Fields)
// db.products.find({}, { name: 1, price: 1, _id: 0 })

// USED IN PAGINATION
// Sorting and Limiting
// db.products.find().sort({ price: -1 }).limit(2)

// Breakdown:

// db.products.find()
// → Fetch all documents from the products collection.
// .sort({ price: -1 })
// → Sort the results by the price field in descending order.
// (Highest price → lowest price)
// .limit(2)
// → After sorting, return only the top 2 documents.
// In simple words:
// "Give me the 2 most expensive products from the products collection."

// db.products.find().sort({ price: -1 }).skip().limit(2)
// It means:
// find() → get all products
// sort({ price: -1 }) → sort by highest price first
// skip(2) → skip the first 2 documents
// limit(2) → after skipping, show next 2 documents
// In simple words:
// "Show me products ranked 3rd and 4th in price."

// db.products.find().sort({ price: -1 }).skip(0).limit(10)
// db.products.find().sort({ price: -1 }).skip(10).limit(10)
// db.products.find().sort({ price: -1 }).skip(20).limit(10)