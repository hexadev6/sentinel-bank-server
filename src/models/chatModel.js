const { Schema, model } = require('mongoose')


const chatSchema = new Schema({
    sender: { String },
    receiver: { String },
    message: { String },
    userType: {String},
    timestamp: { type: Date, default: Date.now },
});

const ChatModel = model('Chat', chatSchema);

module.exports = ChatModel;