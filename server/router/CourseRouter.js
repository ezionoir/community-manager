const router = require("express").Router();
const courseController = require("../controller/CourseController");

router.post("/addcourse", courseController.addCourse);
router.get("/view", courseController.getDetails);

module.exports = router;