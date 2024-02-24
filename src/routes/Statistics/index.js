const router = require("express").Router();
const Statistics=require("../../api/account/controllers/Statistics")



router.get('/statistics',Statistics)

module.exports = router;