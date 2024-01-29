const {
  findBankAccountOne,
  createAccount,
  updateAccount,
  allAccountUser,
} = require("../../api/account/controllers");

const router = require("express").Router();

router.post("/createAccount", createAccount);
router.get("/findBankAccountOne", findBankAccountOne);
router.get("/allAccountUser", allAccountUser);
router.patch("/updateAccount/:id", updateAccount);

module.exports = router;
