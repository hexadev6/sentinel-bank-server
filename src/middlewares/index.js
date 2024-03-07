const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT, PROD_CLIENT } = require("../config/default.js");

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: [PROD_CLIENT, LOCAL_CLIENT],
      credentials: true,
      optionSuccessStatus: 200,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddleware;
