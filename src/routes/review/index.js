
const router = require("express").Router();
const insertReview = require('../../api/review/insertReview')
const getReview = require('../../api/review/getReview')

router.post("/allReviews", insertReview);
router.get("/allReviews", getReview);

module.exports = router;