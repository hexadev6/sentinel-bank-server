const User = require("../../../models/User");


const createUser = async (req, res, next) => {
    try {
        const {name, email, image} = req.body;
        const newUser = new User({
            name, email, image
        })
        const result = await newUser.save();
        res.send(result)
    } catch (error) {
        next(error);
    }
}

module.exports = createUser;