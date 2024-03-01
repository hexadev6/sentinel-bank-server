const {Schema, model} = require('mongoose')

const BalanceModel = new Schema({

    acc_Num: {
        type: Number,
        required: true

    },
    totalDeposit: {
        type: Number,
        default: 0
    },
    totalWithdraw: {
        type: Number,
        default: 0
    },
    totalBalance: {
        type: Number,
        default: 0
    },
})

const Balance = model('Balance', BalanceModel)
module.exports = Balance;