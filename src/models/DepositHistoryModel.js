const { Schema, model } = require('mongoose')

const DepositHistoryModel = new Schema({
    acc_Num: {
        type: Number,
        required: true
    },                     
    userEmail: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
    },
    transactionType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    depsitBy: {
        type: String,
        required: true
    },
    depsitId: {
        type: String,
        required: true
    },
    transactionDate: {
        type: String,
        required: true
    },
})

const Deposits = model('AllDeposits' , DepositHistoryModel)
module.exports =  Deposits