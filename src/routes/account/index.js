const {
  findBankAccountOne,
  createAccount,
  updateAccount,
  getUserAccounts,
  allAccount,
} = require("../../api/account/controllers");
const getAllAccounts = require("../../api/account/controllers/getAllAccounts");
const findByAccNum = require("../../api/account/controllers/findByAccount");
const router = require("express").Router();

router.get("/findBankAccountOne/:id", findBankAccountOne);
router.get("/findByAccNum/:accNum", findByAccNum);
router.get("/allAccountUser", allAccount);
router.patch("/updateAccount/:id", updateAccount);
router.post("/createBankAccount", createAccount);
router.get("/userAccounts", getUserAccounts);
router.get("/getAllAccounts", getAllAccounts);

module.exports = router;
