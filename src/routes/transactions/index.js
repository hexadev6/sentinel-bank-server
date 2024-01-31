const router = require("express").Router();
const allTransactions = require('../../api/account/controllers/allTransactions')

router.post('/transactions', allTransactions );
module.exports = router;