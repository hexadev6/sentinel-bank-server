const applycard= require('../../../models/applycard')

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

        res.send(CardApply)
        // console.log(CardApply);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

     
}
module.exports= getCardApply;