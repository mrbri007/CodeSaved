// Fundamental of EXpress JS
// npm pacakge haii and framework haii
// framwork[structure or flow provide karta haii and you have to follow it and it contoal you] and library[you control everything]- at home vs at shop
// Manage everything from receiving the request and giving the request

// ye jo code haii isse request ko accept kiya jayega by server
// isme express ki sare features vo assign ho jayega app variable mai no we can use it in our way
// express is bydefault ek function hota hai

// by default / route pe hota haii
// www.youtube.com
// www.youtube.com/


// import express from 'express'
// const app = express()
// // you can cahnge the variable name but it is standard name


// // middleware - browser or client se jo bi request aata haii vo server accept karta haii and phir middleware ke pass jata haii pahele nd then request ko forward kiya jata haii to route handler and then response come
// // we can add info like user details - kaha se aaya and all 

// // koi bhi request aane ke pahle / ,/about ,/product ye app.use ke pass aata haii and then we write middleware code toh function aata haii with 3 value
// app.use(function (req, res, next) { // all route
// 	console.log('m1')
// 	next() // request ko forward karta haii next middlware ko
// })

// app.use(function (req, res, next) {
// 	console.log('m2')
// 	next()
// })


// // route and requestHandler [ye function hota haii and it contains 3 parameter] and middleware bhi hota haii
// app.get('/', (req, res) => { // specific
// 	res.send('Home page')
// })

// app.get('/about', (req, res) => {
// 	res.send('about page')
// })

// // //console pe dikhayega
// // app.get("/data", (req, res, next) => {
// // //   const error = new Error("Data not found!");
// // //   next(error);  // send error to error middleware
// //   next(new Error("Data not found!")); 
// // });

// //console pe dikhayega
// app.get("/data", function(req, res, next){
// 	return next(new Error("Data not found!")); // return isliye taki route ruk jaye aur aage na jaye and then error edfine karo
// });

// // ye fronetnd pe 
// // hamesha last mai likhte haii
// app.use((err, req, res, next) => {
// 	console.log(err.message);  // show error in console
// 	res.status(500).send("Something went wrong 😢"); // ye frontend pe jayega [repsonse haii]
// });


// // ususally hum port:3000 mention karte haii cus it is standard to use and we can change it 
// app.listen(3000, () => {
// 	console.log('Server is running on http://localhost:3000')
// })

// server restart automatically nhi hota but we have to write command for every changes but we have na solution nodemon pacakge
// npm i nodeman -g
// nodemon script.js

// after writing : node script.js and do this
// ctrl + c : off and clear command
// run nodeman command


// Middlewares  request aur response ke beech mein communication handle karta hai. Socho ise ek chowkidaar ki tarah jo gate ke andar jaane se pehle aur baahar aane se pehle sab cheezein check karta hai.
// Ek common use case JavaScript mein express.js framework ke saath hai. Imagine tum ek website bana rahe ho jahan users apne profile ko update kar sakte hain. Lekin tum chahte ho ki sirf logged-in users hi apna profile update kar sakein. Ab yeh middleware ki madad se aasan ho jaata hai.
// Jab user apna profile update karne ki request bhejta hai, woh request sabse pehle middleware ke through jaati hai. Yeh middleware check karta hai ki user logged-in hai ya nahi. Agar user logged-in hai toh request aage badhti hai aur profile update ho jaata hai. Lekin agar user logged-in nahi hai toh middleware request ko rok deta hai aur user ko login karne ke liye kehta hai.
// Toh, Middlewares ka basic kaam hai request aur response ke beech mein aane wali cheezon ko control karna, jaise authentication, logging, data validation, etc.




