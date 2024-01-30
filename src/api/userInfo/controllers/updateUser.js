const User = require("../../../models/User");

const updateUser = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req?.params?.id, req.body, {
      new: true,
    });

    return res.status(200).json({ message: "success", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateUser;
