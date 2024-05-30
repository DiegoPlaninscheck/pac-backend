const express = require("express");
const router = express.Router();

const { getEvent, getEventById, createEvent, updateEvent, deleteEvent } = require("./event.handler");

router.get("/", async (req, res) => {
    res.json(await getEvent());
});

router.get("/:id", async (req, res) => {
    res.json(await getEventById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createEvent(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateEvent(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteEvent(req.params.id));
});

module.exports = router;