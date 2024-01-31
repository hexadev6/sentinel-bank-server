const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
  holderName: {
    type: String,
    required: true,
  },
  holderEmail: {
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
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },

  acc_num: {
    type: Number,
    require: true,
    unique: true,
    default: function () {
      // Generate a random value using any desired method
      return Math.floor(1000000000 + Math.random() * 9000000000);
    },
  },
  holderDOB: {
    type: Date,
    required: true, // Make the field required
    validate: {
      validator: function (value) {
        // Use your validation logic here
        return value instanceof Date && !isNaN(value);
      },
      message: (props) => `${props.value} is not a valid date!`,
    },
  },
  nidnumber: {
    type: Number,
    required: true,
    max: 9999999999,
    min: 1000000000,
  },
  phnNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  income_source: {
    type: String,
    required: true,
  },
  initial_deposit: {
    type: Number,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  nominee: {
    type: String,
    required: true,
  },
  documents: {
    type: [String],
    required: true
  },
  profileImg: {
    type: String,
    required: true
  }
});

const Account = model("Account", AccountSchema);

module.exports = Account;
