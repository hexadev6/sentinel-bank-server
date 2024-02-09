const router = require("express").Router();
const allDeposits = require('../../api/account/controllers/depoHistory')
const getAllDeposit = require('../../api/account/controllers/getDepoHistory')

// router.post('/deposit', allDeposits );
router.post('/deposit/:id', allDeposits );
router.get('/getDeposit/:accNum', getAllDeposit );
module.exports = router;