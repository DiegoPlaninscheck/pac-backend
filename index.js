const express = require("express");
const cors = require("cors");
const router = require("./router.js");
const app = express();

// var bodyParser = require('body-parser')

const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(process.env.RUN_PORT, () => { console.log(`Server started on port http://localhost:${process.env.RUN_PORT}`) });