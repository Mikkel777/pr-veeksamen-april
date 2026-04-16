const mongoose = require("mongoose");

const lagSchema = new mongoose.Schema({
    navn: {
        type: String,
        required: true
    },
    kontaktNavn: {
        type: String,
        required: true
    },
    kontaktPerson: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Lag", lagSchema);