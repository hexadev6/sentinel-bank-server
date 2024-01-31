const { Schema, model } = require("mongoose");


const PaymentSchema = new Schema({
    "depoAmount": {
        type: String
    },
    "userEmail": {
        type: String
    },
    "userName":
        { type: String }
})

const Payments = model('Payments', PaymentSchema)
module.exports = Payments