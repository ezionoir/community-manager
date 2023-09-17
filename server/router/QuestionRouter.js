const router = require("express").Router();
const questionController = require("../controller/QuestionController");

router.post("/addquestion", questionController.addQuestion);
router.get("/verifyanswer", questionController.verifyAnswer);

module.exports = router;