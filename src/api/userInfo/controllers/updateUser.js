const User = require("../../../models/User");

const updateUser = async (req, res) => {
  try {
    const { loanStatus } = req?.body;
    if (loanStatus) {
      const result = await User.findByIdAndUpdate(
        req?.params?.id,
        { $push: { loanStatus: loanStatus } },
        { new: true }
      );
      return res.status(200).json({ message: "success", data: result });
    } else {
      const result = await User.findByIdAndUpdate(req?.params?.id, req.body, {
        new: true,
      });

      return res.status(200).json({ message: "success", data: result });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = updateUser;
