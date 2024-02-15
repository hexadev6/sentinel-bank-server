
const router = require("express").Router();
const insertNotice = require('../../api/notice/insertNotice')
const getNotice = require('../../api/notice/getNotice')

router.post("/allNotice", insertNotice);
router.get("/allNotice", getNotice);

module.exports = router;
