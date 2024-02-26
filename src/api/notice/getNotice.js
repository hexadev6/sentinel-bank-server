const Notice = require("../../models/noticeModel")

const getNotice = async (req, res) => {
    try {
        const result = await Notice.find().sort({ _id: -1 })
        return res.send(result)
    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = getNotice