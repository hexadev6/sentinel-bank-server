const allCard = require("../../api/applicationCard/controllers/allCard");
const applicationCard = require("../../api/applicationCard/controllers/applycard");
const findCardOne = require("../../api/applicationCard/controllers/findCardOne");
const updateCard = require("../../api/applicationCard/controllers/updateCard");
const userAllCard = require("../../api/applicationCard/controllers/userAllCard");
const CardApply= require("../../api/account/controllers/getCardApply")
const router = require("express").Router();

router.get("/findCardOne", findCardOne);
router.get("/findAllCard", allCard);
router.get("/userAllcard", userAllCard);
router.get("/getcardapply",CardApply)
router.post("/applicationCard", applicationCard);
router.patch("/updateCard/:id", updateCard);
module.exports = router;
