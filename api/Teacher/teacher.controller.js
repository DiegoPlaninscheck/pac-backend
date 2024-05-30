const express = require("express");
const router = express.Router();

const { getTeacher, getTeacherById, createTeacher, updateTeacher, deleteTeacher } = require("./teacher.handler");

router.get("/", async (req, res) => {
    res.json(await getTeacher());
});

router.get("/:id", async (req, res) => {
    res.json(await getTeacherById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createTeacher(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateTeacher(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteTeacher(req.params.id));
});

module.exports = router;