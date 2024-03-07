const User = require("../../../models/User");

const findUserMany = async (req, res) => {
  try {
    const result = await User.find();
    return res.status(200).json({ message: true, data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findUserMany;
