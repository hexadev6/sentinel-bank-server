const Notice = require("../../models/noticeModel")

const deleteNotice = async (req, res) => {
    try {
        const noticeId = req.params.id;
        const result = await Notice.findByIdAndDelete(noticeId)
        if (result) {
            console.log(result);
            return res.send(result);
        } else {
            return res.status(404).json({ message: "Notice not found" });
        }
    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}

module.exports = deleteNotice