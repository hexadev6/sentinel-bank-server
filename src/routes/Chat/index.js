const getChatById = require("../../api/chatapp/liveChat/getChatById");
const router = require("express").Router();

router.get("/allChat/:id", getChatById);

module.exports = router;
