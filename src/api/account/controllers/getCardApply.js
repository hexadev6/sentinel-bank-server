const applycard= require('../../../models/applycard')
const Loan = require('../../../models/loanModel')

const getCardApply=async(req,res)=>{
     try{
      const CardApply= await applycard.aggregate([
        {
            $group :{
                _id: '$card',
                count:{ $sum:1 }
            }
        }
      ])
      const loan= await Loan.estimatedDocumentCount()

      const total={
        CardApply, loan
      }

        res.json(total)
        console.log(total);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

     
}
module.exports= getCardApply;