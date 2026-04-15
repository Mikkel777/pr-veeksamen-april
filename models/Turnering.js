const mongoose = require("mongoose");

const turnSchema = new mongoose.Schema({
    navn: {
        type: String,
        required: true
    },

    startdato: {
        type: Date,
        required: true
    },

    sluttdato: {
        type: Date
    },

    sted: {
        type: String
    },

    sport: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Turnering", turnSchema);