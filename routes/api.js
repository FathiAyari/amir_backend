const express=require('express');


const router=express.Router();

const authController=require('../controllers/auth_controller')



// authentication
router.post('/sign_in',authController.SignIn);
router.post('/sign_up',authController.SignUp);




module.exports=router;