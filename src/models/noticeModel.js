const {Schema, model} = require('mongoose')

const NoticeSchema = new Schema({

    title: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Notice = model('Notice', NoticeSchema)
module.exports = Notice;