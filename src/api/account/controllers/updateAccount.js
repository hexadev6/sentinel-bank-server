const Account = require("../../../models/accountModel");

const updateAccount = async (req, res) => {
  try {
    const result = await Account.findByIdAndUpdate(req?.params?.id, req?.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ message: "Account update successfully", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateAccount;
