const Notice = require("../../models/noticeModel")

const updateNotice = async (req, res) => {

    try {
        const noticeId = req.params.id;
        const newNotice = req.body
        const result = await Notice.findByIdAndUpdate(
            noticeId,
            newNotice,
            {
                new: true,
            }
        );

        return res.send(result);
    } catch (error) {
        console.log(err)
        return res.send(err)
    }

}

module.exports = updateNotice