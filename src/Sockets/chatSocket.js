const chatSocket = (io) => {
  io.on("connection", (socket) => {
    // console.log("A user connected");

    socket.on("send_message", (messageData) => {
      // console.log("Received message:", messageData);
      io.emit("receive_message", messageData);
    });

    // Handle other chat events as needed

    socket.on("disconnect", () => {
      // console.log("User disconnected");
    });
  });
};

module.exports = chatSocket;
