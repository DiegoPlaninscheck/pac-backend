const express = require("express");
const router = express.Router();

const { getClass, getClassById, createClass, updateClass, deleteClass } = require("./class.handler");

router.get("/", async (req, res) => {
    res.json(await getClass());
});

router.get("/:id", async (req, res) => {
    res.json(await getClassById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createClass(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateClass(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteClass(req.params.id));
});

module.exports = router;