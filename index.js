const express = require("express");
const cors = require("cors");
const router = require("./router.js");
const app = express();

// const { exportToExcel } = require("./api/Registration/registration.handler.js");

const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Hello world");
});

// app.post("/exportToExcel", async (req, res) => {
//     const worksheet = await exportToExcel(req.body);

//     console.log(worksheet);

//     res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
//     res.setHeader("Content-Disposition", "attachment; filename=" + "cadastros.xlsx");

//     worksheet.xlsx.write(res);

//     res.attachment("cadastro.xlsx");

//     res.send(worksheet);
// });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(process.env.RUN_PORT, () => { console.log(`Server started on port http://localhost:${process.env.RUN_PORT}`) });