var User=require('../models/user');
const becryp=require('bcryptjs')

const register=async(req,res,next)=>{
    becryp.hash(req.body.password,10,function (err,hashedPass) {
        if(err){
            res.json({error:err});
         }
        let user=new User ({
            name:req.body.name,
            lastName:req.body.lastName,
            email:req.body.email,
            role:req.body.role,
            password:hashedPass,
        })
        user.save().then(user=>{
            res.json({user:user})
        }).catch(error=>{
            res.json({error:error})
        })

    })

}

module.exports={register}
