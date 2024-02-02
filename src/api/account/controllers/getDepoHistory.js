const Deposits = require('../../../models/DepositHistoryModel')

const getAllDeposit = async(req,res)=>{
    try{
        const accNum = req.params.accNum;
        console.log(accNum)

        const result = await Deposits.find({ acc_Num: accNum });
        console.log(result)
        return res.status(200).json({ message: true, data: result });
    
    }
    catch(err){
        res.send(err)
    }
} 
module.exports =getAllDeposit