// this is how we create an schema in db
// condition impose kar rhe haii cus secuity enchanced hoti haii otherwise hame monogdb mai if -else condition likhna padta haii

import mongoose from "mongoose";
const hello = new mongoose.Schema({
	// title : String,
	title : { type: String, required : true,  default: "hey"},
	desc : String,
	isDone : Boolean,
	days : Number
});

export const todo = mongoose.model('todo', hello);

// https://mongoosejs.com/docs/schematypes.html