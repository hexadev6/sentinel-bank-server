const applycard = require("../../../models/applycard");

const allCard = async (req, res) => {
  try {
    const result = await applycard.find();
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = allCard;
