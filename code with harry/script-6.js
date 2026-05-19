// Introduction to Express Js 
// Middlewares in Express Js

// Middleware = a helper that works between the request and the response.
// Example like a 5-year-old 
// Think of a security guard at school:
// You come to school (request)
// Guard checks your bag (middleware)
// Then you enter the class (response)

// Middleware checks or changes things before your app gives the final answer.

// An Express application can use the following types of middleware:
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

const express = require('express')
const app = express()
const port = 3000


// app.use(express.static('public'))
// http://localhost:3000/newtext.txt



// next(); // goes to the next step

// Middleware-1
// app.use((req, res, next) => {
  //   console.log('m1')
  //   next() // isko remove karne pe site crash ho jayegi meaning reponse utak jayega cus we are not getting any kinda response just m1 print
  // })

// app.use((req, res, next) => {
//   console.log('m1')
//   res.send('fdfsdfsdfsdfs!') // ye likhne par next() ki jarurat nhui haii cus reponse deliver ho chuka haii
//   //   next()
// })

const fs = require('fs') 
app.use((req, res, next) => {
  // console.log('czxczx')
  console.log(req.headers) // you will get header propeties 
  req.kendallfunckingjenner= 'obj : this is how you can modify the request'
  fs.appendFileSync("kendall.txt", `${Date.now()} is a ${req.method} \n`)
  // console.log(`${Date.now()} is a ${req.method}`) // we can write this shit into file
  next()
})

// NOTE : YOU NEED TO REFRESH THE PAGE TO SEE THE CHANGES IN TERMINAL

// Middleware-2
app.use((req, res, next) => {
  console.log('m2')
  req.kendallfunckingjenner= 'order is important in middleware' // request object got updated
  next()
})
// and then it will go to route handler

// In Express, everything that has (req, res, next) is middleware.
// this function is also a type of middleware.
// There are two types you’re seeing:
// 1️⃣ Normal middleware (works for ALL routes)
// app.use((req, res, next) => {
//   console.log("I run for every request!");
//   next();
// });
// Think of this like a school gate guard who checks EVERYONE.
// 2️⃣ Route middleware (works only for specific route)
// app.get("/profile", (req, res, next) => {
//   console.log("Checking user before profile page");
//   next();
// })
// Think of this like a teacher checking homework only for one classroom.

// maine / or /about request kiya and jo bhi route match hua usne reposnd kiya
app.get('/', (req, res) => {
  res.send('Hello World! Kendall jenner')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get("/profile", (req, res, next) => {
  console.log("Checking user before profile page");
  next();
}, (req, res) => {
  res.send("Welcome to profile");
});

app.get('/contact', (req, res) => {
  res.send('Hello contact!' + req.kendallfunckingjenner)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



