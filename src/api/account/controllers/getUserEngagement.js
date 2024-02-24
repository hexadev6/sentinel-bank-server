const Account= require("../../../models/accountModel")
const User= require("../../../models/User")

const userEngagement= async(req,res)=>{

    try{

        const countUsersWithAccount = await User.countDocuments({ acc_num: { $exists: true } });
        
     const totalUsers = await User.estimatedDocumentCount()

     const obj={
        countUsersWithAccount,
        totalUsers
     }
     res.json(obj)
     console.log(obj);


       
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = userEngagement;