const Deposits = require('../../../models/DepositHistoryModel')

const allDeposits = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Deposits.findByIdAndUpdate(
            id,
            { $set: { paymentStatus: true } },
        );

        // console.log(result)

        res.redirect('http://localhost:5173/dashboard/quickBanking');
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = allDeposits