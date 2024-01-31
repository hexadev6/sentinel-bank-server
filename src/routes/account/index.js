const {
  findBankAccountOne,
  createAccount,
  updateAccount,
  getUserAccounts,
  allAccount,
} = require("../../api/account/controllers");
const router = require("express").Router();

router.get("/findBankAccountOne", findBankAccountOne);
router.get("/allAccount", allAccount);
router.patch("/updateAccount/:id", updateAccount);
router.post("/createBankAccount", createAccount);
router.get("/userAccounts", getUserAccounts);

module.exports = router;
