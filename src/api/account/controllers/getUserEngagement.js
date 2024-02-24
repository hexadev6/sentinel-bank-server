const Account = require("../../../models/accountModel");
const User = require("../../../models/User");

const userEngagement = async (req, res) => {
    const email= req.params.email
  try {
    const totalUser = await User.estimatedDocumentCount();
    const accountCount = await Account.countDocuments({ email });
    const obj={
        totalUser,
        accountCount
    }

    res.json(obj)
    // console.log(totalUser,{accountCount});
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = userEngagement;
