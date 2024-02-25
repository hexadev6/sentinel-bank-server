const { Schema, model } = require('mongoose')

const NotificationSchema = new Schema({

    userEmail: { type: String, required: true }, // Use email as a reference
    message: String,
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

const Notification = model('Notification', NotificationSchema)
module.exports = Notification;