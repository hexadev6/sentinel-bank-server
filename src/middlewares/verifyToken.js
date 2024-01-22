require('dotenv').config();

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;

    if(!token) {
        res.status(401).send({message: 'unathorized access'})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).send({message: 'unathorized access'})
        }
        req.user = decoded;
        next();
    })
}

module.exports = verifyToken