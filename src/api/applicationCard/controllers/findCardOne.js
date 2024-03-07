const applycard = require("../../../models/applycard");

const findCardOne = async (req, res) => {
  try {
    const id = req.query.id;
    const result = await applycard.findOne({ _id: id });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = findCardOne;
