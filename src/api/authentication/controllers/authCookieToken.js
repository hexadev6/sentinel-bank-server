const tokenGenerator = require("../../../lib/authentication/tokenGenerator");

const authCookieToken = async (req, res, next) => {
  try {
    const email = req.body.email;
    const token = tokenGenerator(email);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = authCookieToken;
