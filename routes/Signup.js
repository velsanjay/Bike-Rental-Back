const SignUpRouter = require('express').Router()
const userModel = require("../model/UserModel")
const {hashPassword, makeid} = require('../common/auth')

SignUpRouter.post('/signup',async(req,res)=>{
    const { name, email, password,phoneNo, confirmPassword, role, licenceNo, expDate } = req.body;

    const user = await userModel.findOne({email})
    if(user){
        res.status(401).send({
            success:false,
            message:"User Already Exist!!!"
        })
    }else{
        
       let newUser = new userModel({
        name,
        email,
        password,
        phoneNo,
        role,
        licenceNo,
        expDate,
        value:makeid()
       })
       if(password==confirmPassword){

       let hashedPassword =await hashPassword(password)
        newUser.password = hashedPassword

        newUser.save().then((responce)=>{
            res.status(200).send({
                success:true,
                message:"User Created Successfully!!!",
                data:responce
            })
        }).catch((error)=>{
            res.status(401).send({
                success:false,
                messege:"User Created Failed!!!",
                error
            })
        })
       }else{
        res.status(400).send({
            success:false,
            message:"Password Are Not Same!!!"
        })
       }
    }
})

module.exports = SignUpRouter