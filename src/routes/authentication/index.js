require('dotenv').config();
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const authCookieToken = require('../../api/authentication/controllers/authCookieToken');
const logout = require('../../api/authentication/controllers/logout');


router.post('/jwt', authCookieToken)
router.post('/logout', logout);

module.exports = router;