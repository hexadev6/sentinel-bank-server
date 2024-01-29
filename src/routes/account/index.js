const createAccount = require('../../api/account/controllers/createAccount');
const getUserAccounts = require('../../api/account/controllers/getUserAccounts');

const router = require('express').Router();


router.post('/createBankAccount', createAccount);
router.get('/userAccounts', getUserAccounts)
// router.get
// router.patch

module.exports = router