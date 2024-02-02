const {
  findBankAccountOne,
  createAccount,
  updateAccount,
  getUserAccounts,
  allAccount,
} = require("../../api/account/controllers");
const getAllAccounts = require("../../api/account/controllers/getAllAccounts");
const router = require("express").Router();

router.get("/findBankAccountOne/:id", findBankAccountOne);
router.get("/allAccountUser", allAccount);
router.patch("/updateAccount/:id", updateAccount);
router.post("/createBankAccount", createAccount);
router.get("/userAccounts", getUserAccounts);
router.get("/getAllAccounts", getAllAccounts);

module.exports = router;
