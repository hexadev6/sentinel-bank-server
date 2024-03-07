const User = require("../../../models/User");
const Loan = require("../../../models/loanModel");

const singleUserLoan = async (req, res) => {
  try {
    const id = req?.params?.id;
    // console.log(id);

    const result = await Loan.findOne({ _id: id });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = singleUserLoan;
