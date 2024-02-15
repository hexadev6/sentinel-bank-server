
const router = require("express").Router();
const insertNotice = require('../../api/notice/insertNotice')
const getNotice = require('../../api/notice/getNotice')
const deleteNotice = require('../../api/notice/deleteNotice')
const updateNotice = require('../../api/notice/updateNotice')

router.post("/allNotice", insertNotice);
router.get("/allNotice", getNotice);
router.delete("/allNotice/:id", deleteNotice);
router.patch("/allNotice/:id", updateNotice);

module.exports = router;
