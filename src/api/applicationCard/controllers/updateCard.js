const applycard = require("../../../models/applycard");
const Notification = require("../../../models/notificationModel")
const updateCard = async (req, res) => {
  try {
    const result = await applycard.findByIdAndUpdate(
      req?.params?.id,
      req?.body,
      {
        new: true,
      }
    );

    const foundCard = await applycard.findOne({ _id: req?.params?.id, });
    const userEmail = foundCard.email;
    const card = foundCard.card
    // console.log(card, foundCard)

    if (req.body.status === "issue") {
      const message = `Your application for a ${card} has been issued!`;
      const newNotification = new Notification({
        userEmail,
        message
      });
      await newNotification.save();
      io.emit('newNotification', { message, userEmail });

    } else {
      const message = `Your application for a ${card} has been decliend!`;
      const newNotification = new Notification({
        userEmail,
        message
      });
      await newNotification.save();
    }

    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateCard;
