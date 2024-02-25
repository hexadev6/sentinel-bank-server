const Loan = require("../../../models/loanModel");
const Notification = require("../../../models/notificationModel");

const updateLoan = async (req, res) => {
  try {
    const result = await Loan.findByIdAndUpdate(req?.params?.id, req.body, {
      new: true,
    });


    const foundLoan = await Loan.findOne({ _id: req?.params?.id, });
    const userEmail = foundLoan.email;
    if (req.body.status === "active") {
      const message = `Your application for a loan has been approved!`;
      const newNotification = new Notification({
        userEmail,
        message
      });
      await newNotification.save();
      io.emit('newNotification', { message, userEmail });

    } else {
      const message = `Your application for a loan has been decliend!`;
      const newNotification = new Notification({
        userEmail,
        message
      });
      await newNotification.save();
    }


    return res.status(200).json({ message: "success", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateLoan;
