const User = require("../../../models/User");


const createUser = async (req, res, next) => {
    try {
        const {name, email, image, nidnum} = req.body;
        const newUser = new User({
            
            name, email, image,nidnum
        })
        // console.log('new',newUser);
        const result = await newUser.save();
        // console.log('result',result);
        res.send({success: true, result})
    } catch (error) {
        console.log('error',error);
        next(error);
        
    }
}

module.exports = createUser;