const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
  ac_name: {
    type: String,
    required: true,
  },
  no_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        // Regular expression for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  ac_num: {
    type: String,
    require: true,
    unique: true,
    default: function () {
      // Generate a random value using any desired method
      return Math.random().toString(36).substring(2);
    },
  },
  nid: {
    type: Number,
    required: true,
    unique: true,
    max: 9999999999,
    min: 1000000000,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Account = model('Account', AccountSchema);

module.exports = Account;
