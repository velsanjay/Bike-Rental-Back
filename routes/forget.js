const ForgetRouter = require('express').Router()
const { hashPassword } = require('../common/auth')
const userModel = require('../model/UserModel')

ForgetRouter.patch('/forget',async(req,res)=>{
    const {email, password, confirmPassword} = req.body

    const user = await userModel.findOne({email})

    if(user){
        if(password == confirmPassword){
            let hashedPassword = await hashPassword(password)
            user.password = hashedPassword
            user.validation = false
            
            user.save().then((responce)=>{
                res.status(200).send({
                    success:true,
                    message1:"Password Changed Successfully",
                    message2:"Please Verify Your Email!!!",
                    data:responce
                })
            })
        }else{
            res.status(401).send({
                success:false,
                message:"Password Are Not Same!!!"
            })
        }
        }else{
            res.status(401).send({
                success:false,
                message:"User Not Found!!!"
            })
    }
})

module.exports = ForgetRouter