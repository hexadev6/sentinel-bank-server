const applycard = require("../../../models/applycard");

const userAllCard = async (req, res) => {
  try {
    const acc_num = req.query.acc_num;
    const result = await applycard.find({ acc_num });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = userAllCard;
