const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/product_database"
,{ useNewUrlParser: true });

mongoose.connection.once("open",function(){
  console.log("connection is confirmed");
}).on("error",function(error){
  console.log("error in connction: ",error);
});

const product = require("./routes/player.route.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/products",product);

app.listen(3000);
console.log("successfully connected to port 3000!!!");
