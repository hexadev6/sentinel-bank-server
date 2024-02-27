const tokenGenerator = require("../../../lib/authentication/tokenGenerator");

const authCookieToken = async (req, res, next) => {
  try {
    const email = req.body.email;
    const token = tokenGenerator(email);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = authCookieToken;
