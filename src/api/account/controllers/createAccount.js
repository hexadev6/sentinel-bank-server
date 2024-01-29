const Account = require("../../../models/accountModel");

const createAccount = async (req, res, next) => {
    try {
        const newAccount = new Account(req.body);
        const result = await newAccount.save();
        res.send({success: true, result});
    } catch (error) {
        next(error)
    }
}

module.exports = createAccount;