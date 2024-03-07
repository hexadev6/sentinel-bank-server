const Notice = require("../../models/noticeModel")
const User = require("../../models/User")
const Notification = require("../../models/notificationModel")

const insertNotice = async (req, res) => {
    try {
        const notice = Notice(req.body)
        const result = await notice.save()

        const users = await User.find({});
        const noticeMessage = 'New notice has been posted. Please check.';

    
        for (const user of users) {
            const userEmail = user.email;

            // Save the notification to the database
            const newNotification = new Notification({
                userEmail,
                message: noticeMessage,
            });
            await newNotification.save();

        }

        return res.status(200).json({ message: true, data: result })
    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = insertNotice