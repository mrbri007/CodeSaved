const express = require('express')
const app = express()
const port = 3000

// iss file mai hamne model ko export kiya haii and ek variable or constant mai store kar diya haii and now we can use this variable as createUser model to do CRUD operation in routing 
// module.exports = mongoose.model("User", userSchema);

const userModels = require('./userdb');

app.get('/', (req, res) => {
	res.send('Hello World!')
})

// mongoose se related jo bhi code haii vo async nature ka hota haii
// ye jo code haii vo async nature ka haii toh we will use async and await
// app.get('/create', async (req, res) => {
// 	let createdUser = await userModels.create({
// 		username: "Brijesh",
// 		email: "brijesh@gmail.com",
// 		age: 22
// 	});
// 	res.send(createdUser);
// })

// hamne ek aur user create kiya, so you can read query karne par 2 user show honge
app.get('/create', async (req, res) => {
	let createdUser = await userModels.create({
		username: "kendall jenner",
		email: "kendall@gmail.com",
		age: 22
	});
	res.send(createdUser);
})

// Make sure the file you’re editing is the file you’re running

app.get('/update', async (req, res	) => {
	let b = await userModels.findOneAndUpdate(
		{username: "Brijesh"}, // find by username, email or etcs in document
		{age: 34}, // update one
		{new:true} //return the updated value
	)
	res.send(b)
})
// first /update and /read

app.get('/read', async (req, res) => {
	// find always return an array - chahe ek bhi user na ho [blank array]
	let c = await userModels.find() // return all the user created 
	// let c = await userModels.find({age : 34}) // thoda specific

	// agr findOne use kar rhe ho to - retuen object and none user - null object
	// let c = await userModels.findOne({age : 30}) 
	// let c = await userModels.findOne({age : 34}) // first data will show
	res.send(c)
})

app.get('/delete', async (req, res) => {
	let c = await userModels.findOneAndDelete({username: "Brijesh"})
	res.send(c)
})
// first /delete and /read


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


