const {
  findBankAccountOne,
  createAccount,
  updateAccount,
  allAccountUser,
  getUserAccounts,
} = require("../../api/account/controllers");
const getAllAccounts = require("../../api/account/controllers/getAllAccounts");
const router = require("express").Router();

router.get("/findBankAccountOne", findBankAccountOne);
router.get("/allAccountUser", allAccountUser);
router.patch("/updateAccount/:id", updateAccount);
router.post("/createBankAccount", createAccount);
router.get("/userAccounts", getUserAccounts);
router.get('/getAllAccounts', getAllAccounts);

module.exports = router;
