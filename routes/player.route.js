const express = require("express");
const router = express.Router();

const player_controller = require("../controllers/player.controller.js");

router.get("/test",player_controller.test);

router.post("/create",player_controller.create);

router.get("/:id",player_controller.read);

router.put("/:id/update",player_controller.update);

router.delete("/:id/delete",player_controller.delete);

module.exports = router;
