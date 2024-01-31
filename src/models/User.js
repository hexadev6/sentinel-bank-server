const { Schema, model } = require("mongoose");


const UserSchema = new Schema({
    'name':{
        type: String,
        required: true,
    },
    'email':{
        type: String,
        required: true,
        unique: true
    },
    'status': {
        type: String,
        required: true,
        default: 'user',
    },
    'image':{
        type: String,
        required: true,
    }
})

const User = model("user", UserSchema);

module.exports = User;