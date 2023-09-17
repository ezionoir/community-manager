const router = require("express").Router();
const userController = require("../controller/UserController");

router.post("/signup", userController.addUser);
router.get("/view", userController.getDetails);

module.exports = router;