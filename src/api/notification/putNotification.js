const Notification = require("../../models/notificationModel")

const putnotification = async (req, res) => {
    const notificationId = req.params.id;

  try {
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { $set: { status: true } },
      { new: true }
    );
  console.log(notification);
    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }

    res.json({ success: true, notification });
    console.log('noti',notification);
  } catch (error) {
    console.error('Error updating notification status:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = putnotification