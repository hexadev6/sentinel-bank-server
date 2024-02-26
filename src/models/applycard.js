const { Schema, model } = require("mongoose");

const applicationCard = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },

  nationality: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  acc_num: {
    type: String,
    require: true,
  },

  phnNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  card_type: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },

  zipCode: {
    type: String,
  },

  status: {
    type: String,
    default: "not-active",
    required: true,
  },
});

const applycard = model("applycard", applicationCard);

module.exports = applycard;
