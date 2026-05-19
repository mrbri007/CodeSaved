// Module -5
// Form Handling in the backend process via frontend library, framework or template engine

// COOKIES & SESSIONS — SUPER SIMPLE EXPLANATION
// Real - life Example: School ID Card
// Cookies = Your school ID card
// Small information written on a card that YOU carry.
// Example on your ID card:
// Your roll number
// Your name
// Your class
// 	This stays with you.
// Teachers check it whenever you enter the school.
// Cookie = small data stored in the user's browser.
// Sessions = Teacher’s Register
// A big notebook kept by the teacher.
// Inside it, teacher writes:
// Which student has entered
// What they are doing
// Their attendance
// Session = data stored on the server.
// The ID card(cookie) helps the teacher find your details in the register(session).

// SUPER SIMPLE SUMMARY
// Thing	Real Life	Stored Where ?
// 	Cookie	Student ID card	Browser(user)
// Session	Teacher's register	Server

// Cookie = “Who are you ?”
// Session = “What are you allowed to do?”

// npm i cookie-parser 

// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.json());
// app.use(express.urlencoded({ encoded: true }));

// app.get('/', (req, res) => {
// 	res.send('Hello World!')
// })

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`)
// })

// HOW IT WORKS IN NODE.JS (Simple Explanation)
// Step 1:
// User logs in.
// Step 2 (Server creates session):
// Server saves user info in memory/database:
// Session ID: XJ72A91
// User: Raj
// Role: Student
// Step 3 (Server sends cookie):
// Server gives the user a cookie like:
// session_id = XJ72A91
// This cookie is like:
// “Your ID card number = XJ72A91”
// When the user comes back later:
// Browser sends:
// session_id = XJ72A91
// Server checks:
// Is XJ72A91 in my register?
// Yes → Raj is logged in
// User doesn’t need to login again.
// Just like a student doesn’t have to introduce themselves daily.

// Imagine you’re at McDonald’s.
// Cookie = Token number
// They give you a token: Token #52
// You keep this in your hand.
// Session = Kitchen order list

// Kitchen has:
// Token 52 → McAloo Tikki
// Token 53 → Fries
// Token helps server know which order belongs to you.

// TECHNICAL SUMMARY (Easy words)
// 🔹 Cookie
// Small data
// Stored on user’s browser
// Sent with every request
// Not secure alone

// 🔹 Session
// Large/secure data
// Stored on server
// Identified using cookie
// Used for login/authentication





// 1. app.use(express.json());
// What it does:
// This line tells Express:
// “If someone sends me data in JSON format, please read it.”
// Real-life example:
// Imagine you get a letter written in English.
// You need to know English to read it.
// express.json() = “I can read English letters.”
// When is JSON used?
// When frontend sends:
// {
//   "name": "Brijesh",
//   "age": 21
// }
// Without this line, Express won’t understand the data.
// 2. app.use(express.urlencoded({ extended: true }));
// (You wrote encoded: true, but correct is extended: true)
// What it does:
// This tells Express:
// “If someone sends data from a HTML form, I can read it too.”
// Example form:
// <form method="POST">
//   <input name="email" />
//   <input name="password" />
// </form>
// Browser sends this as URL-encoded text:
// email=abc%40gmail.com&password=1234
// express.urlencoded() helps Express read this properly.