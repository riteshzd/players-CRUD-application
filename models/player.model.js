const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema used for the Player collection!!!
const PlaySchema = new Schema({
  name:String,
  age:Number,
  club:String,
  position:String,
  rating:Number
  //name,age,club,position,rating
});

module.exports = mongoose.model("player",PlaySchema);
