require('dotenv').config();
const jwt = require('jsonwebtoken')

const tokenGenerator = (email) => {
    return jwt.sign({email: email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '24h'})
}

module.exports = tokenGenerator;