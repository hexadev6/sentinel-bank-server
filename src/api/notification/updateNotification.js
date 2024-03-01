// const Account = require("../../../models/accountModel");
const Notification = require("../../models/notificationModel");

const updateNotification = async (req, res) => {
    try {
        const result = await Notification.findByIdAndUpdate(req?.params?.id, req?.body, {
            new: true,
        });
        console.log(result)
        return res.send(result)

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = updateNotification;
