const Account = require("../../../models/accountModel");

const findByAccNum = async (req, res) => {
  try {
    const acc_num = req.params.accNum;
    const result = await Account.findOne({ acc_num: acc_num });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findByAccNum;
