const express = require("express");
const router = express.Router();

const { getAddress, getAddressById, createAddress, updateAddress, deleteAddress } = require("./address.handler");

router.get("/", async (req, res) => {
    res.json(await getAddress());
});

router.get("/:id", async (req, res) => {
    res.json(await getAddressById(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await createAddress(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await updateAddress(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteAddress(req.params.id));
});

module.exports = router;