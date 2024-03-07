const Account= require('../../../models/accountModel')

const getAccountChart=async(req,res)=>{

    try{
      const AccountChart= await Account.aggregate([
        {
            $group :{
                _id: '$type',
                count:{ $sum:1 }
            }
        }
      ])

        res.send(AccountChart)
        // console.log(AccountChart);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

}
module.exports = getAccountChart;