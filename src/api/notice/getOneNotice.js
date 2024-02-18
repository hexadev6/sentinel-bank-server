const Notice = require("../../models/noticeModel")

const getOneNotice = async (req, res) => {

    try {
        const noticeId = req.params.id;
        const result = await Notice.findOne({ _id: noticeId });

        return res.send(result);
    } catch (error) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = getOneNotice