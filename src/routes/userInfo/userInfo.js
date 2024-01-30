const {
  createUser,
  findUserOne,
  findUserMany,
  updateUser,
} = require("../../api/userInfo/controllers");

const router = require("express").Router();

router.post("/createUser", createUser);
router.get("/findUserOne", findUserOne);
router.get("/findUserMany", findUserMany);
router.patch("/updateUser/:id", updateUser);

module.exports = router;
