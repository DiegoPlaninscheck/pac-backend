const express = require("express");
const router = express.Router();

const { getMenu, getMenuById, createMenu, updateMenu, deleteMenu } = require("./menu.handler");

router.get("/", async (req, res) => {
    res.json(await getMenu());
});

router.get("/:id", async (req, res) => {
    res.json(await getMenuById(req.params.id));
});

router.post("/", async (req, res) => {
    console.log("Body= " + req.body);
    res.json(await createMenu(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateMenu(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteMenu(req.params.id));
});

module.exports = router;