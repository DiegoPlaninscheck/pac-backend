const express = require("express");
const router = express.Router();

const { getStudent, getStudentById, createStudent, updateStudent, deleteStudent } = require("./student.handler");

router.get("/", async (req, res) => {
    res.json(await getStudent());
});

router.get("/:id", async (req, res) => {
    res.json(await getStudentById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createStudent(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateStudent(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteStudent(req.params.id));
});

module.exports = router;