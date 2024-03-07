const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    default: "user",
  },
  image: {
    type: String,
  },
  acc_num: {
    type: Number,
  },
  location: {
    type: String,
  },
  nationality: {
    type: String,
  },
  DOB: {
    type: String,
  },
  mobile: {
    type: String,
  },
  loanStatus: [
    {
      loanId: String,
    },
  ],
});

const User = model("user", UserSchema);

module.exports = User;
