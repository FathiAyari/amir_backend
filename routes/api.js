const express=require('express');


const router=express.Router();

const authController=require('../controllers/auth_controller')



// authentication with email and password
router.post('/register',authController.register);
router.post('/login',authController.login);

// authentication with social media
router.post('/register_social_media',authController.registerWithSocialMedia);
router.post('/login_social_media',authController.loginWithSocialMedia);



module.exports=router;