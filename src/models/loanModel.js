const { Schema, model, now } = require("mongoose");

const LoanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  anIncome: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: String,
    required: true,
  },
  loanPurpose: {
    type: String,
    required: true,
  },
  loanSubmit: {
    type: String,
    required: true,
  },
  mnIncome: {
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

  streetAd: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  postCode: {
    type: String,
    required: true,
  },
  state: {
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
  },

  number: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },

  status: {
    type: String,
    default: "Pending",
  },
  loanCompRang: {
    type: Number,
    default: 0,
  },
  loanDue: {
    type: Number,
    default: 0,
  },
  perLoan: {
    type: Number,
    default: 0,
  },
  interest: {
    type: Number,
    default: 0,
  },
  profit: {
    type: Number,
    default: 0,
  },
  submitDate: [
    {
      type: String,
      default: 0,
    },
  ],
  createAT: {
    type: Date,
    default: Date.now,
  },
});

const Loan = model("loan", LoanSchema);

module.exports = Loan;
