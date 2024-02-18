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
    paymentStatus:{
        type:Boolean,
        default:false
    },
    transactionId:{
        type:String
    },
    transactionDate: {
        type: String,
        required: true
    },
})

const Deposits = model('AllDeposits' , DepositHistoryModel)
module.exports =  Deposits