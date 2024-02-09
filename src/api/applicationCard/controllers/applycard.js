const applycard = require("../../../models/applycard");

const applicationCard = async (req, res, next) => {
  try {
    const cardInfo = new applycard(req.body);
    const result = await cardInfo.save();
    res.send({ success: true, result });
  } catch (error) {
    res.send({ success: false, error });
    console.log(error);
    next(error);
  }
};

module.exports = applicationCard;
