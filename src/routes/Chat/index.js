const router = require("express").Router();
const getChatById = require('../../api/chatapp/liveChat/getChatById')


router.get("/allChat/:id", getChatById);


module.exports = router;


