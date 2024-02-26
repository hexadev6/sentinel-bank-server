const Account = require("../../../models/accountModel");

const getUserAccounts = async (req, res, next) => {
  try {
    const email = req.body.email;
    const query = { holderEmail: email };
    const result = await Account.find(query);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getUserAccounts;
