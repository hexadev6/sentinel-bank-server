const Loan = require("../../../models/loanModel");

const applyLoan = async (req, res, next) => {
  try {
    const loan = new Loan(req.body);
    const result = await loan.save();
    console.log(result);
    res.send({ success: true, result });
    // res.redirect(`/LoanOverview/${}`);
  } catch (error) {
    res.send({ success: false, error });
    console.log(error);
    next(error);
  }
};

module.exports = applyLoan;
