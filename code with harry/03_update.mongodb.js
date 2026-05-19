use('ecommerce');

// db.products.updateOne(
// 	{ name: "Wireless Mouse" },
// 	{ $set: { price: 1000 } }
// )

// $inc : increment by 10 
// db.products.updateMany(
// 	{ category: "Electronics" },
// 	{ $inc: { stock: 10 } }
// )

db.products.updateOne(
	{ name: "Wireless Mouse" },
	{ $push: { tags: "new" } }
)
