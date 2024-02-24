const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    sender: { type: String },
    senderImage: { type: String },
    senderName:{ type: String },
    receiver: { type: String },
    message: { type: String },
    userType: { type: String },
    timestamp: { type: Date, default: Date.now },
});


const ChatModel = model('Chat', chatSchema);

<<<<<<< HEAD
module.exports = ChatModel;
=======

module.exports = ChatModel;
>>>>>>> 6338b7182082ea4709662104afa082a9a9c3b492
