const SignInRouter = require('express').Router()
const { hashCompare, createToken } = require('../common/auth');
const userModel = require('../model/UserModel')

SignInRouter.post('/signin', async(req,res)=>{
    const {password, email} =req.body;
    
    const user = await userModel.findOne({email})

    if (user) {
        if(user.validation==true){
        if (await hashCompare(password,user.password)) {
            let token = await createToken({
                name:user.name,
                email:user.email,
                id:user._id,
                role:user.role
              })
            res.status(200).send({
                success: true,
                message: "SignIn Successfully!!!",
                data: user,
                token
            })
        } else {
            res.status(402).send({
                success: false,
                message: "Invalid Password!!!"
            })
        }
    }else{
        res.status(400).send({
            success:false,
            message:"Please Verify Your Email!!!"
        })
    }
    } else {
        res.status(403).send({
            success: false,
            message: "User Not Found"
        })
    }
})

module.exports = SignInRouter