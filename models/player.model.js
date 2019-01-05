const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaySchema = new Schema({
  player:String,
  age:Number,
  club:String,
  position:String
  //player,age,club,position,rating
});

module.exports = mongoose.model("player",PlaySchema);
