const EditUserRouter = require('express').Router()
const userModel = require('../model/UserModel')

EditUserRouter.patch('/edit', async(req,res)=>{
    let {book, id} = req.body

    let user = await userModel.findOne({_id:id}).then().catch((error)=>{
        res.status(401).send({
            success:false,
            message:"User Not Found!!!",
            error
        })
    })

    if(user){
        if(book!= null){
            user.book = book
            user.save().then((responce)=>{
                res.status(200).send({
                    success:true,
                    message:'Bike Booked Successfully!!!',
                    data:responce
                })
            })
        }else{
            user.book = book
            user.save().then((responce)=>{
                res.status(200).send({
                    success:true,
                    message:'Bike Returned Successfully!!!',
                    data:responce
                })
            })
        }
       
    }

})
module.exports = EditUserRouter