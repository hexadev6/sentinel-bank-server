const Deposit = require('../../../models/DepositHistoryModel');
const Withdraw = require('../../../models/WithdrawHistoryModal');

const transactionSummary = async (req, res) => {
    const accNum = parseInt(req.params?.accNum);
    console.log(accNum);
    

    try {
        const depositSummary = await Deposit.aggregate([
            {
                $match: {
                    acc_Num: accNum, 
                    transactionType: 'deposit'
                }
            },
            {
                $group: {
                    _id: {
                        transactionType: '$transactionType',
                        transactionDate: '$transactionDate',
                        amount: '$amount',
                        accNum: '$acc_Num'
                        
                    },
                }
            }
        ]);

        // const withdrawSummary = await Withdraw.aggregate([
        //     {
        //         $group: {
        //             _id: {
        //                 transactionType: '$transactionType',
        //                 transactionDate: '$transactionDate'
        //             },
        //             totalAmount: { $sum: '$amount' },
        //             count: { $sum: 1 }
        //         }
        //     }
        // ]);

        const summary = {
            depositSummary,
            // withdrawSummary
        };

        res.json(summary);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = transactionSummary;
