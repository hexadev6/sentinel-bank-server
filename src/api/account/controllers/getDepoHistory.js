const Deposits = require('../../../models/DepositHistoryModel')

const getAllDeposit = async(req,res)=>{
    try{
        const accNum = req.params.accNum;

        const result = await Deposits.find({ acc_Num: accNum });
        return res.status(200).json({ message: true, data: result });
    
    }
    catch(err){
        res.send(err)
    }
} 
module.exports =getAllDeposit