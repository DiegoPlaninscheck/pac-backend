const express = require("express");
const router = express.Router();

const { genSaltSync, hashSync } = require("bcrypt");

const { getUser, getUserById, createUser, updateUser, deleteUser } = require("./user.handler");

router.get("/", async (req, res) => {
    res.json(await getUser());
});

router.get("/:id", async (req, res) => {
    res.json(await getUserById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);

    const salt = genSaltSync(10);
    req.body.senhaUsuario = hashSync(req.body.senhaUsuario, salt);

    res.json(await createUser(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateUser(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteUser(req.params.id));
});

module.exports = router;