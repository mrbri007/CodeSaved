// Fundamental Of JS before starting the Backend Development 
// From Sheriyans Coding School 

// array and object
// function Return
// Async Js

// var arr = [1, 2, 3, 4, 5] // it can contain different datatypes value
// Array : map, filter , find , foreach, indexof
// arr ke har ek element pe iterate hoga
// arr.forEach(function(val){
// 	console.log(val);
// 	console.log(val + 100);
// 	console.log(val + 'Hello');
// })


// when you have to create a new array from the existing one
// var newArr = arr.map(function (val) {
// 	return val
// 	// return val*3
// 	// return 12
// })
// console.log(newArr);


// when you have to filter from the array 
// var newArr = arr.filter(function (val) {
// 	if (val > 3) {
// 		return true; // true karne se value new array mai jayegi
// 	} else {
// 		return false; //optional
// 	}
// })
// console.log(newArr);


// when you have to find first element from the array 
// var arr = [1, 2, 2, 3, 4, 5]
// var newArr = arr.find(function (val) {
// 	if (val == 2) { return val; }
// 	if (val == 12) { return val; } // undefined
// })
// console.log(newArr);


// console.log(arr.indexOf(2)); //1 :true
// console.log(arr.indexOf(12)); //-1 :false


// var obj = {
// 	name : "kendall",
// 	age : 12
// }
// // console :  obj
// // console :  obj.name
// // console :  obj.age
// // obj.age = 17; // value update ho gyi
// // console :  obj.age
// // you can freeze thr obj value 
// // now you cant update the value 
// // Object.freeze(obj);
// // obj.age = 89;


// main stack - sync nature code [first execute]
// // side stack mai processing hota haii but execute - async nature code [then they go to main stack and run ]
// async function hello(){
// 	var a = await fetch(`https://randomuser.me/api/`);
// 	var b = await a.json();
// 	// console.log(b); // value hame object ke form mai milta haii
// 	// console.log(b.results);
// 	console.log(b.results[0].name);
// }
// hello()
