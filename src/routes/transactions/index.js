const router = require("express").Router();
const allDeposits = require('../../api/account/controllers/depoHistory')
const getAllDeposit = require('../../api/account/controllers/getDepoHistory')
const transactionSummary= require('../../api/account/controllers/getTrasactionSummary')


// // router.post('/deposit', allDeposits );
router.get('/transactionSummary/:accNum', transactionSummary)
router.post('/deposit/:id', allDeposits );
router.get('/getDeposit/:accNum', getAllDeposit );

module.exports = router;