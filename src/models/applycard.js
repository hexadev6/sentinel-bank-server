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
  cardNumber: {
    type: Number,
    require: true,
    unique: true,
    default: function () {
      // Generate a random value using any desired method
      return Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    },
  },
  expirationDate: {
    type: Date,
    default: function () {
      // Set default expiration date to one year from now
      const now = new Date();
      return new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
    },
  },
  cvv: {
    type: String,
    required: true,
    default: function () {
      // Generate a random 3-digit CVV
      return Math.floor(100 + Math.random() * 900).toString();
    },
  },

  status: {
    type: String,
    default: "not-active",
    required: true,
  },
});

const applycard = model("applycard", applicationCard);

module.exports = applycard;
