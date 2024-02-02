const Deposits = require('../../../models/DepositHistoryModel')

const allDeposits = async (req, res) => {
    try {
        const depoData = new Deposits(req.body)
        const result = await depoData.save()
        // console.log(result)
        res.send(result)
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports= allDeposits