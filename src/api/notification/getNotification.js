const Notification = require("../../models/notificationModel");

const getnotification = async (req, res) => {
  try {
    const userEmail = req?.params?.email;
    const result = await Notification.find({ userEmail }).sort({
      createdAt: -1,
    });
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

module.exports = getnotification;
