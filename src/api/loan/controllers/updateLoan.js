const Loan = require("../../../models/loanModel");
const Notification = require("../../../models/notificationModel");

const updateLoan = async (req, res) => {
  try {
    const { status } = req.body || {};
    if (status === "active") {
      const { loanAmount, loanSubmit, duration, loanDue } = await Loan.findOne({
        _id: req.params.id,
      });
      const interest = loanSubmit === "monthly" ? 10 : 8;
      let profit = (parseInt(loanAmount) * interest) / 100;
      const loanPerM = loanSubmit === "monthly" ? 1 : 4;
      let perLoan =
        (parseInt(loanAmount) + profit) / (loanPerM * parseInt(duration));
      const updateInfo = {
        status: "active",
        interest,
        perLoan,
        loanAmount: parseInt(loanAmount) + parseInt(profit),
        profit,
        loanDue: parseInt(loanAmount) + parseInt(profit) - parseInt(loanDue),
      };

      const result = await Loan.findByIdAndUpdate(req.params.id, updateInfo, {
        new: true,
      });
     

      return res.status(200).json({ message: "success", data: result });
    } else {
      const { perLoan, submitDate } = req.body;
      console.log(req.body);
      const { loanAmount, loanSubmit, duration, loanDue, loanCompRang } =
        await Loan.findOne({
          _id: req.params.id,
        });

      let loanComplete = parseInt(loanCompRang) + parseInt(perLoan);
      let loanDueinfo = parseInt(loanDue) - parseInt(perLoan);

      const updateInfo = {
        loanCompRang: loanComplete,
        loanDue: loanDueinfo,
      };

      const result = await Loan.findByIdAndUpdate(req.params.id, updateInfo, {
        new: true,
      });

      // -------------
      return res.status(200).json({ message: "success", data: result });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = updateLoan;
