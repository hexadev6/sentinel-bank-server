const Loan = require("../../../models/loanModel");

const allLoan = async (req, res) => {
  try {
    const result = await Loan.find();
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = allLoan;
