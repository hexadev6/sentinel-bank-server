const Account= require("../../../models/accountModel")
const User= require("../../../models/User")

const userEngagement= async(req,res)=>{

    try{

        const countUsersWithAccount = await User.countDocuments({ acc_num: { $exists: true } });
        
     const totalUsers = await User.countDocuments();

        //     {
        //         $match: {
        //             acc_Num: accNum, 
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: {Acc_num: '$acc_num'
                       
        //             },
        //             count: { $sum: 1 }
        //         }
        //     }
        
        // const totalUser= await User.aggregate([
        //     {

        //     }
        // ])
        const withOutAcc = Math.max(0, totalUsers - countUsersWithAccount);
        res.send({ countUsersWithAccount },totalUsers,withOutAcc);
        console.log({countUsersWithAccount},totalUsers,withOutAcc);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports = userEngagement;