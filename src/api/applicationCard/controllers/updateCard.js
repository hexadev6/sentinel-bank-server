const applycard = require("../../../models/applycard");

const updateCard = async (req, res) => {
  try {
    const result = await applycard.findByIdAndUpdate(
      req?.params?.id,
      req?.body,
      {
        new: true,
      }
    );

    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateCard;
