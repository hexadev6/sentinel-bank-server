const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema({
    "depoAmount": {
        type: String
    },
    "userEmail": {
        type: String
    },
    "userName":
        { type: String }
})

const Transactions = model('Transactions', TransactionSchema)
module.exports = Transactions