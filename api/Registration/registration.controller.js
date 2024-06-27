const express = require("express");
const router = express.Router();

const { getRegistration, getRegistrationById, createRegistration, exportToExcel, updateRegistration, deleteRegistration, getRegistrationAddress } = require("./registration.handler");

router.get("/", async (req, res) => {
    res.json(await getRegistration());
});

router.get("/:id", async (req, res) => {
    res.json(await getRegistrationById(req.params.id));
});

router.get("/getRegistrationAddress", async (req, res) => {
    console.log("getRegistrationAddress");
    res.json(await getRegistrationAddress());
});

router.post("/", async (req, res) => {
    console.log("Body= ", req.body);
    res.json(await createRegistration(req.body));
});

router.post("/exportToExcel", async (req, res) => {
    const worksheet = await exportToExcel(req.body);

    console.log(worksheet);

    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    res.setHeader("Content-Disposition", "attachment; filename=" + "cadastros.xlsx");

    worksheet.xlsx.write(res);

    res.sendFile(worksheet);
});

router.put("/:id", async (req, res) => {
    res.json(await updateRegistration(req.body, req.params.id));
});

router.delete("/:id", async (req, res) => {
    res.json(await deleteRegistration(req.params.id));
});

module.exports = router;