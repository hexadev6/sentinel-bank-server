const { Schema, model } = require('mongoose')

const WithdrawHistoryModel = new Schema({
    acc_Num: {
        type: String,
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
    withdrawTo: {
        type: String,
        required: true
    },
    withdrawId: {
        type: Number,
        required: true
    },
    transactionDate: {
        type: Date,
        required: true
    },
})

const Withdraw = model('AllWithdraw' , WithdrawHistoryModel)
module.exports =  Withdraw