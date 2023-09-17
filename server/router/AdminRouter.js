const router=require('express').Router();
const adminController = require('../controller/AdminController')
const authMiddleware = require('../middleware/AuthMiddleware')




// router.use(authMiddleware.isAdmin)


// router.post('/add-partner',adminController.addNewPartner);
// router.post('/delete-partner',adminController.deletePartner);
// router.post('/auth/google',AuthController.verifyGoogleLogin);

module.exports = router