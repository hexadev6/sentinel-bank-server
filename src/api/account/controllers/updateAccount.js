const Account = require("../../../models/accountModel");
const Notification = require("../../../models/notificationModel");

const updateAccount = async (req, res) => {
  try {
    const result = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });


    const foundAccount = await Account.findOne({ _id: req.params.id, });
    // console.log(foundAccount)

    const userEmail = foundAccount.holderEmail;
    if (req.body.status === "active") {
      const message = `Your account has been activated!`;
      const newNotification = new Notification({
        userEmail,
        message
      });
      await newNotification.save();
      // io.emit('newNotification', { message, userEmail });

    } else {
      const message = `Your account has been deactivated!`;
      const newNotification = new Notification({
        userEmail,
        message
      });
      await newNotification.save();
    }

    return res
      .status(200)
      .send({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateAccount;
