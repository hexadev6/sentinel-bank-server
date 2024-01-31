const Account = require("../../../models/accountModel");

const allAccount = async (req, res) => {
  try {
    const result = await Account.find();
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = allAccount;
