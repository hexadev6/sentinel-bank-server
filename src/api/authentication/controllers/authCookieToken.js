const tokenGenerator = require("../../../lib/authentication/tokenGenerator");


const authCookieToken = async (req, res) => {
    const email = req.body.email;
    const token = tokenGenerator(email);
    res.send({token});
}

module.exports = authCookieToken;