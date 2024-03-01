const Deposits = require('../../../models/DepositHistoryModel')
// const countBalance = require('../../transaction/countBalance');
const Balance = require("../../../models/balanceModel");


const allDeposits = async (req, res) => {
    try {
        const id = req.params.id
        const { transactionType, amount } = req.body;
        const result = await Deposits.findByIdAndUpdate(
            id,
            { $set: { paymentStatus: true } },
        );

        // res.send({ sucess: true })
        res.redirect('https://ornate-kulfi-347059.netlify.app/dashboard/quickBanking');
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = allDeposits