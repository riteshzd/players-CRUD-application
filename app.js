const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/player_database"
,{ useNewUrlParser: true });//the collection name is player_database

mongoose.connection.once("open",function(){
  console.log("connection is confirmed");
}).on("error",function(error){
  console.log("error in connction: ",error);
});

const player = require("./routes/player.route.js");
app.use(bodyParser.json());//to handle the json format
app.use(bodyParser.urlencoded({extended: false}));
app.use("/players",player);// the url starts with /players and is directed to player.router.js

app.listen(3000);
console.log("successfully connected to port 3000!!!");
