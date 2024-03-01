const Deposit = require('../../../models/DepositHistoryModel');
const User = require("../../../models/User")

const Statistics = async (req, res) => {

    try {

        const totalTransaction = await Deposit.estimatedDocumentCount()
        const totalUser = await User.estimatedDocumentCount()


        const obj = {
            totalTransaction,
            totalUser
        }
        res.json(obj)
        console.log(obj);



    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = Statistics;