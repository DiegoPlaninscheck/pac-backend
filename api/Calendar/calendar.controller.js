const express = require("express");
const router = express.Router();

const { getCalendar, getCalendarById, createCalendar, updateCalendar, deleteCalendar } = require("./calendar.handler");

router.get("/", async (req, res) => {
    res.json(await getCalendar());
});

router.get("/:id", async (req, res) => {
    res.json(await getCalendarById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createCalendar(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateCalendar(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteCalendar(req.params.id));
});

module.exports = router;