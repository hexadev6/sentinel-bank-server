const Transactions = require('../../../models/TransactionsModel')


const allTransactions = async (req, res) => {
    try {
        const deposit = new Transactions(req.body) 
        const result = await deposit.save();
        return res.send(result);

    }
    catch (error) {
        console.log(data, result)

        return res.status(500).json({ message: "Transaction server Error" });
    }
}

module.exports = allTransactions;