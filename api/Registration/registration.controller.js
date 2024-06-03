const express = require("express");
const router = express.Router();

const { getRegistration, getRegistrationById, createRegistration, updateRegistration, deleteRegistration } = require("./registration.handler");

router.get("/", async (req, res) => {
    res.json(await getRegistration());
});

router.get("/:id", async (req, res) => {
    res.json(await getRegistrationById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " , req.body);
    res.json(await createRegistration(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateRegistration(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteRegistration(req.params.id));
});

module.exports = router;