const {
  authCookieToken,
  logout,
} = require("../../api/authentication/controllers");
const router = require("express").Router();

router.post("/jwt", authCookieToken);
router.post("/logout", logout);

module.exports = router;
