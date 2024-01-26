const createAccount = require('../../api/account/controllers/createAccount');

const router = require('express').Router();


router.post('/createAccount', createAccount);

module.exports = router