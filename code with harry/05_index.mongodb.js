use('ecommerce');

// db.sales.find()
// db.sales.getIndexes() 

// Meaning:
// _id index → always created by MongoDB
// price index → you created an index on price
// db.sales.createIndex({ price: 1 }) 
db.sales.getIndexes() 