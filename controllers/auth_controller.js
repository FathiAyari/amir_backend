var User = require('../models/user');
const becryp = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();



const SignUp = async (req, res, next) => {
    const email = req.body.email;
    User.findOne({email}).then(user => {
        if (!user) {
            const secretKey = process.env.SecretKey;

            let token = jwt.sign({email: email}, secretKey)
            if (req.body.password != null) {
                becryp.hash(req.body.password, 10, function (err, hashedPass) {
                    if (err) {
                        res.json({error: err});
                    }

                    let user = new User({
                        name: req.body.name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        role: req.body.role,
                        password: hashedPass,
                    })
                    user.save().then(user => {

                        res.status(200).json({
                            user: {
                                name: user.name, last_name: user.last_name, email: user.email, role: user.role,


                            }, token: token
                        })
                    }).catch(error => {
                        res.json({error: error})
                    })

                })
            } else {
                let user = new User({
                    name: req.body.name, last_name: req.body.last_name, email: req.body.email, role: req.body.role,
                })
                user.save().then(user => {

                    res.status(200).json({
                        user: {
                            name: user.name, last_name: user.last_name, email: user.email, role: user.role, token: token

                        }
                    })
                }).catch(error => {
                    res.json({error: error})
                })
            }
        } else {
            res.status(400).json({message: 'this email is already used'})

        }
    })

}

const SignIn = async (req, res, next) => {
    var email = req.body.email;
    var hashedPassword = req.body.password;
    User.findOne({email}).then(user => {
        if (user) {
            const secretKey = process.env.SecretKey;
            let token = jwt.sign({email: user.email}, secretKey)
            if (req.body.password != null) {
                becryp.compare(hashedPassword, user.password, function (err, result) {
                    if (err) {
                        res.json({error: err})
                    }
                    if (result) {
                        res.json({
                            user: {
                                name: user.name, last_name: user.last_name, email: user.email, role: user.role,

                            },
                            token: token
                        })
                    } else {
                        res.status(400).json({message: 'password does not match'})
                    }
                })
            } else {
                res.json({
                    user: {
                        name: user.name, last_name: user.last_name, email: user.email, role: user.role, token: token
                    }
                })
            }
        } else {
            res.status(400).json({message: 'no user with the provided cridentials'})
        }
    })


}


module.exports = {SignIn, SignUp}
