const applyLoan = require("../../api/loan/controllers/applyLoan");
const allLoan = require("../../api/loan/controllers/allLoan");
const singleUserLoan = require("../../api/loan/controllers/singleUserLoan");

const router = require("express").Router();

router.post("/applyLoan", applyLoan);
router.get("/allLoan", allLoan);
router.get("/singleUserLoan", singleUserLoan);

module.exports = router;
