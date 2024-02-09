require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  CLIENT: process.env.CLIENT,
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = Object.freeze(config);
