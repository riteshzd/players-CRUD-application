const Product = require("../models/player.model.js");

exports.test = function(req,res){
  res.send("looks quite good!!!");
} //the basic testing querry!!!

//the function to create a new Player object!!!
exports.create = function(req,res){
  let product = new Product({
    player : req.body.player,
    age : req.body.age,
    club : req.body.club,
    position : req.body.position
  });

  product.save (function(error){
    if(error){
      return(error);
    }
    res.send("player created successfully!!!");
  });

};

//the function to read a Player object in json
exports.read = function(req,res){
  //var idd="5c306ea8617f7d12101711c9";
  Product.findById(req.params.id,function(error,product){
    if(error){
      return(error);
    }

    res.send(product);
  });

};

//the function to update a Player object!!! 
exports.update = function(req,res){
  Product.findByIdAndUpdate(req.params.id,{$set:req.body},function(error){
    if(error){
      return(error);
    }
    res.send("player is updated successfully!!!");
  });
}


//the function to delete a Player object!!!
exports.delete = function(req,res){
  Product.findByIdAndRemove(req.params.id,function(error){ // player is removed with reference to id
    res.send("player removed successfully!!!");
  });
};
