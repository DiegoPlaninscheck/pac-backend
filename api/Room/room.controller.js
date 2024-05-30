const express = require("express");
const router = express.Router();

const { getRoom, getRoomById, createRoom, updateRoom, deleteRoom } = require("./room.handler");

router.get("/", async (req, res) => {
    res.json(await getRoom());
});

router.get("/:id", async (req, res) => {
    res.json(await getRoomById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createRoom(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateRoom(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteRoom(req.params.id));
});

module.exports = router;