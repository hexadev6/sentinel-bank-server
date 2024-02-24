const Deposit = require('../../../models/DepositHistoryModel');
const Withdraw = require('../../../models/WithdrawHistoryModal');

const transactionSummary = async (req, res) => {
    const accNum = parseInt(req.params?.accNum);
    // console.log(accNum);

    try {
        const summary = await Deposit.aggregate([
            {
                $match: {
                    acc_Num: accNum,
                    transactionType: { $in: ['deposit', 'withdraw'] }
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
            },
            {
                $group: {
                    _id: null,
                    depositSummary: {
                        $push: {
                            $cond: {
                                if: { $eq: ['$_id.transactionType', 'deposit'] },
                                then: '$_id',
                                else: null
                            }
                        }
                    },
                    withdrawSummary: {
                        $push: {
                            $cond: {
                                if: { $eq: ['$_id.transactionType', 'withdraw'] },
                                then: '$_id',
                                else: null
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    depositSummary: {
                        $filter: {
                            input: '$depositSummary',
                            as: 'deposit',
                            cond: { $ne: ['$$deposit', null] }
                        }
                    },
                    withdrawSummary: {
                        $filter: {
                            input: '$withdrawSummary',
                            as: 'withdraw',
                            cond: { $ne: ['$$withdraw', null] }
                        }
                    }
                }
            }
        ]);

        res.json(summary[0]);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = transactionSummary;
