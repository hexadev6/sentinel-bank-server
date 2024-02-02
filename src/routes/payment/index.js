const router = require("express").Router();
const createPayment = require('../../api/account/controllers/payment')

router.post('/create-payment-intent', createPayment );
module.exports = router;