const express=require('express');


const router=express.Router();

const authController=require('../controllers/auth_controller')




router.post('/register',authController.register);
router.post('/login',authController.login);
router.get('/',function (req, res){
    res.json('welcome to amir backend apis')
});



module.exports=router;