const { Schema, model } = require("mongoose");


const PaymentSchema = new Schema({
    "depoAmount": {
        type: String,
        require: true
    },
    "userEmail": {
        type: String,
        require: true
    },
    "userName":
    {
        type: String,
        require: true
    },

    "address":
    {
        type: String,
        require: true
    },
    "type":
    {
        type: String,
        require: true
    },
    "number":
    {
        type: String,
        require: true
    },
})

const Payments = model('Payments', PaymentSchema)
module.exports = Payments