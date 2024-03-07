const Balance = require("../../models/balanceModel");

const countBalance = async (req, res) => {
    try {
        // console.log('12 line==> ',req)
        const accNum = req.acc_Num;
        // console.log(accNum) // Assuming the account number is passed as a parameter
        // const { transactionType, amount } = req.body;

        // // Fetch the balance document based on the account number
        // const findBalance = await Balance.findOne({ acc_Num: accNum });

        // if (!findBalance) {
        //     return res.status(404).json({ error: "Balance not found" });
        // }

        // if (transactionType === "deposit") {
        //     findBalance.totalDeposit += amount;
        //     findBalance.totalBalance += amount;
        // } else if (transactionType === "withdraw") {
        //     findBalance.totalWithdraw += amount;
        //     findBalance.totalBalance -= amount;
        // } else {
        //     return res.status(400).json({ error: "Invalid transaction type" });
        // }

        return res.json({ message: "Balance updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = countBalance;
