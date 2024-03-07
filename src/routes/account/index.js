const {
  findBankAccountOne,
  createAccount,
  updateAccount,
  getUserAccounts,
  allAccount,
} = require("../../api/account/controllers");
const getAccountChart= require('../../api/account/controllers/getAccountChart')
const getAllAccounts = require("../../api/account/controllers/getAllAccounts");
const findByAccNum = require("../../api/account/controllers/findByAccount");
const userEngagement= require("../../api/account/controllers/getUserEngagement")
const router = require("express").Router();

router.get("/findBankAccountOne/:id", findBankAccountOne);
router.get("/findByAccNum/:accNum", findByAccNum);
router.get("/allAccountUser", allAccount);
router.patch("/updateAccount/:id", updateAccount);
router.post("/createBankAccount", createAccount);
router.get("/userAccounts", getUserAccounts);
router.get("/getAllAccounts", getAllAccounts);
router.get("/getAccountChart",getAccountChart)
router.get("/userEngagement",userEngagement)

module.exports = router;
