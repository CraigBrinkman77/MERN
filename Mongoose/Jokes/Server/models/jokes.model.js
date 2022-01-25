const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	joke: {type: String,
			required: true},
	answer: {type: String}
},{timestamps:true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;