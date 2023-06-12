const ValidateRouter = require('express').Router()
const { makeid } = require('../common/auth')
const userModel = require('../model/UserModel')

ValidateRouter.patch('/validate',async(req,res)=>{
    const {email, value } = req.body
    
    const user = await userModel.findOne({email})

    if(user){
        if(user.value == value){
            user.validation= true
            user.value =makeid()

            user.save().then((responce)=>{
                res.status(200).send({
                    success:true,
                    message:"User Verified Successfully!!!",
                    data:responce
                })
            })
        }else{
            res.status(401).send({
                success:false,
                message:"Key is Not Valid!!!"
            })
        }
    }else{
        res.status(400).send({
            success:false,
            message:"User Not Found!!!"
        })
    }
})


module.exports = ValidateRouter