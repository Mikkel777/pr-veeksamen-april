const mongoose = require("mongoose");

const lagSchema = new mongoose.Schema({
    navn: String,
    kontaktNavn: String,
    kontaktPerson: String
});

module.exports = mongoose.model("lag", lagSchema);