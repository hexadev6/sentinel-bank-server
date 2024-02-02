const User = require("../../../models/User");


const createUser = async (req, res, next) => {
    try {
        const {name, email, image, nidnum} = req.body;
        const newUser = new User({
            name, email, image,nidnum
        })
        const result = await newUser.save();
        res.send({success: true, result})
    } catch (error) {
        next(error);
    }
}

module.exports = createUser;