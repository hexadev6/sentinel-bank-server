const User = require("../../../models/User");
const Loan = require("../../../models/loanModel");

const singleUserLoan = async (req, res) => {
  try {
    const acc_num = req.body.acc_num;
    const result = await Loan.findOne({ acc_num: acc_num });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = singleUserLoan;
