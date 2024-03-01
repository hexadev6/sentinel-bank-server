
const router = require("express").Router();
const getnotification = require('../../api/notification/getNotification')
const updateNotification = require('../../api/notification/updateNotification')

router.get("/notification/:email", getnotification);
// router.get("/notification/:id", updateNotification);
router.patch("/notification/:id", updateNotification);

module.exports = router;
