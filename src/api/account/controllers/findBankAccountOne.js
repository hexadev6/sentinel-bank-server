const Account = require("../../../models/accountModel");

const findBankAccountOne = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const result = await Account.findOne({ _id: id });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findBankAccountOne;
