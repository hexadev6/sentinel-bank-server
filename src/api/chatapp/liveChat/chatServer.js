const socketIo = require("socket.io");
const ChatModel = require("../../../models/chatModel");
const { LOCAL_CLIENT, CLIENT } = require("../../../config/default.js");


const chatServer = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: [LOCAL_CLIENT, CLIENT],
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      // credentials: true,
      optionSuccessStatus: 200,
    },
  });

  io.on("connection", (socket) => {
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
    });


    socket.on("sendMessage", async (message) => {
      await ChatModel.create(message);

      io.to(message.receiver).emit("receiveMessage", message);
    });


    socket.on("disconnect", () => { });
  });
};


module.exports = chatServer;


