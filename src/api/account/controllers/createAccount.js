const Account = require("../../../models/accountModel");

const createAccount = async (req, res, next) => {
    try {
        const { ac_name, ac_num,email, nid, no_name, number} = req.body;
        const newAccount = new Account({
            ac_name, ac_num,email, nid, no_name, number
        })
        const result = await newAccount.save()
        res.send({success: true, result});
    } catch (error) {
        next(error)
    }
}

module.exports = createAccount;