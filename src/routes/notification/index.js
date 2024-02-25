
const router = require("express").Router();
const getnotification = require('../../api/notification/getNotification')

router.get("/notification/:email", getnotification);

module.exports = router;
