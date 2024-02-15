const Notice = require("../../models/noticeModel")

const insertNotice = async (req, res) => {
    try {
        const notice = Notice(req.body)
        const result = await notice.save()
        return res.status(200).json({ message: true, data: result })
    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = insertNotice