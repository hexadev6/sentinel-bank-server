const express = require("express");
const cors= require("cors")
const http = require("http");
const socketIo = require("socket.io");
const globalErrorHandler = require("./utils/globalErrorHandler");
// start chat
const chatServer = require('./api/chatapp/liveChat/chatServer')
//end  chat
const applyMiddleware = require("./middlewares");
const app = express();
// start chat
const http = require('http');
const server = http.createServer(app);
// end chat
const port = process.env.PORT || 5000;
const authRoutes = require("./routes/authentication");
const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authentication");
const userRoutes = require("./routes/userInfo/userInfo");
const accountRoutes = require("./routes/account");
const paymentRoutes = require("./routes/payment");
const transactionsRoutes = require("./routes/transactions");
const applicationCardRoutes = require("./routes/applicationCard");
// const allDeposits = require("./routes/transactions");
const reviewRoutes = require("./routes/review");
const noticeRoutes = require("./routes/notice");
const chatSocket = require("../Sockets/chatSocket");

app.use(cors());
// applying all middlewares like cors, express json, cookie parser
applyMiddleware(app);

app.use(authRoutes);
app.use(userRoutes);
app.use(accountRoutes);
app.use(paymentRoutes);
app.use(transactionsRoutes);
app.use(applicationCardRoutes);
app.use(reviewRoutes);
app.use(noticeRoutes);


// default route
app.get("/", async (req, res) => {
  try {
    res.status(200).send("SENTINEL TRUST BANK SERVER IS ONLINE......");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// handle all unhandled routes
app.all("*", async (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

// Set up the chat server
chatServer(server);


const main = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log(`server is listening to ${port}`);
  });
};

main();








// const express = require("express");
// const globalErrorHandler = require("./utils/globalErrorHandler");
// const applyMiddleware = require("./middlewares");
// const app = express();
// const port = process.env.PORT || 5000;
// const authRoutes = require("./routes/authentication");
// const connectDB = require("./db/connectDB");
// const userRoutes = require("./routes/userInfo/userInfo");
// const accountRoutes = require("./routes/account");
// const paymentRoutes = require("./routes/payment");
// const transactionsRoutes = require("./routes/transactions");
// const applicationCardRoutes = require("./routes/applicationCard");
// const allDeposits = require("./routes/transactions");
// const reviewRoutes = require("./routes/review");
// const noticeRoutes = require("./routes/notice");


// // applying all middlewares like cors, express json, cookie parser
// applyMiddleware(app);

// app.use(authRoutes);
// app.use(userRoutes);
// app.use(accountRoutes);
// app.use(paymentRoutes);
// app.use(transactionsRoutes);
// app.use(applicationCardRoutes);
// app.use(reviewRoutes);
// app.use(noticeRoutes);

// // default route
// app.get("/", async (req, res) => {
//   try {
//     res.status(200).send("SENTINEL TRUST BANK SERVER IS ONLINE......");
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

// // handle all unhandled routes
// app.all("*", async (req, res, next) => {
//   const error = new Error(`Can't find ${req.originalUrl} on the server`);
//   error.status = 404;
//   next(error);
// });

// // error handling middleware
// app.use(globalErrorHandler);

// const main = async () => {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`server is listening to ${port}`);
//   });
// };

// main();
