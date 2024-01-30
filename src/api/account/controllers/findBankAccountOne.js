const Account = require("../../../models/accountModel");

const findBankAccountOne = async (req, res) => {
  try {
    const ac_num = req.query?.ac_num;
    console.log(ac_num);
    const result = await Account.findOne({ ac_num: ac_num });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findBankAccountOne;
