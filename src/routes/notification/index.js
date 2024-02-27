
const router = require("express").Router();
const getnotification = require('../../api/notification/getNotification')
const putnotification= require('../../api/notification/putNotification')
router.get("/notification/:email", getnotification);
router.get("/notification/:id", putnotification );

module.exports = router;
