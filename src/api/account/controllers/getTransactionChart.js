const Deposits = require('../../../models/DepositHistoryModel')

const getTrasactionChart = async(req,res)=>{
    try {
        const summary = await Deposit.aggregate([
            {
                $group: {
                    _id: {
                        transactionType: '$transactionType',
                        transactionDate: '$transactionDate'
                    },
                    count: { $sum: 1 }
                }
            }
        ]);

        res.json(summary);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
} 
module.exports =getTrasactionChart;