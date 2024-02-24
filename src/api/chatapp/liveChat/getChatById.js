const ChatModel = require("../../../models/chatModel");


const getChatById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await ChatModel.find({ $or: [{ sender: userId }, { receiver: userId }] });


        return res.send(result)
    }
    catch (err) {
        console.log(err)
        return res.send(err)
    }
}


module.exports = getChatById
