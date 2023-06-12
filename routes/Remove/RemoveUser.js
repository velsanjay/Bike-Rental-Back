const RemoveUserRouter = require('express').Router()
const userModel = require('../../model/UserModel')

RemoveUserRouter.post('/remove',async(req,res)=>{
    const {id} = req.body

    await userModel.deleteOne({_id:id}).then((responce)=>{
        res.status(200).send({
            success:true,
            message:"User Removed Successfully!!!",
            data:responce
        })
    }).catch((error)=>{
        res.status(401).send({
            success:false,
            message:"User Removed Failed!!!",
            error
        })
    })

})

module.exports = RemoveUserRouter