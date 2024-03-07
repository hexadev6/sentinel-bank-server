const router = require("express").Router();
const createPayment = require('../../api/account/controllers/payment')
const savePayment = require('../../api/account/controllers/savePayment')
const countBalance = require('../../api/transaction/countBalance')

router.post('/create-payment-intent', createPayment);
router.post('/ssl-banking', savePayment);
router.post('/balance',countBalance );
// router.post('/ssl-payment', savePayment);
module.exports = router;