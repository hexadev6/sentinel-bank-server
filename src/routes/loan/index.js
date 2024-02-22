const applyLoan = require("../../api/loan/controllers/applyLoan");
const allLoan = require("../../api/loan/controllers/allLoan");
const singleUserLoan = require("../../api/loan/controllers/singleUserLoan");
const updateLoan = require("../../api/loan/controllers/updateLoan");

const router = require("express").Router();

router.post("/applyLoan", applyLoan);
router.get("/allLoan", allLoan);
router.get("/singleUserLoan/:id", singleUserLoan);
router.patch("/updateLoan/:id", updateLoan);

module.exports = router;
