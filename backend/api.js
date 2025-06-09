const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/add-to-production");
const db = mongoose.connection;

db.on("error", (error) => console.log("Error in Database Connection"));
db.on("open", () => console.log("Database Connected Successfully"));


const text = require("./storeText");
app.use("/text", text);

app.listen(1111, () => {
    console.log("Server is Live");
})