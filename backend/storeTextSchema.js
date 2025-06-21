const mongoose = require("mongoose");


const tableStrucuture = mongoose.Schema({
    text: { type: String, required: true }
});

module.exports = mongoose.model("MyText", tableStrucuture);
