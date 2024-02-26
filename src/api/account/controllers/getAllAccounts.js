const Account = require("../../../models/accountModel")

const getAllAccounts = async (req, res, next) => {
    try {
        const result = await Account.find().sort({_id: -1});
        res.send(result);
    } catch (error) {
        next(error)
    }
}

module.exports = getAllAccounts;