const GetUserDetail = require('express').Router()
const userModel = require('../model/UserModel')

GetUserDetail.post('/user', async(req,res)=>{
    let {email} = req.body

    let user = await userModel.findOne({email})

    if(user){
        res.status(200).send({
            success:true,
            message:"User Found !!!",
            data:user
        })
    }else{
        res.status(401).send({
            success:false,
            message:"User Not Found!!!"
        })
    }

})

module.exports = GetUserDetail