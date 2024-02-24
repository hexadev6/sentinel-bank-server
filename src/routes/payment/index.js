const router = require("express").Router();
const createPayment = require('../../api/account/controllers/payment')
const savePayment = require('../../api/account/controllers/savePayment')

router.post('/create-payment-intent', createPayment);
router.post('/ssl-payment', savePayment);
module.exports = router;