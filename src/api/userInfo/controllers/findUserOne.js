const User = require("../../../models/User");

const findUserOne = async (req, res) => {
  try {
    const email = req.query.email;
    const result = await User.findOne({ email: email });
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = findUserOne;
