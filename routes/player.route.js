const express = require("express");
const router = express.Router();

const player_controller = require("../controllers/player.controller.js");

router.get("/test",player_controller.test);//url to test the server!!!

router.get("/search/:pos",player_controller.search);//url to search players in a particular position!!!

router.get("/sort/:pos",player_controller.sort");//url to sort players as per their ratings for a particular position!!!

router.post("/create",player_controller.create);//url to create a player object!!!

router.get("/:id",player_controller.read);//url to read a player object!!!

router.put("/:id/update",player_controller.update);//url to update a player object!!!

router.delete("/:id/delete",player_controller.delete);//url to delete a player object!!!

module.exports = router;
