const mongoose = require("mongoose")

const BankSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const details = mongoose.model("bankdetails", BankSchema)

module.exports = details
