const createUser = require('../../api/userInfo/controllers/createUser');

const router = require('express').Router();

router.post('/createUser', createUser);

module.exports = router;