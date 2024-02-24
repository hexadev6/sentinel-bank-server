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

module.exports = ChatModel;
