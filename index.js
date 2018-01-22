const express = require("express");
const bodyParser = require("body-parser");
const rumahController = require("./controller/rumahcontroller")
const custController = require ("./controller/custcontroller")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use("/api", rumahController)
app.use("/custapi", custController)

app.listen(5000);